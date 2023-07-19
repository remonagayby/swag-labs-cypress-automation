import ConfirmationPage from "../pages/confirmation-page.cy"
import InventoryAssertions from "./inventory-assertions.cy"

let confirmationPage = new ConfirmationPage

class ConfirmationAssertion {
    // assert confirmation page url
    assertConfirmationUrl() {
        cy.fixture('url').then(pageUrl => {
            confirmationPage
                .confirmationUrl
                .should('eq', pageUrl.confirmationPage)
        })
        return this
    }

    // assert confirmation page header
    assertConfirmationHeader() {
        confirmationPage
            .confirmatioHeader
            .should('have.text', 'Thank you for your order!')

        return this
    }

    // assert confirmation page text
    assertPageText() {
        confirmationPage
            .pageText
            .should('have.text',
                'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

        return this
    }

    // click on back home button
    clickBackHome() {
        confirmationPage
            .backHomeButton
            .should('have.css', 'background-color', 'rgb(61, 220, 145)')
            .click()

        return new InventoryAssertions
    }
}

export default ConfirmationAssertion