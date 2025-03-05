const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const {
  transport,
  toemail,
  emailOnSuccess,
} = require("../cypressinternal/cypress/support/emailtemplate.js");

module.exports = defineConfig({
  projectId: "kw7rnd",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(cypressOn, config) {
      const on = require("cypress-on-fix")(cypressOn);
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());
      require("@cypress/grep/src/plugin")(on);
      require("cypress-email-results")(on, config, {
        email: toemail,
        emailOnSuccess: emailOnSuccess,
        transport,
      });

      return require("../cypressinternal/cypress/support/tasks.js")(on);
    },
    baseUrl: "https://the-internet.herokuapp.com",
    specPattern: [
      "cypress/e2e/web_tests/*.js",
      "cypress/e2e/**/*.feature",
      "cypress/e2e/api_tests/*.js",
      "cypress/e2e/visual_tests/*.js",
      "cypress/e2e/accessibility_tests/*.js",
    ],
    viewportHeight: 720,
    viewportWidth: 1280,
    video: false,
  },
});
