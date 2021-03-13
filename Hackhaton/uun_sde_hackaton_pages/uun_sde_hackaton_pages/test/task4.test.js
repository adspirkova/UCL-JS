const {TestHelper} = require("uu_script_devkitg01");

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
          "created": "2019-05-06T13:59:00.000Z",
          "updated": "2020-02-26T15:15:00.000Z"
        }
      ]`);

const EXPECTED_HISTOGRAM = [
  {"label": "01", "valueCreated": 0, "valueUpdated": 1},
  {"label": "02", "valueCreated": 1, "valueUpdated": 1},
  {"label": "03", "valueCreated": 2, "valueUpdated": 0},
  {"label": "04", "valueCreated": 0, "valueUpdated": 0},
  {"label": "05", "valueCreated": 4, "valueUpdated": 2},
  {"label": "06", "valueCreated": 0, "valueUpdated": 2},
  {"label": "07", "valueCreated": 1, "valueUpdated": 0},
  {"label": "08", "valueCreated": 0, "valueUpdated": 1},
  {"label": "09", "valueCreated": 1, "valueUpdated": 0},
  {"label": "10", "valueCreated": 1, "valueUpdated": 0},
  {"label": "11", "valueCreated": 0, "valueUpdated": 1},
  {"label": "12", "valueCreated": 0, "valueUpdated": 2}
]

const EXPECTED_CREATED_PAGES = [
  {"label": "2017-07-21", "value": 1},
  {"label": "2017-09-23", "value": 2},
  {"label": "2018-10-01", "value": 3},
  {"label": "2019-03-07", "value": 4},
  {"label": "2019-03-16", "value": 5},
  {"label": "2019-05-06", "value": 7},
  {"label": "2019-05-09", "value": 8},
  {"label": "2020-02-28", "value": 9},
  {"label": "2020-05-28", "value": 10}
]

let session;

beforeAll(async () => {
  // session = await TestHelper.login();
})
describe("Task4", () => {
  test("HDS", async () => {
    const dtoIn = INPUT_DATA;

    const result = await TestHelper.runScript("task4.js", dtoIn, session);
    expect(result.isError).toEqual(false);
    let scriptResult = result.scriptResult;

    // check output keys
    expect(typeof scriptResult.statistics).toBe("object");
    expect(Array.isArray(scriptResult.names)).toBeTruthy();

    let stats = scriptResult.statistics;

    expect(Array.isArray(stats.monthHistogram)).toBeTruthy();
    expect(stats.monthHistogram.length).toBe(12);
    for (let key in stats.monthHistogram) {
      let item = stats.monthHistogram[key];
      expect(item).toMatchObject(EXPECTED_HISTOGRAM[key])
    }

    expect(Array.isArray(stats.creationProgress)).toBeTruthy();
    expect(stats.creationProgress.length).toBe(9);
    for (let key in stats.creationProgress) {
      let item = stats.creationProgress[key];
      expect(item).toMatchObject(EXPECTED_CREATED_PAGES[key])
    }

    expect(stats.indentRatio.length).toBe(3);
    expect(stats.indentRatio[0]).toMatchObject({
      label: "Level 0",
      value: 6
    })
    expect(stats.indentRatio[1]).toMatchObject({
      label: "Level 1",
      value: 2
    })
    expect(stats.indentRatio[2]).toMatchObject({
      label: "Level 2",
      value: 2
    })
    expect(scriptResult.names).toEqual([
      "How Is World",
      "Hello There",
      "Are You Doing Alright",
      "What Are You Doing",
      "Hello World",
      "Hello",
      "How Are You",
      "Hello How You Are",
      "How Is World Doing",
      "Watching",
    ])
  });
});
