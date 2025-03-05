Feature: Webtable handling Feature

  Scenario Outline: Webtable Functionality Validation of the column values against excel sheet

    Given user navigates to the Home page
    When user click on the Sortable Data Tables link
    When read the data table values from webtable sheet in excel
    Then validate webtable elements for column <ColumnName>

    Examples:
      | ColumnName |
      | Last Name  |
      | First Name |

  # To run DB integration test cases 
  # Refer point 11 in document https://docs.google.com/document/d/1Ycl7yXm4L8uUjLM-tFu4sJ4tU7cZaA87/edit#heading=h.wxknlhxp3sk8
  # and install all prerequisites, then uncomment below scenario

  # Scenario: Webtable Functionality Validation of the user email against database

  #   Given user navigates to the Home page
  #   When user click on the Sortable Data Tables link
  #   When validate email of the user John against database
  #   When validate email of the user Tim against database

  # Scenario: User get and validate qbdepartment table details

  #   When user gets the qbdepartment table details
