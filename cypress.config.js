const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require("fs");
const {
  enableVideoRecordingFailedTest,
} = require("./cypress/support/specHelper");

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
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("file:preprocessor", cucumber());
      require("@cypress/grep/src/plugin")(on);
      on("after:spec", enableVideoRecordingFailedTest);
      return require("./cypress/support/tasks.js")(on);
    },
    baseUrl: "https://the-internet.herokuapp.com",
    specPattern: [
      "cypress/e2e/web_tests/*.js",
      "cypress/e2e/**/*.feature",
      "cypress/e2e/api_tests/*.js",
      "cypress/e2e/canvas_tests/*.js",
      "cypress/e2e/visual_tests/*.js",
      "cypress/e2e/accessibility_tests/*.js",
    ],
    viewportHeight: 720,
    viewportWidth: 1280,
    video: true,
  },
  env: {
    db: {
      dbHost: "localhost",
      dbusername: "qbuser",
      dbPassword: "Qb1234",
      database: "CypressDb",
    },
  },
});
