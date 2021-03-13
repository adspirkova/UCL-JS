const path = require("path");
const fs = require("fs");
const vm = require("vm");
const crypto = require("crypto");

const { SimpleConsole } = require("uu_script_devkitg01/src/tools/simple-console");
global.console = new SimpleConsole(process.stdout, process.stderr);
const { UuConsoleMockup } = require("uu_script_devkitg01/src/mockups/uu-console-mockup");
const { requireMockup } = require("uu_script_devkitg01/src/mockups/require-mockup");
const ScriptRuntimeMockup = require("uu_script_devkitg01/src/mockups/script-runtime-mockup");


async function runScript(scriptName, dtoIn = {}, session) {
  const scriptPath = path.resolve(__dirname, "../", "src", scriptName);
  if (!fs.existsSync(scriptPath)) {
    throw new Error("Script doesn't exist: " + scriptPath);
  }
  const script = fs.readFileSync(scriptPath, "UTF-8").toString();
  const scriptInfo = {
    scriptName,
    scriptRunId: crypto.randomBytes(Math.ceil(32 / 2)).toString("hex").slice(0, 32)
  };
  const consoleMock = new UuConsoleMockup(scriptName, scriptInfo, session);

  const sandbox = {
    scriptContext: {
      dtoIn,
      console: consoleMock,
      session: session,
      scriptRuntime: new ScriptRuntimeMockup(scriptInfo)
    },
    require: requireMockup(consoleMock)
  };

  const context = vm.createContext(sandbox);
  let scriptResult;
  try {
    scriptResult = await vm.runInContext(script, context, scriptPath);
  } catch (e) {
    consoleMock.error(e);
    throw e;
  }

  return {
    isWarning: consoleMock.isWarning,
    isError: consoleMock.isError,
    scriptResult: scriptResult,
    messageList: consoleMock.messageList
  };
}

module.exports = runScript;
