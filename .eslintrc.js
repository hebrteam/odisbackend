module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  extends: [
    // "prettier",
    "plugin:@angular-eslint/recommended",
    // AirBnB Styleguide rules
    // 'airbnb-typescript/base',
    // Settings for Prettier
    'prettier/@typescript-eslint',
    // "prettier/prettier",
    'plugin:prettier/recommended'
],
overrides: [
    {
      files: ["*.ts"],
      extends: [
        // "prettier",
        "plugin:@angular-eslint/recommended",
        // AirBnB Styleguide rules
        // 'airbnb-typescript/base',
        // Settings for Prettier
        'prettier/@typescript-eslint',
        // "prettier/prettier",
        'plugin:prettier/recommended'
      ],
      "plugins": ["prettier"],
      "rules": {
        // "prettier/prettier": "error"
      "prettier/prettier": ["error", {"singleQuote": true, "endOfLine":"auto", "trailingComma": "none", "useTabs": false}]
       //"prettier/prettier": ["error", {"singleQuote": true, "endOfLine":"auto", "trailingComma": "none", "parser": "flow"}]
      }
    }
],
};
