const {Validator} = require("uu_appg01_server").Validation;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const {UseCaseError} = require("uu_appg01_server").AppServer;

const {dtoIn, console, session} = scriptContext;


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

  getRandom(max, min = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getData(data) {
    return `<UuApp.DesignKit.EmbeddedText codeStyle=javascript showLineNumbers=false codeStyle="javascript">${JSON.stringify(data)}</UuApp.DesignKit.EmbeddedText>`;
  },

  getPieChart(headerText, valueLabel, data) {
    return `<UU5.Bricks.Section header="${headerText}"><UU5.SimpleChart.PieChart
    displayLabelLine
    series='<uu5json/>[
      {
        "labelKey": "label",
        "valueKey": "value",
        "name": "${valueLabel}",
        "colorSchema": [
          "blue-rich",
          "pink-rich",
          "green-rich",
          "yellow-rich",
          "red-rich"
        ],
        "outerRadius": 90,
        "innerRadius": 70
      }
    ]'>
    ${JSON.stringify(data)}
  </UU5.SimpleChart.PieChart></UU5.Bricks.Section>`;
  },

  getBarChart(headerText, data) {
    return `<UU5.Bricks.Section header="${headerText}">
    <UU5.SimpleChart.BarChart
      displayLegend
      series='<uu5json/>[
        {
          "valueKey": "valueCreated",
          "name": "Created",
          "colorSchema": "blue-rich"
        },
        {
          "valueKey": "valueUpdated",
          "name": "Updated",
          "colorSchema": "green-rich"
        }
      ]'
      stacked>
      ${JSON.stringify(data)}
    </UU5.SimpleChart.BarChart>
  </UU5.Bricks.Section>`;
  },

  getLineChart(headerText, data) {
    return `<UU5.Bricks.Section header="${headerText}">
    <UU5.SimpleChart.LineChart
      displayLegend
      series='<uu5json/>[
        {
          "valueKey": "value",
          "name": "Pages created",
          "colorSchema": "blue-rich"
        }
      ]'
      >
      ${JSON.stringify(data)}
    </UU5.SimpleChart.LineChart>
  </UU5.Bricks.Section>`;
  }
};
/*@@viewOff:helpers*/

/*@@viewOn:errors*/
const Errors = {
  ERROR_PREFIX: "ucl/sdeExamTask01/",

  InvalidDtoIn: class extends UseCaseError {
    constructor(dtoOut, paramMap) {
      super({dtoOut, paramMap, status: 400});
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

function getStrMonth(month) {
  return month.toString().padStart(2, "0");
}

async function main() {
  // 1
  let uuAppErrorMap = {};

  // 2
  uuAppErrorMap = Helpers.validateDtoIn(dtoIn);

  /*@@viewOn:sourceCode*/
  function getPieChartData(array) {
    let data = [];
    let obj = {
      label: "Level",
      value: indent2
    }
    
    
  }

  /*@@viewOff:sourceCode*/


  return {uuAppErrorMap, statistics: {monthHistogram: [], indentRatio: [], creationProgress: []}, names: []};
}

main();
