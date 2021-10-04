const cssnano = require("cssnano");
const postcssPresetEnv = require("postcss-preset-env");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
  plugins: [
    postcssPresetEnv(),

    !dev &&
      cssnano({
        preset: "default",
      }),
  ],
};

module.exports = config;
