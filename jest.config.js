// jest.config.js
module.exports = {
  verbose: true,
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  "roots": [
    "<rootDir>",
    "/home/some/path/"
  ],
  "modulePaths": [
    "<rootDir>",
    "/home/some/other/path"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
};