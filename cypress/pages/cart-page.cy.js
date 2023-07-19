class CartPage {
    // get cart page url
    get cartPageUrl() {
        return cy.url()
    }

    // get cart page header
    get cartPageHeader() {
        return cy.get('.title')
    }

    // get remove button
    get removeButton() {
        return cy.contains('Remove')
    }

    // get checkout button
    get checkoutButton() {
        return cy.get('#checkout')
    }

    // get items added to the cart
    get itemsInCart() {
        return cy.get('.cart_list')
    }

    get totalCartItems() {
        return this.itemsInCart
    }
}

export default CartPage