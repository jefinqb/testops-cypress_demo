class IframePage {
  getiFrameLink() {
    return cy.get("a").contains("iFrame");
  }
  getNestedframeLink() {
    return cy.get("a").contains("Nested Frames");
  }
  getFrameId(frameid) {
    return cy.get(frameid);
  }
  getIframebody(framelocator) {
    return this.getFrameId(framelocator)
      .its("0.contentDocument.body")
      .then(cy.wrap);
  }
  getIframetextbox(frameid, message) {
    this.getIframebody(frameid).find("p").clear();
    this.getIframebody(frameid).find("p").type(message);
    return this.getIframebody(frameid).find("p");
  }
  getChildFrame(frameid, framename) {
    return this.getIframebody(frameid).find(
      "frame[src='/frame_" + framename + "']",
    );
  }

  clickiFrameLink() {
    this.getiFrameLink().click();
  }
  clickNestedframeLink() {
    this.getNestedframeLink().click();
  }
}
export default IframePage;
