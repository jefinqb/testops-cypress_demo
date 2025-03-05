Feature: Login Feature
  Scenario: Login functionality
    Given user navigates to the login page
    When user logged in using username as "tomsmith" and password as "SuperSecretPassword!"
    Then Landing page should be displayed


  Scenario: Login functionality using fixtures
    Given user navigates to the login page
    When user logged in using valid credentials
    Then Landing page should be displayed


  Scenario: Login functionality using data table
    Given user navigates to the login page
    When user enter username and password
      | username    | password              |
      | tomsmith    | SuperSecretPassword!  |
    Then Landing page should be displayed
