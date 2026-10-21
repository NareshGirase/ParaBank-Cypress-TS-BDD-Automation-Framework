
import { PayeeDetails } from "../interfaces/PayeeDetails";

export class BillPaymentPage {

    private webLocators = {
        billPayLink: 'a[href*="billpay.htm"]',
        pageTitle: '#rightPanel h1.title',
        payeeName: 'input[name="payee.name"]',
        address: 'input[name="payee.address.street"]',
        city: 'input[name="payee.address.city"]',
        state: 'input[name="payee.address.state"]',
        zipCode: 'input[name="payee.address.zipCode"]',
        phone: 'input[name="payee.phoneNumber"]',
        accountNumber: 'input[name="payee.accountNumber"]',
        verifyAccount: 'input[name="verifyAccount"]',
        amount: 'input[name="amount"]',
        fromAccount: 'select[name="fromAccountId"]',
        sendPaymentButton: 'input[value="Send Payment"]',
        confirmationTitle: '#rightPanel h1.title',
        confirmationMessage: '[id="rightPanel"] p',
        errorMessage: '#rightPanel .error'
    };

    openBillPayPage() {
        cy.get(this.webLocators.billPayLink)
            .should('be.visible')
            .click();

        cy.get(this.webLocators.pageTitle)
            .should('contain.text', 'Bill Payment Service');
    }

    enterPayeeDetails(payee: PayeeDetails) {
        cy.get(this.webLocators.payeeName).type(payee.name);
        cy.get(this.webLocators.address).type(payee.address);
        cy.get(this.webLocators.city).type(payee.city);
        cy.get(this.webLocators.state).type(payee.state);
        cy.get(this.webLocators.zipCode).type(payee.zipCode);
        cy.get(this.webLocators.phone).type(payee.phone);

        cy.get(this.webLocators.accountNumber)
            .type(payee.accountNumber);

        cy.get(this.webLocators.verifyAccount)
            .type(payee.accountNumber);

        cy.get(this.webLocators.amount)
            .type(String(payee.amount));
    }

    selectFromAccount(accountNumber: string) {
        cy.get(this.webLocators.fromAccount)
            .should('be.visible')
            .select(accountNumber);
    }

    submitPayment() {
        cy.get(this.webLocators.sendPaymentButton)
            .should('be.enabled')
            .click();
    }

    verifyBillPaymentPageTitle() {
        cy.get(this.webLocators.confirmationTitle)
            .should('contain.text', 'Bill Payment Service');
    }

    verifyPaymentSuccess() {
        cy.get(this.webLocators.confirmationTitle)
            .should('contain.text', 'Bill Payment Complete');

        cy.get(this.webLocators.confirmationMessage)
            .should('contain.text', 'was successful.');
    }

    verifyPaymentError() {
        cy.get(this.webLocators.errorMessage)
            .should('be.visible');
    }
}
