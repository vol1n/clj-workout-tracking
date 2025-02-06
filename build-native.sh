#!/bin/bash
set -e  # Exit on error

echo "Building Uberjar..."
lein uberjar
mkdir -p .holy-lambda/build
mv target/output.jar .holy-lambda/build/output.jar

echo "Running GraalVM Native Image Build..."
docker run --rm -it \
  -v "$(pwd)/.holy-lambda:/workspace/.holy-lambda" \
  graalvm-lambda-builder-jdk21 \
  /usr/lib/graalvm/bin/native-image \
  -jar /workspace/.holy-lambda/build/output.jar \
  -H:Name=lambda-binary \
  --no-fallback

echo "Build Complete! Native Binary: .holy-lambda/build/lambda-binary"