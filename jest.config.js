module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components//$1',
    '^@/generated(.*)$': '<rootDir>/src/generated/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
    '^@/components(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@/lib(.*)$': '<rootDir>/src/lib/$1',
    '^@/utils(.*)$': '<rootDir>/src/utils/$1',
    '^@/types(.*)$': '<rootDir>/src/types/$1',
    '^@/styles(.*)$': '<rootDir>/src/styles/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '\\.graphql$': [
      'graphql-let/jestTransformer',
      { subsequentTransformer: 'babel-jest' },
    ],
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
}
