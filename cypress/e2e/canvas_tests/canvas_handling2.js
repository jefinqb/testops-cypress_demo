///<reference types ="Cypress" />

import CanvasPage from "../../PageObject/CanvasPage";
const canvas = new CanvasPage();

describe("Canvas", () => {
  beforeEach(() => {
    canvas.navigateToCanvasSite2();
  });

  it("should perform various calculator operations", function () {
    canvas.click6Button();
    canvas.clickAdditionButton();
    canvas.clickZeroButton();
    canvas.clickEqualsButton();
    canvas.clickClearButton();
    canvas.click8Button();
    canvas.click9Button();
    canvas.clickDivisionButton();
    canvas.click2Button();
    canvas.clickEqualsButton();
  });
});
