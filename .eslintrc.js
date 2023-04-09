module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'max-len': [
      'error',
      {
        code: 100,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'eol-last': ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    semi: ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'no-console': ['error'],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
  },
}
