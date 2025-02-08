#!/bin/bash
set -e  # Exit on error

echo "Building Uberjar..."
lein uberjar

mkdir -p .holy-lambda/build
mv target/output.jar .holy-lambda/build/output.jar

echo "Running GraalVM Native Image Build inside Docker..."
container_id=$(docker run -d \
  -v "$(pwd)/.holy-lambda:/workspace/.holy-lambda" \
  graalvm-lambda-builder-jdk21 \
  mkdir -p /workspace/.holy-lambda/META-INF/native-image && \
  java -agentlib:native-image-agent=config-output-dir=/workspace/.holy-lambda/META-INF/native-image -cp /workspace/.holy-lambda/build/output.jar && \
  ls /workspace/.holy-lambda/META-INF/native-image && \
  cat /workspace/.holy-lambda/META-INF/native-image/reflection-config.json && \
  /usr/lib/graalvm/bin/native-image \
  --static \
  --features=clj_easy.graal_build_time.InitClojureClasses \
  -jar /workspace/.holy-lambda/build/output.jar \
  -H:Name=lambda-binary \
  -H:ReflectionConfigurationFiles=/workspace/.holy-lambda/META-INF/native-image/reflection-config.json \
  --no-fallback \
  --verbose)

# Wait for the container to finish the build
docker logs -f "$container_id" &
docker wait "$container_id"

# Extract binary from the container
echo "Extracting built binary from Docker container..."
docker cp "$container_id":/workspace/lambda-binary .holy-lambda/build/lambda-binary
docker stop "$container_id" > /dev/null 2>&1
docker rm "$container_id"

# Ensure binary is executable
chmod +x .holy-lambda/build/lambda-binary

ls .holy-lambda/build