import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ecr from 'aws-cdk-lib/aws-ecr';

export class BackendLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const dockerTag = new cdk.CfnParameter(this, 'DockerTag', {
      type: 'String',
      default: 'latest', // Default in case it's not passed
    });

    const jarS3Key = new cdk.CfnParameter(this, 'JarS3Key', {
      type: 'String',
      default: 'app.jar'
    })

    const latestZip = new cdk.CfnParameter(this, 'LatestZip', {
      type: 'String',
      default: '', // Default in case it's not passed
    });

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
    const repository = ecr.Repository.fromRepositoryName(this, 'Repository', 'clojure-workout-backend');
    // const lambdaFunction = new lambda.Function(this, 'WorkoutDemoLambda', {
    //   functionName: "WorkoutDemoLambda",
    //   runtime: lambda.Runtime.JAVA_21, // Required for SnapStart
    //   command: 
    //   code: lambda.Code.fromBucket(
    //     s3.Bucket.fromBucketName(this, 'LambdaBucket', 'my-lambda-jars'),
    //     'workout-demo.jar'
    //   ),
    //   memorySize: 1024, // Increase memory for JVM performance
    //   timeout: cdk.Duration.seconds(30),
    //   environment: {
    //     CONFIG_PARAM_NAME: paramName
    //   },
    //   role: lambdaRole,
    //   architecture: lambda.Architecture.X86_64, // ARM64 if you want better performance
    //   snapStart: lambda.SnapStartConf.ON_PUBLISHED_VERSIONS, // Enable SnapStart
    // });
    // const lambdaFunction = new lambda.DockerImageFunction(this, 'WorkoutDemoLambda', {
    //   functionName: "WorkoutDemoLambda",
    //   code: lambda.DockerImageCode.fromEcr(repository, {
    //     tagOrDigest: dockerTag.valueAsString
    //   }),
    //   memorySize: 512,
    //   timeout: cdk.Duration.seconds(40),
    //   environment: {
    //     CONFIG_PARAM_NAME: paramName,
    //     HL_DEBUG: "true"
    //   },
    //   role: lambdaRole,
    //   architecture: lambda.Architecture.X86_64,
    // });
    const babashkaDepsLayer = new lambda.LayerVersion(this, 'BabashkaDepsLayer', {
      layerVersionName: 'BabashkaDepsLayer',
      code: lambda.Code.fromAsset('../backend/.holy-lambda/bb-clj-deps'), // Point to layer content
      compatibleRuntimes: [lambda.Runtime.JAVA_11, lambda.Runtime.PROVIDED_AL2], // Adjust runtime if needed
      description: 'Babashka dependencies layer',
    });

    const babashkaRuntimeLayer = new lambda.LayerVersion(this, 'BabashkaRuntimeLayer', {
      layerVersionName: 'BabashkaRuntimeLayer',
      code: lambda.Code.fromBucket(
        s3.Bucket.fromBucketName(this, 'BabashkaLayerBucket', 'lambda-babashka-layer-bucket'),
        'holy-lambda-babashka-runtime-amd64.zip'
      ), // Point to layer content
      compatibleRuntimes: [lambda.Runtime.PROVIDED_AL2], // Adjust runtime if needed
      description: 'Babashka runtime layer',
    });

    // 🔹 Import an existing Lambda Layer by ARN (Replace with actual ARN)
    // const existingLayerArn = 'arn:aws:lambda:us-east-1:842875382465:layer:holy-lambda-babashka-runtime-amd64:1';
    // const importedLayer = lambda.LayerVersion.fromLayerVersionArn(this, 'ImportedLayer', existingLayerArn);

    // 🔹 Create the Lambda function with the layers
    const bbLambda = new lambda.Function(this, 'WorkoutDemoBabashkaLambda', {
      functionName: 'WorkoutDemoBabashkaLambda',
      runtime: lambda.Runtime.PROVIDED_AL2,
      code: lambda.Code.fromAsset('../backend/src'), // Your Lambda code location
      handler: 'workout-demo.lambda.HttpApiProxyGateway',
      layers: [babashkaRuntimeLayer, babashkaDepsLayer], // Attach both layers
      environment: {
        CONFIG_PARAM_NAME: 'my-app-config',
        HL_ENTRYPOINT: "workout-demo.lambda"
      }
    });


    const api = new apigw.LambdaRestApi(this, 'ApiGwEndpoint', {
      handler: bbLambda,
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

    new cdk.CfnOutput(this, 'ApiGatewayInvokeUrl', {
      value: api.url,  
      description: 'The Invoke URL of the API Gateway',
      exportName: 'ApiGatewayInvokeUrl'
    });

    new cdk.CfnOutput(this, 'LambdaFunctionName', {
      value: bbLambda.functionName,
      description: 'The deployed Lambda function name'
    });
  }
}
