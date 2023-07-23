/** @type {import('stylelint').Config} */
export default {
  overrides: [
    {
      files: ["**/*.postcss", "**/*.css"],
      customSyntax: "postcss-html",
    },
  ],
}
