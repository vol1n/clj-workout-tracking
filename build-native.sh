#!/bin/bash
set -e  # Exit on error

echo "Building Uberjar..."
lein uberjar
mkdir -p .holy-lambda/build
mv target/output.jar .holy-lambda/build/output.jar

echo "Running GraalVM Native Image Build..."
docker run --rm \
  -v "$(pwd)/.holy-lambda:/workspace/.holy-lambda" \
  graalvm-lambda-builder-jdk21 \
  /usr/lib/graalvm/bin/native-image \
  --features=clj_easy.graal_build_time.InitClojureClasses \
  -jar /workspace/.holy-lambda/build/output.jar \
  -H:Name=lambda-binary \
  --trace-class-initialization=java_time --verbose \
  --trace-class-initialization=java_time$with_offset_same_instant,java_time$supports_QMARK_,java_time$units,java_time$contains_QMARK_,java_time$overlaps_QMARK_,java_time$with_largest_min_value,java_time$zero_QMARK_,java_time$max_value,java_time$move_end_to,java_time$abuts_QMARK_,java_time$smallest_max_value,java_time$abs,java_time$min_value,java_time$negative_QMARK_,java_time$largest_min_value,java_time$with_value,java_time$with_zone,java_time$with_max_value,java_time$value,java_time$overlap,java_time$move_start_to,java_time$time_between,java_time$truncate_to,java_time$property,java_time$chronology,java_time$negate,java_time$multiply_by,java_time$fields,java_time$leap_QMARK_,java_time$with_smallest_max_value,java_time$with_min_value,java_time$gap,java_time$range,java_time$properties,java_time$start,java_time$end,java_time$with_offset \
  --no-fallback

echo "Build Complete! Native Binary: .holy-lambda/build/lambda-binary"