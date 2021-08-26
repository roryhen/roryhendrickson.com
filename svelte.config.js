/** @type {import('@sveltejs/kit').Config} */
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: "index.html",
    }),
  },

  preprocess: preprocess({
    postcss: true,
  }),
};

export default config;
