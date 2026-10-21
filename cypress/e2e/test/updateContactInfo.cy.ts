import { UpdateContactInfoPage } from "../pages/UpdateContactInfo";
import { TestDataFactory } from "../../utils/TestData";
import { LoginPage } from "../pages/LoginPage";

describe("Update Contact Information", () => {

    const updateContactInfoPage = new UpdateContactInfoPage();
    const loginPage = new LoginPage()

     beforeEach(() => {
        cy.env(['username', 'password']).then(
            ({ username, password }) => {
                loginPage.openURL();
                loginPage.enterUsername(username);
                loginPage.enterPassword(password);
                loginPage.clickLoginButton();
                loginPage.verifyLoginSuccess();

                // Navigate to update info page
                updateContactInfoPage.navigateToUpdateContactInfoPage();;
            })
        });

    it("should update customer contact information successfully", () => {

        const customerData = TestDataFactory.generateCustomer();

        // // Login using your existing login page
        // cy.visit("http://parabank.parasoft.com/parabank/index.htm");

        // // Replace these credentials with your valid test credentials
        // cy.get('input[name="username"]').type("your_username");
        // cy.get('input[name="password"]').type("your_password");
        // cy.get('input[value="Log In"]').click();

        // Navigate to Update Contact Info
        updateContactInfoPage.navigateToUpdateContactInfoPage();

        // Update contact details using generated data
        updateContactInfoPage.updateContactInformation(customerData);

        // Submit updated information
        updateContactInfoPage.submitUpdatedContactInformation();

        // Verify successful update
        updateContactInfoPage.verifyContactInformationUpdateSuccess();

    });

});