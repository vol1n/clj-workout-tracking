import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';

export class BackendLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'DeploymentQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    // ECR Repository Name
    const repoName = process.env.ECR_REPO || "clojure-workout-backend";
    const dockerTag = process.env.DOCKER_TAG || "latest";

    // Define IAM Role for Lambda to Pull from ECR
    const lambdaRole = new iam.Role(this, 'LambdaExecutionRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonEC2ContainerRegistryReadOnly')
      ]
    });

    // Lambda Function using Docker Image
    const lambdaFunction = new lambda.DockerImageFunction(this, 'WorkoutDemoLambda', {
      functionName: process.env.LAMBDA_FUNCTION_NAME || "WorkoutDemoLambda",
      code: lambda.DockerImageCode.fromEcr(
        ecr.Repository.fromRepositoryName(this, 'ECRRepository', repoName),
        {
          tag: dockerTag
        }
      ),
      role: lambdaRole,
      timeout: cdk.Duration.seconds(30),
      memorySize: 512
    });

    // Output the Lambda function name
    new cdk.CfnOutput(this, 'LambdaFunctionName', {
      value: lambdaFunction.functionName
    });
  }
}
