
import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import { RegisterPage } from "../pages/RegisterPage";
import { TestDataFactory } from "../../utils/TestData";
import { faker } from "@faker-js/faker";
import { Customer } from "../interfaces/Customer";

const registerPage = new RegisterPage();


let customer: Customer;

const existingUsername = "naresh.girase";

// Background
Given("the user opens the ParaBank registration page", () => {
    registerPage.openURL();
});

// Generate customer details
Given("the user generates new customer details", () => {
    customer = TestDataFactory.generateCustomer();
});

// Successful registration
When("the user submits the registration form with matching passwords", () => {
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
});

Then("the customer registration should be successful", () => {
    registerPage.verifyRegistrationSuccess(customer.username);
});

// Password mismatch
When("the user submits the registration form with mismatched passwords", () => {
    const differentPassword = `Other@${faker.string.alphanumeric(10)}`;

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
});

Then("the password mismatch error should be displayed", () => {
    registerPage.verifyPasswordMismatchError();
});

// Duplicate username
When("the user submits the registration form with an existing username", () => {
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
});

Then("the duplicate username error should be displayed", () => {
    registerPage.verifyDuplicateUsernameError();
});

// Empty registration form
When("the user submits the empty registration form", () => {
    registerPage.clickRegister();
});

Then("the registration validation errors should be displayed", () => {
    registerPage.verifyValidationErrors();
});
