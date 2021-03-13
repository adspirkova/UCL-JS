const { Validator } = require("uu_appg01_server").Validation;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const { UseCaseError } = require("uu_appg01_server").AppServer;

const { dtoIn, console, session } = scriptContext;

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

  getTree(treeData) {
    // transform structure into uu5
    function __transformTreeStructure(treeData) {
      let result = [];
      for (let code in treeData) {
        let page = treeData[code];
        result.push({
          label: page.name,
          items: __transformTreeStructure(page.subpages)
        });
      }
      return result;
    }

    return `<UU5.Bricks.Card elevation=1 className="uu5-common-padding-m"><UU5.Bricks.Tree items='<uu5json/>${JSON.stringify(__transformTreeStructure(treeData))}' /></UU5.Bricks.Card>`;
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
  let input = [
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

  let output = {
    uuAppErrorMap: {},
    data: {
      "hello-world": {
        name: "Hello World",
        created: "2019-05-09T19:44:00.000Z",
        updated: "2020-01-17T03:19:00.000Z",
        subpages: {
          "what-is-going-on": {
            name: "What is going on?",
            created: "2019-03-07T11:04:00.000Z",
            updated: "2020-08-08T21:50:00.000Z",
            subpages: {}
          }
        }
      },
      "my-page": {
        name: "My Page",
        created: "2019-05-09T19:44:00.000Z",
        updated: "2020-01-17T03:19:00.000Z",
        subpages: {}
      }
    }
  };

  function getSubPages(inputObject) {
    let objectWithSubPages = {};
    let currentIndention;
    for (let index = 0; index < inputObject.length; index++) {
      let item = inputObject[index];
      item.subpages = {};
      let name = item.code;
      console.info(JSON.stringify(currentIndention));

      if (item.indent >= 1) {
        objectWithSubPages[currentIndention["subpages"][name]] = item;
        currentIndention = item;
        // console.info(JSON.stringify(currentIndention["subpages"]));
        // console.info(objectWithSubPages[[currentIndention.code]["subpages"]]);
        delete item.indent;
        delete item.code;
      } else {
        delete item.indent;
        delete item.code;
        objectWithSubPages[name] = item;
        currentIndention = item;
      }
    }

    return objectWithSubPages;
  }

  console.info(JSON.stringify(getSubPages(dtoIn)));
  // console.info(Helpers.getTree(getSubPages(dtoIn)));

  /*@@viewOff:sourceCode*/

  return { uuAppErrorMap, data: {} };
}

main();
