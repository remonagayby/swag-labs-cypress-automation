const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3b45h8',
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
