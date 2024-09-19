import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import jest from 'eslint-plugin-jest'

export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['**/*.spec.js'],
    ...jest.configs['flat/recommended'],
    rules: {
      ...jest.configs['flat/recommended'].rules,
    },
  },
  {
    rules: {
      'no-unused-vars': ["error", { "ignoreRestSiblings": true }],
    }
  },
];