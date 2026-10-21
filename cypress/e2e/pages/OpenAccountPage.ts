
export class OpenAccountPage {

    private webLocators = {
        openAccountLink: 'a[href="openaccount.htm"]',
        accountType: '#type',
        fromAccount: '#fromAccountId',
        openAccountButton: 'input[value="Open New Account"]',
        successMessage: '#openAccountResult h1.title',
        newAccountNumber: '#newAccountId',
        accountTypeLabel: '#accountType'
    };

    //open account page
    openAccountPage() {
        cy.contains('a', 'Open New Account').click();
    }

    //verify headers of account table
    verifyOpenAccountPage() {
        cy.contains('h1', 'Open New Account').should('be.visible');
        cy.get(this.webLocators.accountType).should('be.visible');
        cy.get(this.webLocators.fromAccount).should('be.visible');
        cy.get(this.webLocators.openAccountButton).should('be.visible');
    }

    //select account type
    selectAccountType(type: 'CHECKING' | 'SAVINGS') {
        cy.get(this.webLocators.accountType).select(type);
    }

    selectExistingAccount(accountNumber: number) {
        cy.get(this.webLocators.fromAccount)
            .should('be.visible')
            .find('option')
            .not('[value=""]')
            .contains(accountNumber)
            .then((option) => {
                accountNumber = Number(option.val());
                expect(accountNumber).to.exist;
                cy.get(this.webLocators.fromAccount)
                    .select(String(accountNumber));
            });
    }


    clickOpenAccount() {
        cy.get(this.webLocators.openAccountButton).click();
    }

    verifyAccountOpened() {
        cy.get(this.webLocators.successMessage)
            .should('be.visible')
            .and('contain.text', 'Account Opened!');

        cy.get(this.webLocators.newAccountNumber)
            .should('be.visible')
            .and('not.be.empty')
            .invoke('text')
            .then((accountNumber) => {
                cy.wrap(accountNumber.trim()).as('newAccountNumber');
            });
    }

}
