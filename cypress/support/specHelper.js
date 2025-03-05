const fs = require("fs");

function enableVideoRecordingFailedTest(spec, results) {
  if (results && results.video) {
    const failures = results.tests.some((test) =>
      test.attempts.some((attempt) => attempt.state === "failed"),
    );
    if (!failures && fs.existsSync(results.video)) {
      fs.unlinkSync(results.video);
    }
  }
}

module.exports = {
  enableVideoRecordingFailedTest,
};
