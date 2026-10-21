
import { LoginPage } from "../pages/LoginPage";
import { BillPaymentPage } from "../pages/BillPaymentPage";
import { TestDataFactory } from "../../utils/TestData";
import { PayeeDetails } from "../interfaces/PayeeDetails";

describe('Bill Payment Service Tests', () => {

    const loginPage = new LoginPage();
    const billPaymentPage = new BillPaymentPage();

    //let payee: PayeeDetails;

    beforeEach(() => {
        cy.env(['username', 'password']).then(
            ({ username, password }) => {
                loginPage.openURL();
                loginPage.enterUsername(username);
                loginPage.enterPassword(password);
                loginPage.clickLoginButton();
                loginPage.verifyLoginSuccess();

                billPaymentPage.openBillPayPage();
                billPaymentPage.verifyBillPaymentPageTitle();

            })
    });


    // it('should display the Bill Payment Service page', () => {
    //     billPaymentPage.verifyBillPaymentPageTitle();
    // });

    it('should successfully submit a bill payment', () => {
        const payee: PayeeDetails = TestDataFactory.generatePayee();
        // Enter payee information
        billPaymentPage.enterPayeeDetails(payee);

        // Select the first available account
        cy.get('select[name="fromAccountId"]')
            .find('option')
            .not('[value=""]')
            .first()
            .then(($option) => {
                const accountId = $option.val();

                expect(accountId).to.exist;

                billPaymentPage.selectFromAccount(String(accountId));
            });

        // Submit payment
        billPaymentPage.submitPayment();

        // Verify payment confirmation
        billPaymentPage.verifyPaymentSuccess();
    });

});
