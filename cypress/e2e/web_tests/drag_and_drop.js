import HomePage from "../../PageObject/HomePage";

describe("Drag and Drop Functionality Check", () => {
  context("with demo site - Herokuapp", () => {
    beforeEach(function () {
      const home_page = new HomePage();
      home_page.navigate();
      this.draganddrop_page = home_page.clickOnDragAndDrop();
    });

    it("Verify Drag and Drop", function () {
      this.draganddrop_page.PerformDragandDrop();
      this.draganddrop_page.getDragObject().should("have.text", "B");
      this.draganddrop_page.getDropObject().should("have.text", "A");
    });
  });
});
