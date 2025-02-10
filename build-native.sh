#!/bin/bash
set -e  # Exit on error

echo "Building Uberjar..."
lein uberjar

mkdir -p .holy-lambda/build
mv target/output.jar .holy-lambda/build/output.jar

# -H:ReflectionConfigurationFiles=/workspace/resources/native-image/reflection-config.json \
# -H:ResourceConfigurationFiles=/workspace/resources/native-image/resource-config.json \
# -H:DynamicProxyConfigurationFiles=/workspace/resources/native-image/proxy-config.json \

echo "Running GraalVM Native Image Build inside Docker..."
container_id=$(docker run -d \
  -v "$(pwd)/.holy-lambda:/workspace/.holy-lambda" \
  -v "$(pwd)/resources/META-INF/native-image:/workspace/resources/native-image" \
  graalvm-lambda-builder-jdk21 sh -c " \
  set -x && \
  /usr/lib/graalvm/bin/native-image \
  --static \
  --features=clj_easy.graal_build_time.InitClojureClasses \
  -jar /workspace/.holy-lambda/build/output.jar \
  -H:Name=lambda-binary \
  -H:ReflectionConfigurationFiles=/workspace/resources/native-image/reflection-config.json \
  -H:ResourceConfigurationFiles=/workspace/resources/native-image/resource-config.json \
  -H:DynamicProxyConfigurationFiles=/workspace/resources/native-image/proxy-config.json \
  --initialize-at-build-time=org.slf4j.LoggerFactory,ch.qos.logback,org.slf4j.simple.SimpleLogger \
  --initialize-at-run-time=io.netty \
  --initialize-at-run-time=datomic.client.api.sync__init \
  --no-fallback \
  --verbose")

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