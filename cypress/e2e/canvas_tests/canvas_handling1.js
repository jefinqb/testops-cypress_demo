///<reference types ="Cypress" />

import CanvasPage from "../../PageObject/CanvasPage";

const canvas = new CanvasPage();

describe("Canvas", () => {
  beforeEach(() => {
    canvas.navigateToCanvasSite1();
  });

  it("should click on letsEat Button and then Reset Button", () => {
    canvas.clickLetsEatButton();
    canvas.clickResetButton();
  });
});
