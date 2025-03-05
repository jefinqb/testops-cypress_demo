describe("API testing", () => {
  before(() => {
    // Set the base URL for API tests
    Cypress.config("baseUrl", "https://reqres.in");
  });

  it("PUT API testing", () => {
    cy.request("PUT", "/api/users/2", {
      name: "morpheus",
      job: "zion resident",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq("morpheus");
      expect(response.body.job).to.eq("zion resident");
    });
  });
});
