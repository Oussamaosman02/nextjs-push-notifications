const webpush = require("web-push");
require("dotenv").config();
webpush.setVapidDetails(
  "mailto:test@creal.store",
  process.env.PUBLIC,
  process.env.PRIVATE
);

module.exports = webpush;
