module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    "eslint:recommended"
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
    "no-underscore-dangle": "off",
    "no-undef": "off",
    "no-unused-expressions": "off",
    "no-param-reassign": "off",
    "no-console": "off",
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
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      },
    }
  }
};
