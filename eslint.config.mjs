import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  {
    ignores: [".config/*", "eslint.config.mjs"]
  },
  {
    rules: {
      "quotes": ["error", "single"],
      "semi-style": ["error", "last"],
      "indent": ["error", 2],
      "space-before-function-paren": ["error", "never"],
      "keyword-spacing": ["error", { "before": true, "after": true }],
      "space-infix-ops": ["error", { "int32Hint": false }],
      "no-multi-spaces": ["error"],
      "space-before-blocks": ["error", "always"],
      "no-console": ["warn"],
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-unused-vars": ["error"],
      "comma-dangle": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "no-trailing-spaces": ["error"],
      "no-var": ["error"],
      "prefer-const": ["error"],
      "arrow-spacing": ["error", { "before": true, "after": true }],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "block-spacing": ["error", "always"],
  }
  },
  pluginJs.configs.recommended,
];