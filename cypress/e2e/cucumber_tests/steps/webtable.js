import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import webTablePage from "../../../PageObject/WebTablePage";
const webTable = new webTablePage();
let fullWebtableData;
const dbconfig = Cypress.env("db");

When(/^read the data table values from (.*) sheet in excel$/, (sheetName) => {
  cy.convertXlsToJson("../testData/excelData.xlsx", sheetName).then((rows) => {
    cy.writeFile("cypress/fixtures/xlsxData.json", rows);
  });
  cy.fixture("xlsxData.json").then((data) => {
    fullWebtableData = data;
  });
})

Then(/^validate webtable elements for column (.*)$/, (columnName) => {
  const expectedColumnList = fullWebtableData.map(item => item[columnName]);
  webTable.getWebTableColumnIndex(columnName);
  webTable.validateWebElements(expectedColumnList);
})

Then(/^validate email of the user (.*) against database$/, (columnName) => {
  webTable.validateUserEmailAgainstDb(dbconfig, columnName);
})

Then(/^user gets the qbdepartment table details$/, () => {
  webTable.getTable(dbconfig);
})
