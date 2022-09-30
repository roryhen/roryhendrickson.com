/** @type {import('@sveltejs/kit').Config} */
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-netlify";

export default {
  extensions: [".svelte", ...mdsvexConfig.extensions],

  kit: {
    adapter: adapter(),
    prerender: {
      entries: ["*"],
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
