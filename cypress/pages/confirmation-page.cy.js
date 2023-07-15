import InventoryPage from "./inventory-page.cy"

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

    // assert confirmation page url
    assertConfirmationUrl() {
        cy.fixture('url').then(pageUrl => {
            this.confirmationUrl.should('eq', pageUrl.confirmationPage)
        })
        return this
    }

    // assert confirmation page header
    assertConfirmationHeader() {
        this.confirmatioHeader
            .should('have.text', 'Thank you for your order!')
        
        return this
    }

    // assert confirmation page text
    assertPageText() {
        this.pageText
            .should('have.text', 
                    'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        
        return this
    }

    // click on back home button
    clickBackHome() {
        this.backHomeButton
            .should('have.css', 'background-color', 'rgb(61, 220, 145)').click()
        
        return new InventoryPage
    }
}

export default ConfirmationPage