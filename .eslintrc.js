/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    strict: ["error", "global"],
    "no-console": "off",
    "comma-dangle": ["error", "never"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "eol-last": ["error", "always"],
  },
};
