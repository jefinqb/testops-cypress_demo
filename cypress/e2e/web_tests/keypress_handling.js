import HomePage from "../../PageObject/HomePage";

describe("Key Press Functionality", function () {
  beforeEach(function () {
    cy.fixture("keypressdata").then(function (testdata) {
      this.testdata = testdata;
    });
    const home_page = new HomePage();
    home_page.navigate();
    this.keypress_page = home_page.clickOnKeyPress();
  });

  it("verify alphabet press", function () {
    this.keypress_page.enterText(this.testdata.Alphabetkey);
    this.keypress_page
      .getTextResult()
      .should("have.text", "You entered: " + this.testdata.Alphabetkey);
  });

  it("verify shiftPress", function () {
    this.keypress_page.enterText("{shift}");
    this.keypress_page
      .getTextResult()
      .should("have.text", "You entered: " + this.testdata.Shiftkey);
  });
});
