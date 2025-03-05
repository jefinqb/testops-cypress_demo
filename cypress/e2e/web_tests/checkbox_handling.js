import HomePage from "../../PageObject/HomePage";

describe("Checkbox handling feature", () => {
  beforeEach(function () {
    const home_page = new HomePage();
    home_page.navigate();
    this.checkbox_page = home_page.clickOnCheckboxesLink();
  });

  it("check first checkbox", function () {
    this.checkbox_page.checkCheckbox1();
    this.checkbox_page.checkbox1().should("be.checked");
  });

  it("uncheck last checkbox", function () {
    this.checkbox_page.uncheckCheckbox2();
    this.checkbox_page.checkbox2().should("not.be.checked");
  });
});
