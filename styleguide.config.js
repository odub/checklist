const path = require("path");

module.exports = {
  webpackConfig: require("react-scripts/config/webpack.config")("development"),
  components: "src/components/Checklist.js",
  usageMode: "expand",
  exampleMode: "hidden",
  require: [path.join(__dirname, "src/index.css")]
};
