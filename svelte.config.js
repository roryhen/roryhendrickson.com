/** @type {import('@sveltejs/kit').Config} */
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";
import { imagetools } from "vite-imagetools";

const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    // hydrate the <div id="app"> element in src/app.html
    target: "#app",
    adapter: adapter(),
    prerender: {
      entries: ["*"],
    },
    vite: {
      plugins: [imagetools()],
    },
    trailingSlash: "always",
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
    mdsvex(mdsvexConfig),
  ],
};

export default config;
