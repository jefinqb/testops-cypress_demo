class AddDeletePage {
    addButton() {
        return cy.contains("button", "Add Element");
    }
    deleteButton() {
        return cy.get(".added-manually");
    }

    clickAddButton() {
        this.addButton().click();
    }

    clickDeleteButton() {
        this.deleteButton().click();
    }
}
export default AddDeletePage;
