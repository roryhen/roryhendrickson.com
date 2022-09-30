import cssnano from "cssnano";
import presetEnv from "postcss-preset-env";

const dev = process.env.NODE_ENV === "development";

export default {
  plugins: [
    presetEnv({
      autoprefixer: true,
      features: {
        "custom-media-queries": {
          importFrom: [
            {
              customMedia: { "--sm-vw": "(max-width: 720px)" },
            },
          ],
        },
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
