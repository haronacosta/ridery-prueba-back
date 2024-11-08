import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...prettier.rules,
      'prettier/prettier': 'error',
    },
    plugins: {
      prettier: pluginPrettier,
    },
  },
];
