import CheckOutPage01 from "../pages/checkout-page-1.cy"
import CartAssertions from "./cart-assertions.cy";
import CheckoutAssertion2 from "./checkout-assertions-2.cy";
import { faker } from "@faker-js/faker";


let checkoutPage01 = new CheckOutPage01

class CheckoutAssertion01 {
    // assert checkout page url
    assertCheckoutPage1Url() {
        cy.fixture("url").then((pageUrl) => {
            checkoutPage01.checkoutUrl.should("eq", pageUrl.checkOut1Page);
        });

        return this;
    }

    // assert checkout page header
    assertCheckout1Header() {
        checkoutPage01.checkoutPage1Header.should("contain", "Checkout: Your Information");

        return this;
    }

    // type a random first name
    typeFirstName() {
        checkoutPage01.firstName
            .should("have.attr", "placeholder", "First Name")
            .type(faker.person.firstName());

        return this;
    }

    // type a random last name
    typeLastName() {
        checkoutPage01.lastName
            .should("have.attr", "placeholder", "Last Name")
            .type(faker.person.lastName());

        return this;
    }

    // type a random postal code
    typePostalCode() {
        checkoutPage01.postalCode
            .should("have.attr", "placeholder", "Zip/Postal Code")
            .type(faker.location.zipCode());

        return this;
    }

    // click on continue button
    clickContinue() {
        checkoutPage01.continueButton
            .should("have.attr", "value", "Continue")
            .and("have.css", "background-color", "rgb(61, 220, 145)")
            .click();

        return new CheckoutAssertion2;
    }

    // click on continue without entering valid data
    invalidContinue() {
        checkoutPage01.continueButton.click()

        return this
    }

    // click on calcel button
    clickCancel() {
        checkoutPage01.cancelButton.click();

        return new CartAssertions;
    }

    // assert error message
    assertErrorMessage() {
        if (checkoutPage01.firstName === "")
            checkoutPage01.errorMessage
                .should("be.visible")
                .and("have.text", "Error: First Name is required");

        else if (checkoutPage01.lastName === "")
            checkoutPage01.errorMessage
                .should("be.visible")
                .and("eq", "Error: Last Name is required");

        else if (checkoutPage01.postalCode === "")
            checkoutPage01.errorMessage
                .should("be.visible")
                .and("eq", "Error: Postal Code is required");

        return this;
    }
}
export default CheckoutAssertion01