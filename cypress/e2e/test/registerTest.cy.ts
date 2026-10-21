import { RegisterPage } from '../pages/RegisterPage';
import { TestDataFactory } from '../../utils/TestData';
import { faker } from '@faker-js/faker';



describe('Registration Tests', () => {

    const registerPage = new RegisterPage();

    beforeEach(() => {
        registerPage.openURL();
    });

    it('should register a new customer successfully', () => {

        const customer = TestDataFactory.generateCustomer();

        registerPage.clickonregisterlink();
        registerPage.enterFirstName(customer.firstName);
        registerPage.enterLastName(customer.lastName);
        registerPage.enterAddress(customer.address);
        registerPage.enterCity(customer.city);
        registerPage.enterState(customer.state);
        registerPage.enterZipCode(customer.zipCode);
        registerPage.enterPhone(customer.phone);
        registerPage.enterSSN(customer.ssn);
        registerPage.enterUsername(customer.username);
        registerPage.enterPassword(customer.password);
        registerPage.enterConfirmPassword(customer.password);
        registerPage.clickRegister();
        registerPage.verifyRegistrationSuccess(customer.username);

    });

    it('should display an error when passwords do not match', () => {

        const customer = TestDataFactory.generateCustomer();
        const differentPassword = `Other@${faker.string.alphanumeric(10)}`;

        registerPage.clickonregisterlink();
        registerPage.enterFirstName(customer.firstName);
        registerPage.enterLastName(customer.lastName);
        registerPage.enterAddress(customer.address);
        registerPage.enterCity(customer.city);
        registerPage.enterState(customer.state);
        registerPage.enterZipCode(customer.zipCode);
        registerPage.enterPhone(customer.phone);
        registerPage.enterSSN(customer.ssn);
        registerPage.enterUsername(customer.username);
        registerPage.enterPassword(customer.password);
        registerPage.enterConfirmPassword(differentPassword);
        registerPage.clickRegister();
        registerPage.verifyPasswordMismatchError();
    });

    it('should display an error for a duplicate username', () => {

        const customer = TestDataFactory.generateCustomer();
        // Replace this with a existing username.
        const existingUsername = 'naresh.girase';

        registerPage.clickonregisterlink();
        registerPage.enterFirstName(customer.firstName);
        registerPage.enterLastName(customer.lastName);
        registerPage.enterAddress(customer.address);
        registerPage.enterCity(customer.city);
        registerPage.enterState(customer.state);
        registerPage.enterZipCode(customer.zipCode);
        registerPage.enterPhone(customer.phone);
        registerPage.enterSSN(customer.ssn);
        registerPage.enterUsername(existingUsername);
        registerPage.enterPassword(customer.password);
        registerPage.enterConfirmPassword(customer.password);
        registerPage.clickRegister();
        registerPage.verifyDuplicateUsernameError();
    });

    it.only('should display validation errors when required fields are empty', () => {

        registerPage.clickRegister();
        registerPage.verifyValidationErrors();
    });

});