import { faker } from "@faker-js/faker";
import CartPage from "./cart-page.cy";
import CheckOutPage02 from "./checkout-page-2.cy";

class CheckOutPage01 {
  // get checkout page url
  get checkoutUrl() {
    return cy.url();
  }

  // get checkout page1 header title
  get checkoutPage1Header() {
    return cy.get(".title");
  }

  // get first name field
  get firstName() {
    return cy.get("#first-name");
  }

  // get last name field
  get lastName() {
    return cy.get("#last-name");
  }

  // get postal code field
  get postalCode() {
    return cy.get("#postal-code");
  }

  // get continue button
  get continueButton() {
    return cy.get("#continue");
  }

  // get cancel button
  get cancelButton() {
    return cy.get("#cancel");
  }

  // get error message
  get errorMessage() {
    return cy.get('.error-message-container.error h3[data-test="error]');
  }

  // assert checkout page url
  assertCheckoutPage1Url() {
    cy.fixture("url").then((pageUrl) => {
      this.checkoutUrl.should("eq", pageUrl.checkOut1Page);
    });

    return this;
  }

  // assert checkout page header
  assertCheckout1Header() {
    this.checkoutPage1Header.should("contain", "Checkout: Your Information");

    return this;
  }

  // type a random first name
  typeFirstName() {
    this.firstName
      .should("have.attr", "placeholder", "First Name")
      .type(faker.person.firstName());

    return this;
  }

  // type a random last name
  typeLastName() {
    this.lastName
      .should("have.attr", "placeholder", "Last Name")
      .type(faker.person.lastName());

    return this;
  }

  // type a random postal code
  typePostalCode() {
    this.postalCode
      .should("have.attr", "placeholder", "Zip/Postal Code")
      .type(faker.location.zipCode());

    return this;
  }

  // click on continue button
  clickContinue() {
    this.continueButton
      .should("have.attr", "value", "Continue")
      .and("have.css", "background-color", "rgb(61, 220, 145)")
      .click();

    return new CheckOutPage02;
  }

  // click on continue without entering valid data
  invalidContinue() {
    this.continueButton.click()

    return this
  }

  // click on calcel button
  clickCancel() {
    this.cancelButton.click();

    return new CartPage();
  }

  // assert error message
  assertErrorMessage() {
    if (this.firstName === "")
      this.errorMessage
        .should("be.visible")
        .and("have.text", "Error: First Name is required");

    else if (this.lastName === "")
      this.errorMessage
        .should("be.visible")
        .and("eq", "Error: Last Name is required");

    else if (this.postalCode === "")
      this.errorMessage
        .should("be.visible")
        .and("eq", "Error: Postal Code is required");

    return this;
  }
}

export default CheckOutPage01;
