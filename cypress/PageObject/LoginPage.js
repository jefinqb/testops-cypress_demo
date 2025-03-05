import LandingPage from "./LandingPage";

class LoginPage {
  visit() {
    cy.visit("/login");
  }

  enterUsername(username) {
    cy.get("input#username").type(username);
  }

  enterPassword(password) {
    cy.get("input#password").type(password);
  }

  clickOnLogin() {
    cy.get('button[type="submit"]').click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickOnLogin();
    return new LandingPage();
  }
}

export default LoginPage;
