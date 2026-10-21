
export class AccountOverviewPage {
    private weblocators = {
        overviewlink: 'a[href*="overview.htm"]',
        pageTitle: '#showOverview h1',
        accountTable: '#accountTable.gradient-style',
        tableHeaders: '#accountTable thead th',
        accountRows: '#accountTable tbody tr',
        accountLinks: '#accountTable tbody a',
        totalRow: '#accountTable tr',
        accountNumbers: '#accountTable tbody tr td a',
        accountBalances: '#accountTable tbody tr td:nth-child(2)',
        availableBalances: '#accountTable tbody tr td:nth-child(3)',
    };


    clickOnAccountOverview(): void {
        cy.get(this.weblocators.overviewlink).click()
    }

    // Verify Account Overview page
    verifyPageTitle() {
        cy.get(this.weblocators.pageTitle)
            .should('be.visible')
            .and('contain.text', 'Accounts Overview');
    }

    // Verify table headers
    verifyTableHeaders() {
        cy.get(this.weblocators.tableHeaders)
            .should('contain.text', 'Account')
            .and('contain.text', 'Balance')
            .and('contain.text', 'Available Amount');
    }


    // Open the account
    clickFirstAccount() {
        cy.get(this.weblocators.accountLinks)
            .first()
            .click();
    }

    //verify account numbers are diaplyed
    verifyAccountNumbersDisplayed() {
        cy.get(this.weblocators.accountNumbers)
            .should('have.length.greaterThan', 0)
            .each(($account) => {
                cy.wrap($account)
                    .should('be.visible')
                    .and('not.be.empty');
            });
    }

    //verify account balence is displayed for each account
    verifyAccountBalancesDisplayed() {
        cy.get(this.weblocators.accountBalances)
            .should('have.length.greaterThan', 0)
            .each(($balance) => {
                cy.wrap($balance)
                    .should('be.visible')
                    .and('not.be.empty');
            });
    }
    //verify available balances is diaplyed 
    verifyAvailableBalancesDisplayed() {
    cy.get(this.weblocators.accountTable)
        .should('be.visible')
        .find('tbody tr')
        .each(($row) => {
            cy.wrap($row)
                .find('td')
                .eq(2)
                .should('be.visible')
                .and('not.be.empty');
        });
}

    //verify total balance is displayed
    verifyTotalBalanceDisplayed() {
        cy.contains('#accountTable tr', 'Total').should('be.visible').within(() => {
            cy.get('td').eq(1).should('not.be.empty');
        });
    }

    //verify minimum balance is available
    verifyMinimumBalance(minBalance: number = 100) {
        cy.get(this.weblocators.accountBalances).each(($balance) => {
            const balanceText = $balance.text().trim();
            const balance = Number(balanceText.replace(/[$,]/g, ''));

            expect(balance, 'Account balance').to.be.at.least(minBalance);
        });
    }

}
