FROM amazoncorretto:17
WORKDIR /app

# Copy the Uberjar
COPY target/workout-demo-standalone.jar app.jar

# AWS Lambda expects a handler
CMD ["java", "-jar", "app.jar", "workout_demo.lambda::HttpApiProxyGateway"]