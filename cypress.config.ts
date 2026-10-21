import { defineConfig } from "cypress";
import { reportingLabs } from 'reporting-labs/cypress';
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {
  addCucumberPreprocessorPlugin,
} from "@badeball/cypress-cucumber-preprocessor";

import {
    createEsbuildPlugin,
} from "@badeball/cypress-cucumber-preprocessor/esbuild";


export default defineConfig({
  video: false,
  screenshotOnRunFailure: true,

  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  
  e2e: {
    specPattern: "cypress/e2e/features/**/*.feature",
    async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);

            on(
                "file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );
      // implement node event listeners here
      reportingLabs(on, config, {
        title: 'ParaBank Cypress Automation',
      });

      return config;
    },
  },
  expose: {
        RegisterURL: 'https://parabank.parasoft.com/parabank/register.htm',
        LoginURL:'https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC'
    }

});
