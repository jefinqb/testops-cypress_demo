describe("Visual testing", () => {
    before(() => {
        // Set the base URL for Visual tests
        Cypress.config("baseUrl", "https://www.amazon.in/");
    });

    it("verifies Amazon Homepage", () => {
        cy.visit("/");
        cy.screenshot("Amazon home page");
    });
});
