class BasicAuthPage {
  navigate(auth_url, username, password) {
    cy.visit(auth_url, {
      auth: {
        username: username,
        password: password,
      },
    });
  }

  getMessage() {
    return cy.get(".example p");
  }
}
export default BasicAuthPage;
