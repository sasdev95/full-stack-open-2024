import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    files: ['**/*.js', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      '@stylistic/js/indent': ['error', 4],
      '@stylistic/js/linebreak-style': ['error', 'windows'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'no-console': 0,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 0,
      'no-unused-vars': 0
    },
    ignores: ['node_modules/', 'dist/', '.eslintrc.cjs/*', 'vite.config.js/*'],
  },
]
