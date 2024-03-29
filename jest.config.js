module.exports = {
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
