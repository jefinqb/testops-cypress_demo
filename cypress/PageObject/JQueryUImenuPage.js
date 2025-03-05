class JQueryUImenuPage {
  getHiddenElement() {
    return cy.get("li.ui-menu-item ul");
  }
  getSubMenu1() {
    return cy.get("a").contains("Downloads");
  }
  getSubMenu2() {
    return cy.get("a").contains("Back to JQuery UI");
  }
  getMainMenu1() {
    return cy.get("#ui-id-2");
  }
  getPageTitle() {
    return cy.get(".example h3");
  }

  mouseHoverUsingInvoke() {
    this.getHiddenElement().invoke("show");
  }

  mouseHoverUsingTrigger() {
    this.getMainMenu1().trigger("mouseover");
  }

  forceClickHiddenElement() {
    this.getSubMenu2().click({ force: true });
  }
}
export default JQueryUImenuPage;
