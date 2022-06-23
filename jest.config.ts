export default {
  coverageProvider: 'v8',
  testMatch: [
    '**/tests/*.test.ts',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest'
  },
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    }
  }
}
