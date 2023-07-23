/** @type {import('stylelint').Config} */
export default {
  overrides: [
    {
      files: ["**/*.css"],
      customSyntax: "postcss-html",
    },
  ],
}
