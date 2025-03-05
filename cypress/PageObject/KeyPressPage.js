class KeyPressPage {
  getTextField() {
    return cy.get("#target");
  }
  getTextResult() {
    return cy.get("#result");
  }

  enterText(key) {
    this.getTextField().type(key);
  }
}
export default KeyPressPage;
