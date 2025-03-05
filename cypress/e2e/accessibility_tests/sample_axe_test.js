import HomePage from "../../PageObject/HomePage";

describe("Sample accessibility tests", () => {
  beforeEach(function () {
    const home_page = new HomePage();
    home_page.navigate();
    cy.injectAxe();
  });

  it("check entire page for accessibility issues", () => {
    cy.checkAccessibility();
  });
});
