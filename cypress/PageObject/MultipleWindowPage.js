class MultipleWindowPage {
    getMultipleTab() {
        return cy.get("a").contains("Click Here");
    }

    clickAndSwitchtoTab() {
        this.getMultipleTab().invoke("removeAttr", "target").click();
    }
}
export default MultipleWindowPage;
