module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    'linebreak-style': ['error', 'windows'],
    'no-param-reassign': ["error", { "props": false }],
    'no-use-before-define': ["error", { "functions": false }],
    "no-restricted-globals": ["error", "event", "fdescribe"],
  },
};
