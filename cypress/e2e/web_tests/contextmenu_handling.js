import HomePage from "../../PageObject/HomePage";

describe("Right Click Functionality", function () {
  beforeEach(function () {
    cy.fixture("contextmenudata").then(function (testdata) {
      this.testdata = testdata;
    });
    const home_page = new HomePage();
    home_page.navigate();
    this.context_menu_page = home_page.clickOnContentMenuLink();
  });

  it("verify context Menu", function () {
    this.context_menu_page.rightClickContextBox();
    let alerttext = this.testdata.popupmessage;
    cy.on("window:alert", function (str) {
      //verify text on pop-up
      expect(str).to.equal(alerttext);
    });
  });
});
