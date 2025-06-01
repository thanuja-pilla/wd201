import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    env: {
      commonjs: true,
      jest: true,
      node: true,
      es6: true,
    },
    extends: ["eslint:recommended"],
    overrides: [],
    parserOptions: {
      ecmaVersion: "latest",
    },
    rules: {},
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: ["js"],
    extends: ["plugin:js/recommended"],
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: globals.browser },
  },
]);
