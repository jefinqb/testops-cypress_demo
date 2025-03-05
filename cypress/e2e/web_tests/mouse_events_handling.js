import HomePage from "../../PageObject/HomePage";

describe("Mouse action Functionality Check", function () {
  beforeEach(function () {
    cy.fixture("mouseaction").then(function (testdata) {
      this.testdata = testdata;
    });
    const home_page = new HomePage();
    home_page.navigate();
    this.mouse_actions_page = home_page.clickOnJQueryLink();
  });

  it("verify mouse hover functionality using invoke method", function () {
    this.mouse_actions_page.getSubMenu1().should("not.be.visible");
    this.mouse_actions_page.mouseHoverUsingInvoke();
    this.mouse_actions_page.getSubMenu1().should("be.visible");
  });

  //trigger function is failing after cypress upgrade. Need to fix this
  it.skip("verify mouse hover functionality using trigger method", function () {
    this.mouse_actions_page.getSubMenu1().should("be.hidden");
    this.mouse_actions_page.mouseHoverUsingTrigger();
    this.mouse_actions_page.getSubMenu1().should("not.be.hidden");
    //cy.get('#ui-id-4').next('ul').invoke('show')
    //this.mouse_actions_page.getSubMenu1().trigger('mouseover')
  });

  it("verify force click on hidden element", function () {
    this.mouse_actions_page.getSubMenu2().should("not.be.visible");
    this.mouse_actions_page.forceClickHiddenElement();
    this.mouse_actions_page.getPageTitle().then(function (el) {
      expect(el).to.have.text(this.testdata.pagetitle);
    });
  });
});
