import { TestDataFactory } from "../../utils/TestData"

export class RegisterPage {
    private weblocators = {
        registerLink: 'a[href*="register.htm"]',
        firstName: 'input[id="customer.firstName"]',
        lastName: 'input[id="customer.lastName"]',
        address: 'input[id="customer.address.street"]',
        city: 'input[id="customer.address.city"]',
        state: 'input[id="customer.address.state"]',
        zipCode: 'input[id="customer.address.zipCode"]',
        phone: 'input[id="customer.phoneNumber"]',
        ssn: 'input[id="customer.ssn"]',
        username: 'input[id="customer.username"]',
        password: 'input[id="customer.password"]',
        confirmPassword: 'input[id="repeatedPassword"]',
        registerButton: 'input[value="Register"]',
        pageTitle: 'h1.title',
        successMessage: '#rightPanel p',
        errorMessage: '#rightPanel.error',
        validationErrors: '#rightPanel .error',
        passwordMismatchError: 'span[id="repeatedPassword.errors"]',
        duplicateUsernameError: 'span[id="customer.username.errors"]',

    }

    //private fakeData = TestDataFactory.generateCustomer();


    openURL(): void {
        cy.visit(Cypress.expose('RegisterURL'));
    }

    clickonregisterlink():void{
        cy.get(this.weblocators.registerLink).click()
    }

    enterFirstName(firstName: string) {
        cy.get(this.weblocators.firstName).type(firstName);
    }

    enterLastName(lastName: string) {
        cy.get(this.weblocators.lastName).type(lastName);
    }

    enterAddress(address: string) {
        cy.get(this.weblocators.address).type(address);
    }

    enterCity(city: string) {
        cy.get(this.weblocators.city).type(city);
    }

    enterState(state: string) {
        cy.get(this.weblocators.state).type(state);
    }

    enterZipCode(zipCode: string) {
        cy.get(this.weblocators.zipCode).type(zipCode);
    }

    enterPhone(phone: string) {
        cy.get(this.weblocators.phone).type(phone);
    }

    // Enter SSN
    enterSSN(ssn: string) {
        cy.get(this.weblocators.ssn).type(ssn);
    }

    // Enter username
    enterUsername(username: string) {
        cy.get(this.weblocators.username).type(username);
    }

    // Enter password
    enterPassword(password: string) {
        cy.get(this.weblocators.password).type(password);
    }

    // Confirm password
    enterConfirmPassword(password: string) {
        cy.get(this.weblocators.confirmPassword).type(password);
    }

    // Click Register button
    clickRegister() {
        cy.get(this.weblocators.registerButton).click();
    }

    verifyRegistrationSuccess(username: string): void {

        cy.get(this.weblocators.pageTitle).should('contain.text', 'Welcome');

        cy.get(this.weblocators.successMessage).should('contain.text', 'Your account was created successfully. You are now logged in.');
    }

    // Assertion: registration error
    verifyRegistrationError(expectedMessage: string): void {
        cy.get(this.weblocators.errorMessage).should('be.visible').and('contain.text', expectedMessage);
    }

    // Assertion: validation errors are displayed
    verifyValidationErrors(): void {
        cy.get(this.weblocators.validationErrors).should('be.visible');
    }

    verifyPasswordMismatchError(): void {

        //cy.get(this.weblocators.password).should('have.value', );

        //cy.get(this.weblocators.confirmPassword).should('have.value','password');

        cy.get(this.weblocators.passwordMismatchError).should('be.visible').and('contain.text', 'Passwords did not match.');
    }

    verifyDuplicateUsernameError(): void {

        cy.get(this.weblocators.duplicateUsernameError).should('be.visible').and('contain.text', 'This username already exists.');
    }

}