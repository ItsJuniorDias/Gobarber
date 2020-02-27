module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
     "react/jsx-filename-extension": [
       'warn',
       {extensions: ['.jsx', 'js']}
     ],
     'prettier/prettier': 'error',
     'import/prefer-default-export': 'off',
     'no-unused-vars': ['error', {argsIgonorePattern: '^_'}],
     'react/jsx-one-expression-per-line': 'off',
     'global-require': 'off',
     'react-native/no-raw-text':'off',
     'react/jsx-props-no-spreading': 'off'
  },
};
