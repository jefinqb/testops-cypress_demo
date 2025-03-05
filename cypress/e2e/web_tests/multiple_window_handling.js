import HomePage from "../../PageObject/HomePage";

describe("Multiple Window Functionality", function () {
  beforeEach(function () {
    cy.fixture("multiplewindowdata").then(function (testdata) {
      this.testdata = testdata;
    });
    const home_page = new HomePage();
    home_page.navigate();
    this.multiplewindow_page = home_page.clickOnMultipleWindow();
  });

  it("verify multiple windows", function () {
    this.multiplewindow_page.clickAndSwitchtoTab();
    cy.url().should("eq", this.testdata.newwindowurl);
  });
});
