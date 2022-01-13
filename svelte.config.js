/** @type {import('@sveltejs/kit').Config} */
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { imagetools } from "vite-imagetools";

const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    // hydrate the <div id="app"> element in src/app.html
    target: "#app",
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
    }),
    vite: {
      plugins: [imagetools()],
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
};

export default config;
