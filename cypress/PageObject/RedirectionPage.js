class RedirectionLinkPage {
  clickRedirectUrl1(firstlink) {
    return cy.get("a").contains(firstlink).click();
  }
  clickRedirectUrl2(secondlink) {
    return cy.get("a").contains("200").click();
  }
  clickRedirectUrl3(thirdlink) {
    return cy.get("a").contains("404").click();
  }

  clickBrowserBack() {
    cy.go("back");
  }

  clickBrowserForward() {
    cy.go("forward");
  }
}
export default RedirectionLinkPage;
