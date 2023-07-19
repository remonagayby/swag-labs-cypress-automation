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
}

export default CheckOutPage01;
