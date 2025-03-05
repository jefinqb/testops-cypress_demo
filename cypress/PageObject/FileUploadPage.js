class FileUploadPage {
  getChooseFile() {
    return cy.get("#file-upload");
  }
  getUploadButton() {
    return cy.get("#file-submit");
  }
  getUploadedFile() {
    return cy.get("#uploaded-files");
  }
  getDragDropBox() {
    return cy.get("#drag-drop-upload");
  }
  getMessage() {
    return cy.get("h3");
  }
  getDropBoxImage() {
    return cy.get(".dz-filename:visible");
  }

  uploadFile(file_path) {
    this.getChooseFile().selectFile(file_path);
    this.getUploadButton().click();
  }

  uploadFileThroughDragandDrop(file_path) {
    this.getDragDropBox().selectFile(file_path, { action: "drag-drop" });
  }
}
export default FileUploadPage;
