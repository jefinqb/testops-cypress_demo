import HomePage from "../../PageObject/HomePage";

describe("Notification message ", () => {
  context("with demo site - Herokuapp", () => {
    beforeEach(function () {
      const home_page = new HomePage();
      home_page.navigate();
      this.notification_page = home_page.clickNotificationMessage();
    });

    it("checking notification message displayed or not", function () {
      cy.reload();
      cy.wait(2000);
      this.notification_page.clickHereLink();
      this.notification_page.notification().should("be.visible");
    });
  });
});
