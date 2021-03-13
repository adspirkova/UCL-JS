const { TestHelper } = require("uu_script_devkitg01");

let session;

beforeAll(async () => {
  // session = await TestHelper.login();
})

function distortedCodeMatcher(string) {
  // DO NOT USE THIS CODE IN YOUR IMPLEMENTATION, think of a better, more readable solution
  let result = true;
  for(let i = 0; i < string.length; i++ ) {
    let charCode = string.charCodeAt(i);
    result = result && (charCode === 45 || (charCode >= 48 && charCode <= 57) || (charCode >= 97 && charCode <= 122))
  }
  return result
}

describe("Task1", () => {
  test("HDS", async () => {
    const NUM_OF_RECORDS = 10;
    const KEYS = ["name", "code", "indent", "created", "updated"].sort()

    const dtoIn = {
      from: new Date(2016, 6, 1).toISOString(),
      to: new Date().toISOString(),
      numberOfPages: NUM_OF_RECORDS
    };

    const result = await TestHelper.runScript("task1.js", dtoIn, session);
    expect(result.isError).toEqual(false);
    let scriptResult = result.scriptResult;
    // result contains array of results
    expect(Array.isArray(scriptResult.data)).toBeTruthy()
    expect(scriptResult.data.length).toBe(NUM_OF_RECORDS)
    for (let item of scriptResult.data) {
      // the resulting object contains all the necessary keys
      expect(Object.keys(item).sort()).toEqual(KEYS);
      // Non-empty name
      expect(item.name.length).toBeGreaterThan(0);
      // the code is sort-of valid
      expect(distortedCodeMatcher(item.code)).toBeTruthy()
      // check valid date
      expect(new Date(item.created)).toBeInstanceOf(Date)
      expect(new Date(item.updated)).toBeInstanceOf(Date)
      // check sort of valid indent
      expect(item.indent >= 0 && item.indent < 100).toBeTruthy()
    }
  });
});
