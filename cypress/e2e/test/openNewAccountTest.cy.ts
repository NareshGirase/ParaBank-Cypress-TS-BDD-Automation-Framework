
import { LoginPage } from '../pages/LoginPage';
import { OpenAccountPage } from '../pages/OpenAccountPage';

describe('Open New Account Tests', () => {

    const loginPage = new LoginPage();
    const openAccountPage = new OpenAccountPage();

    beforeEach(() => {
        cy.env(['username', 'password']).then(
            ({ username, password }) => {
                loginPage.openURL();
                loginPage.enterUsername(username);
                loginPage.enterPassword(password);
                loginPage.clickLoginButton();
                loginPage.verifyLoginSuccess();

                openAccountPage.openAccountPage();
                openAccountPage.verifyOpenAccountPage();
            }
        );
    });

    it('should open a checking account successfully', () => {
        openAccountPage.selectAccountType('CHECKING');
        openAccountPage.selectExistingAccount(24333);
        openAccountPage.clickOpenAccount();
        openAccountPage.verifyAccountOpened();
       
    });

    it('should open a savings account successfully', () => {
        openAccountPage.selectAccountType('SAVINGS');
        openAccountPage.selectExistingAccount(24333);
        openAccountPage.clickOpenAccount();
        openAccountPage.verifyAccountOpened();
        
    });

});
