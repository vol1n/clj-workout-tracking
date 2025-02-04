FROM amazoncorretto:17
WORKDIR /app

# Copy the Uberjar
COPY target/workout-demo.jar app.jar

CMD java -jar app.jar "workout-demo.lambda.HttpApiProxyGateway"