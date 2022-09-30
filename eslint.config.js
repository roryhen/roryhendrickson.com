export default {
  root: true,
  extends: ["eslint:recommended"],
  plugins: ["svelte3"],
  overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
};
