module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { 'project': ['./tsconfig.json'] },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'error',
    'no-trailing-spaces': 'error'
  }
}
