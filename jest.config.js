module.exports = {
  testEnvironment: 'jest-environment-jsdom',
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
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '\\.graphql$': [
      'graphql-let/jestTransformer',
      { subsequentTransformer: 'babel-jest' },
    ],
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
}
