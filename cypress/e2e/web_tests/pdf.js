import HomePage from "../../PageObject/HomePage";

describe("PDF Content Verification", () => {
  const downloadFolderPath = "./cypress/downloads";

  before(() => {
    // Set the base url for PDF download
    Cypress.config("baseUrl", "https://freetestdata.com/document-files/pdf/");
  });

  it("download the pdf and verify the contents", () => {
    cy.visit("/");
    const home_page = new HomePage();
    home_page.clickOnDownLoadLink();
    cy.task("pdfDownload", {
      pdfpath: `${downloadFolderPath}/Free_Test_Data_100KB_PDF.pdf`,
    }).then((data) => {
      {
        //cy.log(data.text);
        const printData = data.text.toString();
        expect(printData).to.include("ipsum  dolor  sit  amet");
      }
    });
  });
});
