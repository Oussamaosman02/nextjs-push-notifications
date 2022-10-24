const webpush = require("web-push");
require("dotenv").config();

const privada = "ei6tJQVby5Zo1jFqAeWNlj8339F9bG2HKxuzLSAqIJw";
const publica =
  "BFd8Qlz3sMT5vTtNxsSh0to-bahYDhgPqwbXSgKWbFZw9Bvb_Y-YdX95sQXI0JzAcFaWRRgKWhuOLJDXArFSbew";
webpush.setVapidDetails("mailto:test@creal.store", publica, privada);

module.exports = webpush;
