import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  jsxA11y.flatConfigs.recommended,
  {
    plugins: {
      'react-hooks': fixupPluginRules(pluginReactHooks)
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  }
];
