import { Customer } from "../interfaces/Customer";

export class UpdateContactInfoPage {

    private webLocators = {
        updateContactInfoLink: 'a[href*="updateprofile.htm"]',

        firstName: 'input[name="customer.firstName"]',
        lastName: 'input[name="customer.lastName"]',
        address: 'input[name="customer.address.street"]',
        city: 'input[name="customer.address.city"]',
        state: 'input[name="customer.address.state"]',
        zipCode: 'input[name="customer.address.zipCode"]',
        phone: 'input[name="customer.phoneNumber"]',

        updateButton: 'input[value="Update Profile"]',
        successMessage: '#rightPanel p'
    };

    // Navigate to Update Contact Info page
    navigateToUpdateContactInfoPage(): void {
        cy.get(this.webLocators.updateContactInfoLink)
            .should('be.visible')
            .click();

        cy.get(this.webLocators.firstName)
            .should('be.visible');
    }

    // Update contact information
    updateContactInformation(customer: Customer):void {

        cy.get(this.webLocators.firstName)
            .clear()
            .type(customer.firstName);

        cy.get(this.webLocators.lastName)
            .clear()
            .type(customer.lastName);

        cy.get(this.webLocators.address)
            .clear()
            .type(customer.address);

        cy.get(this.webLocators.city)
            .clear()
            .type(customer.city);

        cy.get(this.webLocators.state)
            .clear()
            .type(customer.state);

        cy.get(this.webLocators.zipCode)
            .clear()
            .type(customer.zipCode);

        cy.get(this.webLocators.phone)
            .clear()
            .type(customer.phone);
    }

    // Submit the updated details
    submitUpdatedContactInformation(): void {
        cy.get(this.webLocators.updateButton)
            .should('be.visible')
            .click();
    }

    // Verify successful update
    verifyContactInformationUpdateSuccess(): void {
        cy.get(this.webLocators.successMessage)
            .should('be.visible')
            .and(
                'contain.text',
                'Your updated address has been added to the system.'
            );
    }
}