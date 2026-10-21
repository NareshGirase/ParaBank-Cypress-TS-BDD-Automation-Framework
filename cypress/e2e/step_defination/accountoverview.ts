
import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import { AccountOverviewPage } from "../pages/AccountOverviewPage";

const accountOverviewPage = new AccountOverviewPage();

// Background steps are already implemented in login.ts:
// Given the user opens the ParaBank login page
// When the user logs in with valid credentials
// Then the account overview page should be displayed

// Verify Account Overview page title
Then("the Account Overview page title should be displayed", () => {
    accountOverviewPage.verifyPageTitle();
});

// Verify account table headers
Then("the account table headers should be displayed", () => {
    accountOverviewPage.verifyTableHeaders();
});

// Verify account numbers
Then("all account numbers should be displayed", () => {
    accountOverviewPage.verifyAccountNumbersDisplayed();
});

// Open an account
When("the user opens an account", () => {
    accountOverviewPage.clickFirstAccount();
});

// Verify account details page
Then("the account details page should be displayed", () => {
    cy.get("#rightPanel h1.title")
        .should("be.visible")
        .and("contain.text", "Account Details");
});

// Scenario Outline: Verify account balance information
Then("all {string} should be displayed", (balanceType: string) => {
    if (balanceType === "account balances") {
        accountOverviewPage.verifyAccountBalancesDisplayed();
    } else if (balanceType === "available balances") {
        accountOverviewPage.verifyAvailableBalancesDisplayed();
    }else {
        throw new Error(`Unsupported balance type: ${balanceType}`);
    }
});

// Verify total balance
Then("the total balance should be displayed", () => {
    accountOverviewPage.verifyTotalBalanceDisplayed();
});

// Scenario Outline: Verify minimum account balance
Then(
    "each account should have a minimum balance of {int} dollars",
    (minimumBalance: number) => {
        accountOverviewPage.verifyMinimumBalance(minimumBalance);
    }
);
