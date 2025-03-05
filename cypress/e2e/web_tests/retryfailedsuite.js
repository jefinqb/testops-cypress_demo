import HomePage from "../../PageObject/HomePage";

describe(
  "Add/Delete Functionality Check",
  {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
  function () {
    beforeEach(function () {
      const home_page = new HomePage();
      home_page.navigate();
      this.add_delete_page = home_page.clickOnAddRemoveLink();
    });

    it("verify add functionality", function () {
      this.add_delete_page.clickAddButton();
      this.add_delete_page.deleteButton().should("be.visible");
    });

    it("verify delete functionality", function () {
      this.add_delete_page.clickAddButton();
      this.add_delete_page.clickDeleteButton();

      this.add_delete_page.deleteButton().should("not.exist");
    });
  },
);
