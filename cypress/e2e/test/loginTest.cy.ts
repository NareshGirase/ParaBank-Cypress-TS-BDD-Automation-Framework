import { LoginPage } from "../pages/LoginPage";

const loginObj = new LoginPage();

describe('Login Test', () => {

    it('should log in with valid email and password', () => {

        cy.env(['username', 'password']).then(
            ({ username, password }) => {
                loginObj.openURL()
                loginObj.enterUsername(username)
                loginObj.enterPassword(password)
                loginObj.clickLoginButton()
                loginObj.verifyLoginSuccess()
                loginObj.logout()
            })

    })

    it('should reject login with invalid username', () => {

        cy.env(['username', 'password']).then(
            ({ username, password }) => {
                loginObj.openURL()
                loginObj.enterUsername('username')
                loginObj.enterPassword(password)
                loginObj.clickLoginButton()
                loginObj.verifyLoginError()
            })

    })

    it('should reject login with invalid password', () => {

        cy.env(['username', 'password']).then(
            ({ username, password }) => {
                loginObj.openURL()
                loginObj.enterUsername(username)
                loginObj.enterPassword('password')
                loginObj.clickLoginButton()
                loginObj.verifyLoginError()
            })
    })

    it('should reject login without entering credentials', () => {
        loginObj.openURL()
        loginObj.clickLoginButton()
        loginObj.verifyLoginError()
    })
});