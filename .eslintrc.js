module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.build.json'
    ]
  },
  plugins: [
    '@typescript-eslint',
    "jest",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  rules: {
  },
  env: {
    "browser": false,
    "es6": true,
    "node": true
  },
};

