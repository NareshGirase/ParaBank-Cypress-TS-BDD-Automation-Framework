
import { AccountOverviewPage } from '../pages/AccountOverviewPage';
import { LoginPage } from '../pages/LoginPage';

describe('Account Overview Test', () => {
    const loginPage = new LoginPage();
    const accountOverviewPage = new AccountOverviewPage();

    beforeEach(() => {
        cy.env(['username', 'password']).then(
            ({ username, password }) => {
                loginPage.openURL();
                loginPage.enterUsername(username);
                loginPage.enterPassword(password);
                loginPage.clickLoginButton();
                loginPage.verifyLoginSuccess();

                // Navigate to Account Overview
                accountOverviewPage.clickOnAccountOverview();
            })
        });

        it('should display page title', () => {
            //accountOverviewPage.clickOnAccountOverview();
            accountOverviewPage.verifyPageTitle();
        })

        it('should display account headers',()=>{
            accountOverviewPage.verifyTableHeaders()
        })

        it('should display account numbers', () => {
            //accountOverviewPage.clickOnAccountOverview();
            accountOverviewPage.verifyAccountNumbersDisplayed();
        })
        it('should click and open the account',()=>{
            accountOverviewPage.clickFirstAccount('1234')
        })

        it('should display account balances', () => {
            //accountOverviewPage.clickOnAccountOverview();
            accountOverviewPage.verifyAccountBalancesDisplayed();
        })

        it('should display available balances', () => {
            //accountOverviewPage.clickOnAccountOverview();
            accountOverviewPage.verifyAvailableBalancesDisplayed();
        })

        it('should display the total balance', () => {
            //accountOverviewPage.clickOnAccountOverview();
            accountOverviewPage.verifyTotalBalanceDisplayed();
        })

        it('should verify each account has a minimum balance of $100', () => {
            //accountOverviewPage.clickOnAccountOverview();
            accountOverviewPage.verifyMinimumBalance(100);
        })

    });

