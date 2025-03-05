import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../PageObject/LoginPage";

const login_page = new LoginPage();
let landing_page = null;

Given("user navigates to the login page", function () {
  login_page.visit();
});

When("user logged in using valid credentials", function () {
  cy.fixture("logindetails.json").then((data) => {
    landing_page = login_page.login(data.username, data.password);
  });
});

Then("Landing page should be displayed", function () {
  landing_page.logoutButton().should("be.visible");
  landing_page.alert().should("include.text", "You logged into a secure area!");
});

When(
  "user logged in using username as {string} and password as {string}",
  function (username, password) {
    landing_page = login_page.login(username, password);
  }
);

When("user enter username and password", function (data_table) {
  const { username, password } = data_table.hashes()[0];
  landing_page = login_page.login(username, password);
});
