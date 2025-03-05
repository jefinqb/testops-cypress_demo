const baseConfig = require("./cypress.config");
const {
  enableVideoRecordingFailedTest,
} = require("./cypress/support/specHelper");

module.exports = {
  ...baseConfig,
  e2e: {
    ...baseConfig.e2e,
    setupNodeEvents: (on, config) => {
      // Call the default implementation from the baseConfig
      baseConfig.e2e.setupNodeEvents(on, config);
      on("after:spec", enableVideoRecordingFailedTest);
    },
    baseUrl: "https://the-internet.herokuapp.com", //update with your staging url
  },
};
