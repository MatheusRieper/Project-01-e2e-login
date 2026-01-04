const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    ADMIN_USER: 'test@gmail.com',
    ADMIN_PASS: '12345678'
  }
});