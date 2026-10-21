export class LoginPage {

    //Locators
    private weblocators = {
        usernameInput: 'input[name="username"]',
        passwordInput: 'input[name="password"]',
        loginButton: 'input[value="Log In"]',
        sucessMsg: 'div#rightPanel'
    };

    //Actions
    openURL(): void {
        cy.visit(Cypress.expose('LoginURL'));
    }
    enterUsername(username: string): void {
        cy.get(this.weblocators.usernameInput).type(username);
    }

    enterPassword(password: string): void {
        cy.get(this.weblocators.passwordInput).type(password);
    }

    clickLoginButton(): void {
        cy.get(this.weblocators.loginButton).click();
    }

    verifyLoginSuccess() {
        //cy.contains('Accounts Overview').should('be.visible');
        cy.url().should('include', 'overview.htm');
    }

    verifyLoginError() {
        cy.contains('Error').should('be.visible');
    }

    logout() {
        cy.contains('Log Out').click();
    }
}