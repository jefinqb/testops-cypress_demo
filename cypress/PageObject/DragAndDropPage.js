class DragAndDropPage {
  getDragObject() {
    return cy.get("#column-a");
  }
  getDropObject() {
    return cy.get("#column-b");
  }

  PerformDragandDrop() {
    const dataTransfer = new DataTransfer();
    this.getDragObject().trigger("dragstart", { dataTransfer });
    this.getDropObject().trigger("drop", { dataTransfer });
  }
}
export default DragAndDropPage;
