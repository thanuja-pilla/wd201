import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // 🏆 Add Jest globals here
      },
    },
    rules: {
      // Add your custom rules here
    },
  },
];
