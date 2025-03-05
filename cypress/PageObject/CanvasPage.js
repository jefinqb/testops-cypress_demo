class CanvasPage {
  getCanvas1() {
    return cy.get("#burger_canvas");
  }

  getCanvas2() {
    return cy.get("#canvas");
  }

  navigateToCanvasSite1(){
    cy.visit("https://kitchen.applitools.com/ingredients/canvas");
  }

  navigateToCanvasSite2(){
    cy.visit("https://www.online-calculator.com//html5/simple/index.php?v=10");
  }

  clickLetsEatButton() {
    this.getCanvas1().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX + (canvasCenterX / 3) * 2;
      const buttonY = canvasCenterY + (canvasCenterY / 3) * 2;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  clickResetButton() {
    this.getCanvas1().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX + (canvasCenterX / 3) * 2;
      const buttonY = canvasCenterY + (canvasCenterY / 3) * 2;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  click6Button() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX;
      const buttonY = canvasCenterY;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  clickAdditionButton() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX + (canvasCenterX / 3) * 2;
      const buttonY = canvasCenterY + (canvasCenterY / 3) * 2;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  clickZeroButton() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX - (canvasCenterX / 3) * 2;
      const buttonY = canvasCenterY + (canvasCenterX / 3) * 2;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  clickEqualsButton() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX;
      const buttonY = canvasCenterY + (canvasCenterY / 3) * 2;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  click8Button() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX - (canvasCenterX / 3) * 1;

      const buttonY = canvasCenterY - (canvasCenterY / 3) * 1;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  click9Button() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX;

      const buttonY = canvasCenterY - (canvasCenterY / 3) * 1;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  clickDivisionButton() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX + (canvasCenterX / 4) * 3;

      const buttonY = canvasCenterY - (canvasCenterY / 3) * 1;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }

  click2Button() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX - (canvasCenterX / 3) * 1;

      const buttonY = canvasCenterY + (canvasCenterY / 3) * 1;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }
  clickClearButton() {
    this.getCanvas2().then(($canvas) => {
      // Get dimension of the canvas

      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      // Divide in half since cursor will be at center of canvas

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      // Determine the click position by dissecting the space where the button is
      // This helps allow the test to work responsively

      const buttonX = canvasCenterX - (canvasCenterY / 3) * 2;
      const buttonY = canvasCenterY - (canvasCenterY / 3) * 2;

      // Wrap the canvas with the Cypress API, scroll it into view, and click in the location!

      cy.wrap($canvas).scrollIntoView().click(buttonX, buttonY);
    });
  }
}

export default CanvasPage;
