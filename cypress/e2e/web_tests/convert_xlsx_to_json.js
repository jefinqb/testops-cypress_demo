describe("convert xlsx data to json data", () => {
  it("verify json data after writing xlsx data to json file", () => {
    cy.convertXlsToJson("../testData/excelData.xlsx", "Users").then((rows) => {
      cy.writeFile("cypress/fixtures/xlsxData.json", rows);
    });
  });

  it("read data from the json file", () => {
    cy.fixture("xlsxData.json").then((data) => {
      let userDetails = data;
      cy.log(userDetails[0].firstName);
      cy.log(userDetails[0].lastName);
    });
  });
});
