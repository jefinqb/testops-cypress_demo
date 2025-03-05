import { Given } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../PageObject/HomePage";
import CheckboxPage from "../../../PageObject/CheckboxPage";
const checkboxPage = new CheckboxPage();
Given("user navigates to the Home page", function () {
  const home_page = new HomePage();
  home_page.navigate();
});

When("user click on the first checkbox", function () {
  checkboxPage.checkCheckbox1();
});

Then("verifies the checkbox is checked", function () {
  checkboxPage.checkbox1().should("be.checked");
});
