module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error", // todos os problemas que identificar notificar
    "class-methods-use-this": "off", // nao cobra 'this' para metodo de classe
    "no-param-reassign": "off", // receba parametro e faca alteracoes no mesmo
    "camelcase": "off", // deixa de cobrar somente camelcase
    "no-unused-vars": ["error", { "argsIgnorePattern": "next"}], // nao reclamar caso eu nao use a var NEXT
  },
};
