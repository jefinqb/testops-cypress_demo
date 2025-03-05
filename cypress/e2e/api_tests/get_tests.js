describe("API testsing", () => {
  before(() => {
    // Set the base URL for API tests
    Cypress.config("baseUrl", "https://fakestoreapi.com");
  });

  it("GET API testing", () => {
    cy.request("GET", "/products").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].id).to.eq(1);
      expect(response.body[0].title).to.eq(
        "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
      );
      expect(response.body[0].price).to.eq(109.95);

      expect(response.body[19].id).to.eq(20);
      expect(response.body[19].title).to.eq(
        "DANVOUY Womens T Shirt Casual Cotton Short"
      );
      expect(response.body[19].price).to.eq(12.99);
    });
  });
});
