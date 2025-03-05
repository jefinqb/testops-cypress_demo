class NotificationMessagePage {
  clickHereLink() {
    return cy.get("a").contains("Click here").click();
  }
  notification() {
    return cy.get("#flash");
  }
}
export default NotificationMessagePage;
