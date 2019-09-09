module.exports = {
    rootDir: '../',
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFiles: [
      "jest-canvas-mock"
    ]
};
