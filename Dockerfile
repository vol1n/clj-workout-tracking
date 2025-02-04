FROM amazoncorretto:17
WORKDIR /app

# Copy the Uberjar
COPY target/workout-demo.jar app.jar

RUN unzip -p app.jar META-INF/MANIFEST.MF | grep Main-Class

CMD ["java", "-jar", "app.jar"]