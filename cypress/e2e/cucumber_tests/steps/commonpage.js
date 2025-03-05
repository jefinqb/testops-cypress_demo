import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../../PageObject/HomePage";

Then(/^user click on the (.*) link$/, (menyType) => {
  new homePage().clickMenu(menyType);
});