const { TestHelper } = require("uu_script_devkitg01");

describe("hello", () => {
  test("HDS", async () => {
    const result = await TestHelper.runScript("hello-world.js", {
      name: "Unicorn!"
    });
    expect(result.isError).toEqual(false);
  });
});
