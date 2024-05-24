module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
};
