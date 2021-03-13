const {
  dtoIn,
  console,
  // session  // session contains logged in user, wont be used for these examples
} = scriptContext; // scriptContext is the entry point to the script, contains only dtoIn, console object and session

// prepare script logic
async function main() {
  console.info(`Script input: ${JSON.stringify(dtoIn)}`);

  console.info(`Hello ${dtoIn.name}`);

  return {
    message: "Hello",
    name: dtoIn.name,
    uuAppErrorMap: {}
  };
}

// execute the script logic
main();
