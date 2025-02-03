import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import { Construct } from 'constructs';

export class FrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const frontendBucket = new s3.Bucket(this, 'FrontendBucket', {
      bucketName: `shadowcljs-frontend-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    const distribution = new cloudfront.Distribution(this, 'FrontendDistribution', {
      defaultBehavior: {
        origin: new origins.S3Origin(frontendBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },
      defaultRootObject: 'index.html'
    });

    const apiGatewayUrl = cdk.Lazy.string({ produce: () => cdk.Fn.importValue('ApiGatewayInvokeUrl') });

    new s3deploy.BucketDeployment(this, 'DeployFrontend', {
      sources: [s3deploy.Source.asset('../resources/public'), s3deploy.Source.jsonData("/config.json", JSON.stringify({ apiGatewayUrl }))],
      destinationBucket: frontendBucket,
      distribution,
      distributionPaths: ['/*']
    });

    const updateConfigLambda = new lambda.Function(this, 'UpdateConfigLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromInline(`
        const AWS = require('aws-sdk');
        const s3 = new AWS.S3();
        const cloudformation = new AWS.CloudFormation();

        exports.handler = async function(event) {
          console.log("Event: ", JSON.stringify(event, null, 2));

          if (event.RequestType === 'Delete') return { Status: "SUCCESS" };

          // Fetch CloudFormation exports
          const exportsList = await cloudformation.listExports().promise();
          const apiGatewayUrlExport = exportsList.Exports.find(exp => exp.Name === 'ApiGatewayInvokeUrl');

          if (!apiGatewayUrlExport) throw new Error("Export ApiGatewayInvokeUrl not found");

          console.log("Writing API Gateway URL to S3: ", apiGatewayUrlExport.Value);

          // Write config.json to S3
          await s3.putObject({
            Bucket: process.env.BUCKET_NAME,
            Key: 'config.json',
            Body: JSON.stringify({ apiGatewayUrl: apiGatewayUrlExport.Value }),
            ContentType: 'application/json',
          }).promise();

          return { Status: "SUCCESS" };
        };
      `),
      timeout: cdk.Duration.seconds(10),
      environment: {
        BUCKET_NAME: frontendBucket.bucketName,
      },
    });

    frontendBucket.grantPut(updateConfigLambda); // Allow Lambda to write to S3

    // Create a custom resource that invokes the Lambda
    new cdk.CustomResource(this, 'ConfigUpdater', {
      serviceToken: updateConfigLambda.functionArn,
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: distribution.distributionDomainName,
      description: 'CloudFront URL for the frontend'
    });
  }
}