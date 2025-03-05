import HomePage from "../../PageObject/HomePage";

describe("Dropdown Functionality", () => {
  beforeEach(function () {
    const home_page = new HomePage();
    home_page.navigate();
    this.dropdown_page = home_page.clickOnDropDownLink();
  });

  it("Click and verify dropdown options 1 and 2", function () {
    // Selects the values Option 1 and Option 2 from dropdown and check if the values are same
    this.dropdown_page.selectDropdownOption("Option 1");
    this.dropdown_page.selectedOption().should("eq", "Option 1");
    this.dropdown_page.selectDropdownOption("Option 2");
    this.dropdown_page.selectedOption().should("eq", "Option 2");
  });
});
