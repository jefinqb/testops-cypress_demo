import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../PageObject/HomePage";

Given("user navigates to the Home page for Alert", function () {
  const home_page = new HomePage();
  home_page.navigate();
  this.alert_page = home_page.clickOnAlertLink();
});
When("user clicks on JS Alert box and validates the alert contents {string}", function (alertContents) {
  this.alert_page.clickJSAlert(alertContents);
  cy.on('window:alert', (str) => {
    expect(alertContents).to.equal(str);
  });
  this.alert_page.alertResult().should('be.visible').should('have.text', 'You successfully clicked an alert');
});

Then("user clicks on JS Confirm and clicks Cancel button and validates the alert contents {string}", function (alertContents) {
  this.alert_page.clickJSConfirmAndCancels(alertContents);
  cy.on('window:confirm', (str) => {
    expect(alertContents).to.equal(str);
    return false; // Clicks the Cancel button
  });
  this.alert_page.alertResult().should('be.visible').should('have.text', 'You clicked: Cancel');
});

Then("user clicks on JS Prompt and type {string}", function (message) {
  this.alert_page.clickJSPrmpt(message); 
  this.alert_page.alertResult().should('be.visible').should('have.text', 'You entered: Hello, Cypress!');
});
