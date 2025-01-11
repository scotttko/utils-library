export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/__tests__/**/*.test.ts"], // Look for test files
  collectCoverage: true, // Enable coverage reporting
  collectCoverageFrom: [
    "src/**/*.{ts,js}",
    "!src/**/__tests__/**",
    "!src/**/index.ts",
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
