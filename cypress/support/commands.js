// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("parseXlsx", (inputFile) => {
//   return cy.task("parseXlsx", { filePath: inputFile });
// });

Cypress.Commands.add("convertXlsToJson", (filePath, sheetName) => {
  return cy.task("xlsToJson", {
    file: filePath,
    sheet: sheetName,
  });
});

Cypress.Commands.add("convertCsvToJson", (data) => {
  return cy.task("csvToJson", data);
});

Cypress.Commands.add(
  "checkAccessibility",
  (subject, { skipFailures = true } = {}) => {
    cy.checkA11y(subject, null, printAccessibilityViolations, skipFailures);
  },
);

function printAccessibilityViolations(violations) {
  let pageurl;
  const timestamp = new Date().toLocaleString();

  // Get the current page URL
  cy.url().then((url) => {
    pageurl = url;

    // Map violations and include the page URL
    const violationData = violations.map(
      ({ id, impact, description, nodes, tags }) => ({
        id,
        impact,
        description,
        tags: tags,
        html: `"${nodes.map((node) => node.html).join("\n")}"`,
        target: nodes.map((node) => node.target).join("\n"),
        size: nodes.length,
        spec: Cypress.spec.name,
        spec_path: Cypress.spec.relative,
        pageURL: pageurl,
        timestamp: timestamp,
      }),
    );

    const headers = Object.keys(violationData[0]);

    // Create a CSV string with headers
    let csvContent = headers.join(",") + "\n";

    // Append data rows to the CSV string
    violationData.forEach((violation) => {
      const rowData = headers.map((header) => {
        if (header === "tags") {
          return violation[header].join(";"); // Join tags with a delimiter
        } else if (header === "html") {
          // Ensure that HTML content is properly escaped
          const value = JSON.stringify(violation[header]);
          const escapedHtml = `"${value.replace(/"/g, '""')}"`;
          return escapedHtml || ""; // Replace null or undefined with an empty string
        }
        // // Ensure that special characters are properly escaped
        const value = JSON.stringify(violation[header]);
        return value || ""; // Replace null or undefined with an empty string
      });
      csvContent += rowData.join(",") + "\n";
    });

    const filenameWithTimestamp = `cypress/axeReports/violations_${timestamp.replace(
      /[/:]/g,
      "_",
    )}.csv`;

    cy.writeFile(filenameWithTimestamp, csvContent);
  });
}
