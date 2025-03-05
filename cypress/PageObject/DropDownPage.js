class DropDownPage {
  getDropDownObject() {
    return cy.get("#dropdown");
  }
  getOptionObject() {
    return cy.get("#dropdown").find('option[selected="selected"]');
  }

  selectDropdownOption(option) {
    this.getDropDownObject().select(option);
  }

  selectedOption() {
    return this.getOptionObject().invoke("text");
  }
}
export default DropDownPage;
