#!/bin/bash
set -e  # Exit on error

echo "Building Uberjar..."
lein uberjar
mkdir -p .holy-lambda/build
mv target/output.jar .holy-lambda/build/output.jar

echo "Running GraalVM Native Image Build inside Docker..."
container_id=$(docker run -d --rm \
  -v "$(pwd)/.holy-lambda:/workspace/.holy-lambda" \
  graalvm-lambda-builder-jdk21 \
  /usr/lib/graalvm/bin/native-image \
  --features=clj_easy.graal_build_time.InitClojureClasses \
  -jar /workspace/.holy-lambda/build/output.jar \
  -H:Name=lambda-binary \
  --no-fallback \
  --verbose)

# Wait for the container to finish the build
docker logs -f "$container_id"

# Extract binary from the container
echo "Extracting built binary from Docker container..."
docker cp "$container_id":/workspace/.holy-lambda/build/lambda-binary .holy-lambda/build/lambda-binary
docker stop "$container_id" > /dev/null 2>&1

# Ensure binary is executable
chmod +x .holy-lambda/build/lambda-binary