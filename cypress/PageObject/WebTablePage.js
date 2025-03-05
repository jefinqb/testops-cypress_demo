let columnNameFound = false;
class WebTablePage {
  getColumnIndex(index) {
    return cy.get(`#table${index} thead span`);
  }

  getColumnValues(tableNumber, columnIndex) {
    return cy.get(`#table${tableNumber} tbody tr td:nth-child(${columnIndex})`);
  }

  getFirstNameColumnValues() {
    return cy.get("#table1 tbody td:nth-child(2)")
  }

  getNameIndex(nameIndex) {
    return cy.get(`#table1 tbody tr:nth-child(${nameIndex}) td:nth-child(3)`);
  }

  getWebTableColumnIndex(columnName) {
    this.getColumnIndex(1).each((element, index, list) => {
      cy.wrap(element).invoke('text').then((text) => {
        if (text === columnName) {
          cy.wrap(index + 1).as("ColumnIndex");
          columnNameFound = true;
        }
      });
    }).then(() => {
      if (!columnNameFound) {
        throw new Error("Column name not found. Failing the case.");
      }
    });
  }

  validateWebElements(expectedColumnList) {
    cy.get("@ColumnIndex").then(columnIndex => {
      this.getColumnValues(1, columnIndex).each((element, index, list) => cy.wrap(element).should('have.text', expectedColumnList[index]));
    });
  }

  getFirstNameRowIndex(name) {
    this.getFirstNameColumnValues().each((element, index, list) => {
      cy.wrap(element).invoke('text').then((text) => {
        if (text === name) {
          cy.wrap(index + 1).as("firstNameIndex");
        }
      });
    });
  }

  getTable(dbconfig) {
    const query = `Select * from QBDEPARTMENT`;
    cy.task("queryDb", { dbconfig: dbconfig, query: query }).then((result) => {
      if (result && Array.isArray(result)) {
        // Log only the Department Name for each row
        result.forEach((row) => {
          if (row && row.Name) {
            cy.log(`Department Name : ${row.Name}`);
            cy.wrap(/^[A-Za-z ]+$/.test(row.Name)).should('be.true');
          } else {
            cy.log("Department Name is undefined or not present in the row");
          }
        });
      } else {
        cy.log("Result data is undefined or not an array");
      }
    })
  }

  validateUserEmailAgainstDb(dbconfig, userName) {
    let emailMatched = false;
    this.getFirstNameRowIndex(userName);
    const query = `SELECT t2.Email
    FROM Table2 as t2
    WHERE t2.SerialNo = (SELECT t1.SerialNo FROM Table1 as t1 WHERE t1.FirstName = '${userName}')`;
    cy.task("queryDb", { dbconfig: dbconfig, query: query }).then((result) => {
      cy.get("@firstNameIndex").then(firstNameIndex => {
        this.getNameIndex(firstNameIndex).each((element, index, list) => {
          cy.wrap(element).invoke('text').then((text) => {
            if (text === result[0].Email)
              emailMatched = true;
          });
        }).then(() => expect(emailMatched, `${userName} Email verifcation`).to.eq(true));
      });
    })
  }
}
export default WebTablePage
