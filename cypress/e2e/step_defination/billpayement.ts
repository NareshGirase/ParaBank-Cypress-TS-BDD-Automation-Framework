
import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import { BillPaymentPage } from "../pages/BillPaymentPage";
import { TestDataFactory } from "../../utils/TestData";
import type { PayeeDetails } from "../interfaces/PayeeDetails";

const billPaymentPage = new BillPaymentPage();

let payee: PayeeDetails;

// Navigate to Bill Payment Service
When("the user opens the Bill Payment Service page", () => {
    billPaymentPage.openBillPayPage();
});

// Verify Bill Payment page title
Then("the Bill Payment Service page title should be displayed", () => {
    billPaymentPage.verifyBillPaymentPageTitle();
});

// Generate payee data
Given("the user generates new payee details", () => {
    payee = TestDataFactory.generatePayee();
});

// Enter payee details
When("the user enters the payee details", () => {
    billPaymentPage.enterPayeeDetails(payee);
});

// Select first available account
When("the user selects the first available account", () => {
    cy.get('select[name="fromAccountId"]')
        .should("be.visible")
        .find("option")
        .not('[value=""]')
        .first()
        .then(($option) => {
            const accountId = $option.val();

            expect(accountId, "Available account ID").to.exist;

            billPaymentPage.selectFromAccount(String(accountId));
        });
});

// Submit payment
When("the user submits the bill payment", () => {
    billPaymentPage.submitPayment();
});

// Verify payment success
Then("the bill payment should be successful", () => {
    billPaymentPage.verifyPaymentSuccess();
});
