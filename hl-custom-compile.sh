mkdir -p .holy-lambda/build

if [[ "$USE_AGENT_CONTEXT" == "true" ]]; then
  echo "Building Regular JAR..."
  lein uberjar
  mkdir -p .holy-lambda/build
  cp target/output.jar .holy-lambda/build/output.jar
  cp target/output.jar .holy-lambda/build/output-agent.jar
  echo "Regular Should be there"
  ls .holy-lambda/build
else
  echo "Building Regular JAR..."
  lein uberjar
  mkdir -p .holy-lambda/build
  cp target/output.jar .holy-lambda/build/output.jar
  echo "Regular Should be there"
  ls .holy-lambda/build
fi