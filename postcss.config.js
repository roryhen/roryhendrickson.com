import cssnano from "cssnano";
import presetEnv from "postcss-preset-env";
import globalData from "@csstools/postcss-global-data"

const dev = process.env.NODE_ENV === "development";

export default {
  plugins: [
    globalData({
      files: ['src/app.postcss'],
    }),
    presetEnv({
      autoprefixer: true,
      features: {
        "custom-media-queries": true,
        "has-pseudo-class": true,
        "media-query-ranges": true,
        "nesting-rules": true,
      },
    }),
    !dev &&
      cssnano({
        preset: "default",
      }),
  ],
};
