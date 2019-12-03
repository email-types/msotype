const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

module.exports = {
  extends: [
    '@postmates',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  env: { node: true },
  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      node: { extensions },
    },
  },
  rules: {
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
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
      env: { jest: true },
    },
  ],
};
