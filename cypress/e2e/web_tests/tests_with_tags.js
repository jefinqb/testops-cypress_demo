import HomePage from "../../PageObject/HomePage";

describe("sample tests with tags", function () {
  context("Mouse action Functionality Check", function () {
    beforeEach(function () {
      cy.fixture("mouseaction").then(function (testdata) {
        this.testdata = testdata;
      });
      const home_page = new HomePage();
      home_page.navigate();
      this.mouse_actions_page = home_page.clickOnJQueryLink();
    });

    it(
      "verify mouse hover functionality using invoke method",
      { tags: "@regression" },
      function () {
        this.mouse_actions_page.getSubMenu1().should("not.be.visible");
        this.mouse_actions_page.mouseHoverUsingInvoke();
        this.mouse_actions_page.getSubMenu1().should("be.visible");
      },
    );

    it(
      "verify force click on hidden element",
      { tags: ["@smoke", "@regression"] },
      function () {
        this.mouse_actions_page.getSubMenu2().should("not.be.visible");
        this.mouse_actions_page.forceClickHiddenElement();
        this.mouse_actions_page.getPageTitle().then(function (el) {
          expect(el).to.have.text(this.testdata.pagetitle);
        });
      },
    );
  });

  context("Checkbox handling feature", { tags: "@regression" }, () => {
    beforeEach(function () {
      const home_page = new HomePage();
      home_page.navigate();
      this.checkbox_page = home_page.clickOnCheckboxesLink();
    });

    it("check first checkbox", { tags: "@smoke" }, function () {
      this.checkbox_page.checkCheckbox1();
      this.checkbox_page.checkbox1().should("be.checked");
    });

    it("uncheck last checkbox", function () {
      this.checkbox_page.uncheckCheckbox2();
      this.checkbox_page.checkbox2().should("not.be.checked");
    });
  });
});
