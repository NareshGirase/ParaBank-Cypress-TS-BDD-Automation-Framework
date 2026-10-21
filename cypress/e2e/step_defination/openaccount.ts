
import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import { OpenAccountPage } from "../pages/OpenAccountPage";

const openAccountPage = new OpenAccountPage();

// Open New Account page
When("the user opens the Open New Account page", () => {
    openAccountPage.openAccountPage();
});

// Verify page controls
Then("the Open New Account page should be displayed", () => {
    openAccountPage.verifyOpenAccountPage();
});

// Select account type from Scenario Outline
When("the user selects the {string} account type", (accountType: string) => {
    if (accountType !== "CHECKING" && accountType !== "SAVINGS") {
        throw new Error(`Unsupported account type: ${accountType}`);
    }

    openAccountPage.selectAccountType(accountType);
});

// Select existing account
When("the user selects existing account number {int}", (accountNumber: number) => {
    openAccountPage.selectExistingAccount(accountNumber);
});

// Submit account request
When("the user submits the new account request", () => {
    openAccountPage.clickOpenAccount();
});

// Verify successful account creation
Then("the new account should be opened successfully", () => {
    openAccountPage.verifyAccountOpened();
});
