if (typeof window !== "undefined") {
  module.exports = require("./browser").randomBytes;
  return;
}

if (typeof process !== "undefined") {
  module.exports = require("crypto").randomBytes;
  return;
}
