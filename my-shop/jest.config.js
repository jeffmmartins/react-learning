/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{
      tsconfig: "tsconfig.json"
    }],
  },
  moduleNameMapper: {
    "^.+\\.(css|scss)$": "identity-obj-proxy",
  },
};