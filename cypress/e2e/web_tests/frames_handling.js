import HomePage from "../../PageObject/HomePage";

describe("Frames/Nested Frames Functionality", function () {
  beforeEach(function () {
    cy.fixture("framesdata").then(function (testdata) {
      this.testdata = testdata;
    });

    const home_page = new HomePage();
    home_page.navigate();
    this.iFramepage = home_page.clickOnFrameLink();
  });

  it("verify Frame handling", function () {
    this.iFramepage.clickiFrameLink();
    this.iFramepage
      .getIframetextbox(this.testdata.frameid, this.testdata.message)
      .should("have.text", this.testdata.message);
  });

  it("verify Nested Frames handling", function () {
    this.iFramepage.clickNestedframeLink();
    this.iFramepage
      .getChildFrame(this.testdata.parentframeid, this.testdata.childframe)
      .should("have.attr", "name")
      .and("include", this.testdata.childframe);
  });
});
