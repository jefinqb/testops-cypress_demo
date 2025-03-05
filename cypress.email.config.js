const baseConfig = require("./cypress.config");
const {
  enableVideoRecordingFailedTest,
} = require("./cypress/support/specHelper");

const {
  transport,
  toemail,
  emailOnSuccess,
} = require("./cypress/support/emailtemplate.js");

module.exports = {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    setupNodeEvents: (cypressOn, config) => {
      const on = require("cypress-on-fix")(cypressOn);
      baseConfig.e2e.setupNodeEvents(on, config);
      // Load the cypress-email-results plugin
      require("cypress-email-results")(on, config, {
        email: toemail,
        emailOnSuccess: emailOnSuccess,
        transport,
      });

      on("after:spec", enableVideoRecordingFailedTest);
    },
  },
};
