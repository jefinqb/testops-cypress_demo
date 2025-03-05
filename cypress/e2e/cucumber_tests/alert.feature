Feature: Alert handling Feature
  Scenario: Alert Functionality
    Given user navigates to the Home page for Alert
    When user clicks on JS Alert box and validates the alert contents "I am a JS Alert"
    When user clicks on JS Confirm and clicks Cancel button and validates the alert contents "I am a JS Confirm"
    And user clicks on JS Prompt and type "Hello, Cypress!"
