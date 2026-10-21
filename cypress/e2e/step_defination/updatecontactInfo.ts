import {
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor";

import { UpdateContactInfoPage } from "../pages/UpdateContactInfo";
import { TestDataFactory } from "../../utils/TestData";

const updateContactInfoPage = new UpdateContactInfoPage();

let customerData = TestDataFactory.generateCustomer();

When('I navigate to the Update Contact Info page', () => {
    updateContactInfoPage.navigateToUpdateContactInfoPage();
});

When('I update the contact information with generated data', () => {
    customerData = TestDataFactory.generateCustomer();

    updateContactInfoPage.updateContactInformation(customerData)

});

When('I submit the updated contact information', () => {
    updateContactInfoPage.submitUpdatedContactInformation();
});

Then(
    'I should see the contact information update success message',
    () => {
        updateContactInfoPage.verifyContactInformationUpdateSuccess();
    }
);