import HomePage from "../../PageObject/HomePage";

describe("File Upload Functionality Check", function () {
  beforeEach(function () {
    cy.fixture("fileuploaddata").then(function (testdata) {
      this.testdata = testdata;
    });
    const home_page = new HomePage();
    home_page.navigate();
    this.file_upload_page = home_page.clickOnUploadFileLink();
  });

  it("verify image upload functionality", function () {
    this.file_upload_page.uploadFile(this.testdata.imagepath);
    this.file_upload_page
      .getMessage()
      .should("have.text", this.testdata.successmessage);
    this.file_upload_page.getUploadedFile().contains(this.testdata.imagename);
  });

  it("verify text file upload functionality", function () {
    this.file_upload_page.uploadFile(this.testdata.textfilepath);
    this.file_upload_page
      .getMessage()
      .should("have.text", this.testdata.successmessage);
    this.file_upload_page
      .getUploadedFile()
      .contains(this.testdata.textfilename);
  });

  it("verify image drag&drop functionality", function () {
    this.file_upload_page.uploadFileThroughDragandDrop(this.testdata.imagepath);
    this.file_upload_page
      .getDropBoxImage()
      .should("have.text", this.testdata.imagename);
  });
});
