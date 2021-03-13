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
    return ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      `${Errors.ERROR_PREFIX}unsupportedKeys`,
      Errors.InvalidDtoIn
    );
  },

  getBreadcrumbs(breadcrumbsData) {
    let links = breadcrumbsData.map((item, ind) => {
      let color = ind < (breadcrumbsData.length-1) ? "silver" : "black";
      return `<UU5.Bricks.Link href="#${item.code}" style="color: ${color};">${item.name}</UU5.Bricks.Link>`
    })
    return `<UU5.Bricks.Card elevation=1 className="uu5-common-padding-m">${links.join(" / ")}</UU5.Bricks.Card>`;
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
    code: string(),
    pages: array(shape({
      name: string(),
      code: string(),
      indent: number(),
      from: datetime(),
      to: datetime()
    }))
  });`;
/*@@viewOff:dtoIn*/

async function main() {
  // 1
  let uuAppErrorMap = {};

  // 2
  uuAppErrorMap = Helpers.validateDtoIn(dtoIn);

  /*@@viewOn:sourceCode*/
  /*@@viewOff:sourceCode*/

  return { uuAppErrorMap, data: [] };
}

main();
