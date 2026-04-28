const js = require("@eslint/js");
const globals = require("globals");
const importPlugin = require("eslint-plugin-import");
const eslintConfigPrettier = require("eslint-config-prettier");

module.exports = [
  {
    ignores: ["_site/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: [
      "check-*.js",
      ".eleventy.js",
      "js/**/*.js",
      "config/**/*.js",
      "_data/layout.js",
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "prefer-destructuring": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrors: "none",
        },
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "import/newline-after-import": "error",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
];
