import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
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

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: distribution.distributionDomainName,
      description: 'CloudFront URL for the frontend'
    });
  }
}