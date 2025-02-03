import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import { Construct } from 'constructs';

export class FrontendCloudfrontStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const frontendBucket = new s3.Bucket(this, 'FrontendBucket', {
      bucketName: `shadowcljs-frontend-${this.account}-${this.region}`,
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false
      }),
      websiteIndexDocument: 'index.html',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });

    const bucketPolicyStatement = new s3.BucketPolicy(this, 'BucketPolicy', {
      bucket: frontendBucket
    });

    bucketPolicyStatement.document.addStatements(
      new cdk.aws_iam.PolicyStatement({
        effect: cdk.aws_iam.Effect.ALLOW,
        principals: [new cdk.aws_iam.AnyPrincipal()],
        actions: ["s3:GetObject"],
        resources: [`${frontendBucket.bucketArn}/*`],
      })
    );


    const distribution = new cloudfront.Distribution(this, 'FrontendDistribution', {
      defaultBehavior: {
        origin: new origins.HttpOrigin(frontendBucket.bucketWebsiteDomainName),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
      },
      // additionalBehaviors: {
      //   "/clojure-workout-tracker": {
      //     origin: new origins.S3Origin(frontendBucket, {
      //       originAccessIdentity: originAccessControl
      //     }),
      //     viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      //   },
      //   "/clojure-workout-tracker/*": {
      //     origin: new origins.S3Origin(frontendBucket, {
      //       originAccessIdentity: originAccessControl
      //     }),
      //     viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      //   },
      // },
    });

    new s3deploy.BucketDeployment(this, 'DeployFrontend', {
      sources: [s3deploy.Source.asset('../resources/public')],
      destinationBucket: frontendBucket,
      destinationKeyPrefix: 'clojure-workout-tracker/',
      distribution,
      distributionPaths: ['/*']
    });

    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: distribution.distributionDomainName,
      description: 'CloudFront URL for the frontend'
    });
  }
}