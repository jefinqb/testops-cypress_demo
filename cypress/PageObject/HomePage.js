import CheckboxPage from "./CheckboxPage";
import AlertPage from "./AlertPage";
import AddDeletePage from "./AddDeletePage";
import BasicAuthPage from "./BasicAuthPage";
import ContextMenuPage from "./ContextMenuPage";
import KeyPressPage from "./KeyPressPage";
import MultipleWindowPage from "./MultipleWindowPage";
import RedirectionPage from "./RedirectionPage";
import DragAndDropPage from "./DragAndDropPage";
import FileUploadPage from "./FileUploadPage";
import JQueryUImenuPage from "./JQueryUImenuPage";
import NotificationMessagePage from "./NotificationMessagePage";
import IframePage from "./IframePage";
import DropDownPage from "./DropDownPage";


class HomePage {
  navigate() {
    cy.visit("/");
  }

  clickOnCheckboxesLink() {
    cy.contains("Checkboxes").click();
    return new CheckboxPage();
  }

  clickOnAddRemoveLink() {
    cy.get("a").contains("Add/Remove Elements").click();
    return new AddDeletePage();
  }

  clickOnContentMenuLink() {
    cy.get("a").contains("Context Menu").click();
    return new ContextMenuPage();
  }

  clickOnKeyPress() {
    cy.get("a").contains("Key Presses").click();
    return new KeyPressPage();
  }

  clickOnMultipleWindow() {
    cy.get("a").contains("Multiple Windows").click();
    return new MultipleWindowPage();
  }

  clickOnRedirectLink() {
    cy.get("a").contains("Redirect Link").click();
    return new RedirectionPage();
  }

  clickOnDragAndDrop() {
    cy.get("a").contains("Drag and Drop").click();
    return new DragAndDropPage();
  }

  clickOnUploadFileLink() {
    cy.get("a").contains("File Upload").click();
    return new FileUploadPage();
  }

  clickOnJQueryLink() {
    cy.get("a").contains("JQuery UI Menus").click();
    return new JQueryUImenuPage();
  }

  clickNotificationMessage() {
    cy.get("a").contains("Notification Messages").click();
    return new NotificationMessagePage();
  }

  clickMenu(menuType) {
    cy.get("a").contains(menuType).click();
  }

  clickOnAlertLink() {
    cy.contains("JavaScript Alerts").click();
    return new AlertPage();
  }
  
  clickOnFrameLink(){
    cy.get("a").contains("Frames").click();
    return new IframePage();
  }

  clickOnDownLoadLink(){
    cy.get("span").contains("Select File & Download").click();
    cy.wait(2500);
  }
  
  clickOnDropDownLink() {
    cy.contains("Dropdown").click();
    return new DropDownPage();
  }
}

export default HomePage;
