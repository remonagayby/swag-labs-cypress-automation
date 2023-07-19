class ConfirmationPage {

    // get confirmation page url
    get confirmationUrl() {
        return cy.url()
    }

    // get confirmation page header
    get confirmatioHeader() {
        return cy.get('.complete-header')
    }

    // get confirmation page text
    get pageText() {
        return cy.get('.complete-text')
    }

    // get back home button
    get backHomeButton() {
        return cy.get('#back-to-products')
    }
}

export default ConfirmationPage