const { TestHelper } = require("uu_script_devkitg01");

const INPUT_DATA = JSON.parse(`[
        {
          "name": "Hello How You Are",
          "code": "hello-how-you-are",
          "indent": 0,
          "created": "2019-05-09T19:44:00.000Z",
          "updated": "2020-01-17T03:19:00.000Z"
        },
        {
          "name": "What Are You Doing",
          "code": "what-are-you-doing",
          "indent": 0,
          "created": "2019-03-07T11:04:00.000Z",
          "updated": "2020-08-08T21:50:00.000Z"
        },
        {
          "name": "Watching",
          "code": "watching",
          "indent": 0,
          "created": "2020-05-28T17:51:00.000Z",
          "updated": "2020-06-08T19:47:00.000Z"
        },
        {
          "name": "Hello There",
          "code": "hello-there",
          "indent": 0,
          "created": "2017-09-23T20:21:00.000Z",
          "updated": "2018-12-26T16:26:00.000Z"
        },
        {
          "name": "Are You Doing Alright",
          "code": "are-you-doing-alright",
          "indent": 0,
          "created": "2018-10-01T09:57:00.000Z",
          "updated": "2018-11-29T05:36:00.000Z"
        },
        {
          "name": "Hello World",
          "code": "hello-world",
          "indent": 1,
          "created": "2019-03-16T18:49:00.000Z",
          "updated": "2020-06-13T14:58:00.000Z"
        },
        {
          "name": "How Is World Doing",
          "code": "how-is-world-doing",
          "indent": 2,
          "created": "2020-02-28T17:06:00.000Z",
          "updated": "2020-05-02T05:12:00.000Z"
        },
        {
          "name": "How Is World",
          "code": "how-is-world",
          "indent": 1,
          "created": "2017-07-21T16:37:00.000Z",
          "updated": "2020-05-13T23:25:00.000Z"
        },
        {
          "name": "How Are You",
          "code": "how-are-you",
          "indent": 2,
          "created": "2019-05-06T17:06:00.000Z",
          "updated": "2019-12-13T13:21:00.000Z"
        },
        {
          "name": "Hello",
          "code": "hello",
          "indent": 0,
          "created": "2019-10-30T13:59:00.000Z",
          "updated": "2020-02-26T15:15:00.000Z"
        }
      ]`);

let session;

beforeAll(async () => {
  // session = await TestHelper.login();
})

describe("Task5", () => {
  test("1st level", async () => {
    const dtoIn = {
      pages: INPUT_DATA,
      code: "are-you-doing-alright"
    };

    const result = await TestHelper.runScript("task5.js", dtoIn, session);
    expect(result.isError).toEqual(false);
    let scriptResult = result.scriptResult;
    expect(Array.isArray(scriptResult.data)).toBeTruthy();
    expect(scriptResult.data.length).toBe(1);
    expect(scriptResult.data[0]).toMatchObject({
      name: "Are You Doing Alright",
      code: "are-you-doing-alright"
    })
  });

  test("3rd level", async () => {
    const dtoIn = {
      pages: INPUT_DATA,
      code: "how-are-you"
    };

    const result = await TestHelper.runScript("task5.js", dtoIn, session);
    expect(result.isError).toEqual(false);
    let scriptResult = result.scriptResult;
    expect(Array.isArray(scriptResult.data)).toBeTruthy();
    expect(scriptResult.data.length).toBe(3)
    expect(scriptResult.data[0]).toMatchObject({
      name: "Are You Doing Alright",
      code: "are-you-doing-alright"
    })
    expect(scriptResult.data[1]).toMatchObject({
      name: "How Is World",
      code: "how-is-world"
    })
    expect(scriptResult.data[2]).toMatchObject({
      name: "How Are You",
      code: "how-are-you"
    })
  });
});
