describe("API testing", () => {
  before(() => {
    // Set the base URL for API tests
    Cypress.config("baseUrl", "https://reqres.in");
  });

  it("DELETE API testing", () => {
    cy.request({
      method: "DELETE",
      url: "/api/users/1",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
