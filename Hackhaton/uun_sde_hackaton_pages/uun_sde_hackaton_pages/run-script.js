const run = require("./tools/runner.js");

const SCRIPT_TO_EXECUTE = "task3.js";
const SCRIPT_DTO_IN = [
  {
    name: "Hello World",
    code: "hello-world",
    indent: 0,
    created: "2019-05-09T19:44:00.000Z",
    updated: "2020-01-17T03:19:00.000Z"
  },
  {
    name: "What is going on?",
    code: "what-is-going-on",
    indent: 1,
    created: "2019-03-07T11:04:00.000Z",
    updated: "2020-08-08T21:50:00.000Z"
  },
  {
    name: "My Page",
    code: "my-page",
    indent: 1,
    created: "2019-05-09T19:44:00.000Z",
    updated: "2020-01-17T03:19:00.000Z"
  },
  {
    name: "My Page",
    code: "my-page",
    indent: 2,
    created: "2019-05-09T19:44:00.000Z",
    updated: "2020-01-17T03:19:00.000Z"
  },
  {
    name: "My Page",
    code: "my-page3",
    indent: 0,
    created: "2019-05-09T19:44:00.000Z",
    updated: "2020-01-17T03:19:00.000Z"
  }
];

run(SCRIPT_TO_EXECUTE, SCRIPT_DTO_IN)