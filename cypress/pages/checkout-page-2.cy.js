class CheckOutPage02 {

    // get checkout page 2 url
    get checkoutUrl() {
        return cy.url()
    }

    // get checkout page 2 header
    get pageHeader() {
        return cy.get('.title')
    }

    // get items added to the cart
    get itemsInCart() {
        return cy.get('.cart_list')
    }

    // get finish button
    get finishButton() {
        return cy.get('#finish')
    }

    // get cancel button
    get cancelButton() {
        return cy.get('#cancel')
    }

    // get total items prices before tax
    get totalPrice() {
        return cy.get('.summary_subtotal_label')
    }

    // get total items prices after taxes
    get totalAfterTax() {
        return cy.get('.summary_total_label')
    }

    // get tax amount
    get tax() {
        cy.get('.summary_tax_label')
    }
}

export default CheckOutPage02