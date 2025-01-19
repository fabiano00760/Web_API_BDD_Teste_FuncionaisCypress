import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com/#/',
    async setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({ plugins: [createEsbuildPlugin(config)] }));
      return config;
    },
    specPattern: [
      "features/**/*.feature",       // Para arquivos Cucumber (.feature)
      "**/*.cy.{js,ts}"           // Para arquivos JavaScript/TypeScript com .cy.js ou .cy.ts
    ],
    supportFile: false,
    // Configurações de viewport
    viewportWidth: 1000,
    viewportHeight: 660,
  },
});


