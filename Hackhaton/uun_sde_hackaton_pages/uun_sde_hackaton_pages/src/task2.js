const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { UseCaseError } = require("uu_appg01_server").AppServer;

const { dtoIn, console, session } = scriptContext;

let countries = [
  {
    name: "Afghanistan",
    code: "afghanistan",
    indent: 0,
    created: "2016-09-19T13:03:24.039Z",
    updated: "2018-09-02T21:51:14.572Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan1",
    indent: 0,
    created: "2017-12-28T17:06:15.825Z",
    updated: "2019-09-20T01:10:18.211Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan2",
    indent: 0,
    created: "2019-10-28T21:25:08.679Z",
    updated: "2020-04-13T07:10:12.509Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan3",
    indent: 0,
    created: "2020-05-02T21:16:26.993Z",
    updated: "2020-05-09T15:52:00.473Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj",
    indent: 1,
    created: "2018-11-15T14:21:25.789Z",
    updated: "2019-12-31T06:32:18.232Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan5",
    indent: 0,
    created: "2019-09-28T22:49:36.570Z",
    updated: "2019-12-22T17:46:04.045Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj6",
    indent: 1,
    created: "2016-05-28T13:14:12.962Z",
    updated: "2017-12-16T03:52:11.409Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj7",
    indent: 1,
    created: "2019-12-28T05:24:54.735Z",
    updated: "2020-03-23T15:42:31.539Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan8",
    indent: 1,
    created: "2019-11-04T21:23:01.642Z",
    updated: "2019-12-01T20:53:40.907Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan9",
    indent: 2,
    created: "2020-04-16T07:10:19.411Z",
    updated: "2020-05-20T08:21:27.803Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj10",
    indent: 2,
    created: "2016-01-14T08:59:07.600Z",
    updated: "2019-10-05T21:34:04.833Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj11",
    indent: 2,
    created: "2016-10-17T06:11:44.956Z",
    updated: "2017-07-10T15:08:44.110Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj12",
    indent: 2,
    created: "2017-11-16T09:40:32.413Z",
    updated: "2019-09-15T23:19:32.121Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj13",
    indent: 1,
    created: "2017-01-08T15:44:27.246Z",
    updated: "2018-02-05T20:23:59.678Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj14",
    indent: 2,
    created: "2016-03-17T17:48:50.834Z",
    updated: "2017-06-13T16:34:57.493Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan15",
    indent: 3,
    created: "2019-11-16T08:27:42.421Z",
    updated: "2020-01-23T09:06:36.040Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan16",
    indent: 2,
    created: "2019-10-03T17:57:36.254Z",
    updated: "2019-11-26T05:51:51.461Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan17",
    indent: 2,
    created: "2015-12-12T02:17:01.553Z",
    updated: "2017-04-06T14:44:54.553Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan18",
    indent: 1,
    created: "2018-03-18T00:46:02.243Z",
    updated: "2019-05-31T09:14:20.132Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj19",
    indent: 1,
    created: "2019-04-30T09:22:01.345Z",
    updated: "2019-08-26T02:48:03.499Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj20",
    indent: 1,
    created: "2018-02-02T22:38:56.760Z",
    updated: "2020-03-20T16:01:50.320Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan21",
    indent: 0,
    created: "2018-03-26T17:46:04.470Z",
    updated: "2019-01-04T19:29:07.537Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan22",
    indent: 0,
    created: "2016-12-07T06:54:25.408Z",
    updated: "2020-04-24T19:10:09.373Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan23",
    indent: 1,
    created: "2015-08-24T14:36:40.095Z",
    updated: "2018-11-16T11:07:07.761Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan24",
    indent: 2,
    created: "2017-02-19T14:59:44.184Z",
    updated: "2018-10-08T11:34:07.302Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan25",
    indent: 1,
    created: "2018-08-19T20:46:51.158Z",
    updated: "2019-12-31T01:53:16.350Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan26",
    indent: 0,
    created: "2018-07-23T00:44:09.768Z",
    updated: "2019-09-06T13:45:47.961Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan27",
    indent: 0,
    created: "2015-08-27T00:53:49.758Z",
    updated: "2018-07-10T07:04:50.025Z"
  },
  {
    name: "Albania nono njnj",
    code: "albania-nono-njnj28",
    indent: 1,
    created: "2018-03-07T17:03:23.640Z",
    updated: "2018-05-01T21:07:34.954Z"
  },
  {
    name: "Afghanistan",
    code: "afghanistan29",
    indent: 2,
    created: "2015-09-22T15:36:19.385Z",
    updated: "2016-10-25T14:04:00.902Z"
  }
];

/*@@viewOn:helpers*/
const Helpers = {
  validateDtoIn(dtoIn) {
    // 2.1.1
    const dtoInValidator = new Validator(dtoInSchema, true);
    // 2.1.2
    const validationResult = dtoInValidator.validate("scriptParamsType", dtoIn);
    // 2.1.3
    return ValidationHelper.processValidationResult(dtoIn, validationResult, `${Errors.ERROR_PREFIX}unsupportedKeys`, Errors.InvalidDtoIn);
  },

  getValidResult(page) {
    return `<UU5.Bricks.Card elevation=1 className="uu5-common-padding-m"><UU5.Bricks.Block colorSchema="success" className="uu5-common-font-size-l"><UU5.Bricks.Text><UU5.Bricks.Icon icon="mdi-check-circle-outline"/> ${page.name}</UU5.Bricks.Text><UU5.Bricks.Text><UU5.Bricks.Icon icon="mdi-check-circle-outline"/> ${page.code}</UU5.Bricks.Text><UU5.Bricks.Text><UU5.Bricks.Icon icon="mdi-check-circle-outline"/> ${page.indent}</UU5.Bricks.Text><UU5.Bricks.Text><UU5.Bricks.Icon icon="mdi-check-circle-outline"/> <UU5.Bricks.DateTime dateOnly value="${page.created}" /></UU5.Bricks.Text><UU5.Bricks.Text><UU5.Bricks.Icon icon="mdi-check-circle-outline"/> <UU5.Bricks.DateTime dateOnly value="${page.updated}" /></UU5.Bricks.Text></UU5.Bricks.Block></UU5.Bricks.Card>`;
  },

  getInvalidResult(page, invalidList) {
    function getColorSchema(key) {
      return invalidList.includes(key) ? "danger" : "success";
    }

    function getIcon(key) {
      return invalidList.includes(key) ? "mdi-close-circle-outline" : "mdi-check-circle-outline";
    }

    return `<UU5.Bricks.Card elevation=1 className="uu5-common-padding-m"><UU5.Bricks.Block colorSchema="danger" className="uu5-common-font-size-l"><UU5.Bricks.Text colorSchema="${getColorSchema(
      "name"
    )}"><UU5.Bricks.Icon icon="${getIcon("name")}"/> ${page.name}</UU5.Bricks.Text><UU5.Bricks.Text colorSchema="${getColorSchema("code")}"><UU5.Bricks.Icon icon="${getIcon("code")}"/> ${
      page.code
    }</UU5.Bricks.Text><UU5.Bricks.Text colorSchema="${getColorSchema("indent")}"><UU5.Bricks.Icon icon="${getIcon("indent")}"/> ${
      page.indent
    }</UU5.Bricks.Text><UU5.Bricks.Text colorSchema="${getColorSchema("created")}"><UU5.Bricks.Icon icon="${getIcon("created")}"/> <UU5.Bricks.DateTime dateOnly value="${
      page.created
    }" /></UU5.Bricks.Text><UU5.Bricks.Text colorSchema="${getColorSchema("updated")}"><UU5.Bricks.Icon icon="${getIcon("updated")}"/> <UU5.Bricks.DateTime dateOnly value="${
      page.updated
    }" /></UU5.Bricks.Text></UU5.Bricks.Block></UU5.Bricks.Card>`;
  },

  getData(data) {
    return `<UuApp.DesignKit.EmbeddedText codeStyle=javascript showLineNumbers=false codeStyle="javascript">${JSON.stringify(data)}</UuApp.DesignKit.EmbeddedText>`;
  }
};
/*@@viewOff:helpers*/

/*@@viewOn:errors*/
const Errors = {
  ERROR_PREFIX: "ucl/sdeExamTask01/",

  InvalidDtoIn: class extends UseCaseError {
    constructor(dtoOut, paramMap) {
      super({ dtoOut, paramMap, status: 400 });
      this.message = `DtoIn is not valid.`;
      this.code = `${Errors.ERROR_PREFIX}invalidDtoIn`;
    }
  }
};
/*@@viewOff:errors*/

/*@@viewOn:dtoIn*/
const dtoInSchema = `
  const scriptParamsType = array(shape({
    name: string(),
    code: string(),
    indent: number(),
    from: datetime(),
    to: datetime()
  }));`;
/*@@viewOff:dtoIn*/

async function main() {
  // 1
  let uuAppErrorMap = {};

  // 2
  uuAppErrorMap = Helpers.validateDtoIn(dtoIn);

  /*@@viewOn:sourceCode*/

  //   hodnota code je unikátní
  // hodnota code je složena jen z malých písmen, čísel a pomlček
  // hodnota created ani updated není v budoucnosti
  // hodnota created je chronologicky před hodnotou updated
  // hodnota indent stoupá vždy maximálně o 1 (0->1->2), klesat může libovolně (0->1->2->0)
  /*@@viewOff:sourceCode*/

  return { uuAppErrorMap, data: [] };
}

main();
