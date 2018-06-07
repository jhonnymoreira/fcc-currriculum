module.exports = {
  env: {
    jest: true
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest'
  ],
  rules: {
    semi: ['error', 'never']
  }
};
