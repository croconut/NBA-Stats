const { withEnzyme } = require("jest-expo-enzyme");

module.exports = {
  projects: [
    // Skipping Node because we want to test DOM presets only
    // also only testing the compiled js code instead of ts
    {
      ...withEnzyme(require("jest-expo/ios/jest-preset")),
      ...{
        testMatch: [
          "**/__tests__/**/*.[j]s?(x)",
          "**/?(*.)+(spec|test).[j]s?(x)",
        ],
      },
    },
    {
      ...withEnzyme(require("jest-expo/android/jest-preset")),
      ...{
        testMatch: [
          "**/__tests__/**/*.[j]s?(x)",
          "**/?(*.)+(spec|test).[j]s?(x)",
        ],
      },
    },
  ],
};
