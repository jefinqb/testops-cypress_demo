describe("API testing", () => {
  before(() => {
    // Set the base URL for API tests
    Cypress.config("baseUrl", "https://reqres.in");
  });

  it("POST API testing", () => {
    cy.request("POST", "/api/users", {
      name: "Jane Smith",
      email: "jane@example.com",
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq("Jane Smith");
      expect(response.body.email).to.eq("jane@example.com");
    });
  });
});
