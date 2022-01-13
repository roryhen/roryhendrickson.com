const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNesting = require("postcss-nesting");
const postcssCustomMedia = require("postcss-custom-media");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
  plugins: [
    postcssNesting(),
    postcssCustomMedia(),
    autoprefixer(),
    !dev &&
      cssnano({
        preset: "default",
      }),
  ],
};

module.exports = config;
