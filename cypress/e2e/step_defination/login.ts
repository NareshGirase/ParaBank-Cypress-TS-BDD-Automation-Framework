
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { LoginPage } from "../pages/LoginPage";

const loginObj = new LoginPage();

Given("the user opens the ParaBank login page", () => {
    loginObj.openURL();
});

When("the user logs in with valid credentials", () => {
    cy.env(["username", "password"]).then(
        ({ username, password }) => {
            loginObj.enterUsername(username);
            loginObj.enterPassword(password);
            loginObj.clickLoginButton();
        }
    );
});

When("the user logs in with an invalid username", () => {
    cy.env(["password"]).then(({ password }) => {
        loginObj.enterUsername("invalid-user");
        loginObj.enterPassword(password);
        loginObj.clickLoginButton();
    });
});

When("the user logs in with an invalid password", () => {
    cy.env(["username"]).then(({ username }) => {
        loginObj.enterUsername(username);
        loginObj.enterPassword("invalid-password");
        loginObj.clickLoginButton();
    });
});

When("the user submits the login form without credentials", () => {
    loginObj.clickLoginButton();
});

Then("the account overview page should be displayed", () => {
    loginObj.verifyLoginSuccess();
});

Then("a login error should be displayed", () => {
    loginObj.verifyLoginError();
});

Then("the user logs out", () => {
    loginObj.logout();
});
