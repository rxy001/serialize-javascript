if (typeof window !== "undefined") {
  module.exports = require("./browser");
}

if (typeof process !== "undefined") {
  module.exports = require("crypto").randomBytes;
}
