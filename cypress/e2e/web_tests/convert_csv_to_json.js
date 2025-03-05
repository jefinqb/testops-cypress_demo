describe("convert csv data to json data", () => {
  it("verify json data after writing csv data to json file", () => {
    cy.readFile("./cypress/testData/students.csv").then((data) => {
      cy.convertCsvToJson(data).then((data) => {
        cy.writeFile("cypress/fixtures/csvData.json", data);
      });
    });
  });

  it("read data from the json file", () => {
    cy.fixture("csvData.json").then((data) => {
      let userDetails = data;
      cy.log(userDetails[0].Student_email);
      cy.log(userDetails[1].Student_email);
    });
  });
});
