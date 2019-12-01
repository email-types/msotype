module.exports = {
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  env: { node: true },
  rules: {
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.{ts,js}'],
        optionalDependencies: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
  overrides: [
    {
      files: ['*.test.ts'],
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
      env: {
        jest: true,
        node: true,
      },
      rules: {
        'jest/prefer-to-be-null': 2,
        'jest/prefer-to-be-undefined': 2,
        'jest/prefer-to-have-length': 2,
      },
    },
    {
      files: ['utils/**/*'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
