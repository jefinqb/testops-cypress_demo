import HomePage from "../../PageObject/HomePage";

describe("Redirection Functionality", function () {
  beforeEach(function () {
    cy.fixture("redirectionlinkdata").then(function (testdata) {
      this.testdata = testdata;
    });
    const home_page = new HomePage();
    home_page.navigate();
    this.redirection_page = home_page.clickOnRedirectLink();
  });

  it("verify basic redirection", function () {
    this.redirection_page.clickRedirectUrl1(this.testdata.link1);
    cy.url().should("include", "status_codes");
    this.redirection_page.clickRedirectUrl2(this.testdata.link2);
    cy.url().should("eq", this.testdata.url2);
    this.redirection_page.clickBrowserBack();
    cy.url().should("eq", this.testdata.url1);
  });

  it("verify forward and backward navigation", function () {
    this.redirection_page.clickRedirectUrl1(this.testdata.link1);
    this.redirection_page.clickRedirectUrl3(this.testdata.link3);
    this.redirection_page.clickBrowserBack();
    cy.url().should("eq", this.testdata.url1);
    this.redirection_page.clickBrowserForward();
    cy.url().should("eq", this.testdata.url3);
  });
});
