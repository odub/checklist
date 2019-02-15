const path = require("path");
const { version } = require("./package");

module.exports = {
  webpackConfig: require("react-scripts/config/webpack.config"),
  components: "src/components/Checklist.js",
  usageMode: "expand",
  exampleMode: "expand",
  require: [path.join(__dirname, "src/index.css")]
};
