mkdir -p .holy-lambda/build

if [[ "$USE_AGENT_CONTEXT" == "true" ]]; then
  echo "Building Agent JAR..."
  lein uberjar
  mkdir -p .holy-lambda/build
  cp target/output.jar .holy-lambda/build/output-agent.jar
else
  echo "Building Regular JAR..."
  lein uberjar
  mkdir -p .holy-lambda/build
  cp target/output.jar .holy-lambda/build/output.jar
fi