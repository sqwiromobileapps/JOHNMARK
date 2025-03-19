const baseConfig = require('@cloudhub-ux/eslint');

// module.exports = {
//   ...baseConfig,
// };

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],

      parser: '@typescript-eslint/parser',
      plugins: [...baseConfig.plugins],
      rules: {
        ...baseConfig.rules,
        'unused-imports/no-unused-imports': 'warn',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies
        '@next/next/no-document-import-in-page': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-shadow': ['off', { hoist: 'all', allow: [] }],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/no-empty-function': [
          'error',
          { allow: ['arrowFunctions'] },
        ],
        '@typescript-eslint/no-empty-pattern': 'off',
        'no-empty-pattern': 'off',
        'no-undef': 'error',
        'no-redeclare': 'error',
        'no-unused-vars': 'off',
      },
      globals: {
        ...baseConfig.globals,
        global: true,
        setTimeout: true,
        setInterval: true,
        clearTimeout: true,
        clearInterval: true,
        window: true,
        document: true,
        navigator: true,
        localStorage: true,
        sessionStorage: true,
        fetch: true,
        module: true,
        process: true,
        require: true,
        console: true,
        __dirname: true,
        __DEV__: true,
      },
    },
  ],
};
