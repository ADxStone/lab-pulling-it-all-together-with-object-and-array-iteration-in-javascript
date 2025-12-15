export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        numPointsScored: 'readonly',
        shoeSize: 'readonly',
        teamColors: 'readonly',
        teamNames: 'readonly',
        playerNumbers: 'readonly',
        playerStats: 'readonly',
        bigShoeRebounds: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
    },
  },
];