module.exports = {
    preset: 'ts-jest',       // Usa ts-jest para suporte ao TypeScript
    testEnvironment: 'node', // Ambiente de teste (Node.js)
    testMatch: ['**/tests/**/*.test.ts'],
    transform: {
      '^.+\\.(js|ts)$': 'babel-jest', // Usa Babel para transformar JavaScript/TypeScript
    },
    transformIgnorePatterns: [
      // Ignora tudo em node_modules, exceto a dependência específica
      'node_modules/(?!nome-da-dependencia/)',
    ],
  };