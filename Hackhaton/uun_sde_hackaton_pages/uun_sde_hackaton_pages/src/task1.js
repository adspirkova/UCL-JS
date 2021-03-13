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

  getRandom(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getCard(name, code, indent, created, updated) {
    let indentation = "";
    for (let i = 0; i < (parseInt(indent) || 0); i++) indentation += '<UU5.Bricks.Icon icon="mdi-keyboard-tab" style="color: #e9e9e9;"/> ';
    return `<UU5.Bricks.Card elevation=1 className="uu5-common-padding-m"><UU5.Bricks.Block colorSchema="blue"><UU5.Bricks.Header style="margin-top: 0" level=2> ${indentation} ${name} <UU5.Bricks.Span style="color: silver;" className="uu5-common-font-size-s">(${code})</UU5.Bricks.Span></UU5.Bricks.Header><UU5.Bricks.Icon icon="mdi-asterisk"/> <UU5.Bricks.DateTime dateOnly value="${created}" /><br/><UU5.Bricks.Icon icon="mdi-pencil"/> <UU5.Bricks.DateTime dateOnly value="${updated}" /></UU5.Bricks.Block></UU5.Bricks.Card>`;
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
  const scriptParamsType = shape({
    from: datetime().isRequired(),
    to: datetime().isRequired(),
    numberOfPages: number().isRequired()
  });`;

/*@@viewOff:dtoIn*/

async function main() {
  // 1
  let uuAppErrorMap = {};

  // 2
  uuAppErrorMap = Helpers.validateDtoIn(dtoIn);

  /*@@viewOn:sourceCode*/

  const names = ["Afghanistan", "Afghanistan", "Afghanistan", "Albania nono njnj"];

  // random date function
  const randomDate = function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };
  //  console.info(randomDate(new Date(2018, 0, 1), new Date()))
  // random element function
  const randomelement = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  //indent function
  function getIndent(indent, i) {
    if (i === 0) {
      return 0;
    }
    let offset = Helpers.getRandom(1, 0);
    if (Helpers.getRandom(9, 0) > Helpers.getRandom(9, 0) && indent !== 0) {
      return indent - offset;
    } else if (indent < 9){
      return indent + offset;
    } else {
      return 0;
    }
  }

  function getCode(filteredArray, name, index) {
    if (filteredArray.find(o => o === name)) {
      codeName =
        name
          .split(" ")
          .join("-")
          .toLowerCase() + index;
    } else {
      codeName = name
        .split(" ")
        .join("-")
        .toLowerCase();
    }
    return codeName;
  }

  // Pages Generator function
  const pages = [];
  let indentHelper = 0;

  const pageGenerator = function(numberOfPages, from, to) {
    let nameOfCountries = [];
    let findDuplictaes = names => names.filter((item, index) => names.indexOf(item) != index);

    for (let i = 0; i < numberOfPages; i++) {
      let name = randomelement(names);
      nameOfCountries.push(name);
      let filteredArray = findDuplictaes(nameOfCountries);
      let codeName = getCode(filteredArray, name, i);
      let indent = getIndent(indentHelper, i);
      let created = randomDate(new Date(from), new Date(to));
      let updated = randomDate(created, new Date(to));
      indentHelper = indent;

      const page = {
        name: name,
        code: codeName,
        indent: indent,
        created: created,
        updated: updated
      };
      pages.push(page);
    }

    return pages;
  };

  console.info(JSON.stringify(pageGenerator(dtoIn.numberOfPages, dtoIn.from, dtoIn.to), null, 2));
  console.info(Helpers.getCard(pageGenerator(dtoIn.numberOfPages, dtoIn.from, dtoIn.to)));
  /*@@viewOff:sourceCode*/

  return { uuAppErrorMap, data: [] };
}

main();
