import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class BackendLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DeploymentQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    // ECR Repository Name
    const dockerTag = new cdk.CfnParameter(this, 'DockerTag', {
      type: 'String',
      default: 'latest', // Default in case it's not passed
    });

    const repoName = process.env.ECR_REPO || "clojure-workout-backend";
    
    const paramName = '/workout-demo/config';

    const lambdaRole = new iam.Role(this, 'LambdaExecutionRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2ContainerRegistryReadOnly')
      ],
      inlinePolicies: {
        'LambdaExecutionPolicy': new iam.PolicyDocument({
          statements: [
            new iam.PolicyStatement({
              actions: ['ssm:GetParameter'],
              resources: ['*'],
            }),
          ],
        }),
      }
    });
    const bucketName = "workout-demo-lambda-bucket";
    const objectKey = "lambda-native.zip";
    // Lambda function using native image from zip
    const lambdaFunction = new lambda.Function(this, 'WorkoutDemoLambda', {
      functionName: process.env.LAMBDA_FUNCTION_NAME || "WorkoutDemoLambda",
      runtime: lambda.Runtime.PROVIDED_AL2023, 
      handler: "bootstrap", 
      code: lambda.Code.fromBucket(s3.Bucket.fromBucketName(this, 'LambdaBucket', bucketName), objectKey),
      memorySize: 512,
      timeout: cdk.Duration.seconds(30),
      environment: {
        CONFIG_PARAM_NAME: paramName
      },
      role: lambdaRole
    });

    const api = new apigw.LambdaRestApi(this, 'ApiGwEndpoint', {
      handler: lambdaFunction,
      restApiName: "WorkoutDemoApi",
      deployOptions: {
        stageName: "prod"
      },
      defaultCorsPreflightOptions: {
        allowOrigins: ["https://vol1n.dev", "https://dimmin3f9flnh.cloudfront.net"], 
        allowMethods: ["OPTIONS", "GET", "POST", "PUT", "DELETE"],
        allowHeaders: ["Content-Type", "Authorization"],
        allowCredentials: true,
      },
    });

    // 🔹 Output the API Gateway Invoke URL
    new cdk.CfnOutput(this, 'ApiGatewayInvokeUrl', {
      value: api.url,  // ✅ The Invoke URL
      description: 'The Invoke URL of the API Gateway',
      exportName: 'ApiGatewayInvokeUrl'
    });

    // 🔹 Output the Lambda function name
    new cdk.CfnOutput(this, 'LambdaFunctionName', {
      value: lambdaFunction.functionName,
      description: 'The deployed Lambda function name'
    });
  }
}
