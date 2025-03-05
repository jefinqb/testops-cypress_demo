class ContextMenuPage {
  getContextBox() {
    return cy.get("#hot-spot");
  }

  rightClickContextBox() {
    this.getContextBox().rightclick();
  }
}
export default ContextMenuPage;
