const postcssJitProp = require("postcss-jit-props");
const OpenProps = require("open-props");

module.exports = {
  plugins: [postcssJitProp(OpenProps)],
};
