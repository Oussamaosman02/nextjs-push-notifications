const webpush = require("web-push");
require("dotenv").config();

const privada = "BKC4vV19BsnZypGFXcEBXjCX2g1hfCWaZtgzhnqOpq8";
const publica =
  "BMsaFep-L8BRG2TfiJguREIF-q5w8GhbjN61f21sH5qx32vfYS5dN15hvRiw_W0qji6vTmNIsffd5T68U4s5pHs";
webpush.setVapidDetails(
  "mailto:test@creal.store",
  process.env.PUBLIC,
  process.env.PRIVATE
);

module.exports = webpush;
