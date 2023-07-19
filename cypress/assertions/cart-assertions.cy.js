import CartPage from "../pages/cart-page.cy"
import CheckoutAssertion01 from "./checkout-assertions-1.cy"

let cartPage = new CartPage

class CartAssertions {
    // assert cart page url
    assertCartPageUrl() {
        cy.fixture('url').then(pageUrl => {
            cartPage
            .cartPageUrl
            .should('eq', pageUrl.cartPage)
        })
        return this
    }

    // assert cart page header
    assertCartPageHeader() {
        cartPage
            .cartPageHeader
            .should('contain', 'Your Cart')

        return this
    }

    // click on remove button
    clickRemoveButton() {
        cartPage.removeButton
            .should('have.css', 'color', 'rgb(226, 35, 26)')
            .and('be.visible')
            .and('be.enabled')
            .click()

        return this
    }

    // click on checkout button
    clickCheckout() {
        cartPage.checkoutButton
            .should('have.attr', 'name', 'checkout')
            .and('have.css', 'background-color', 'rgb(61, 220, 145)')
            .and('be.visible')
            .and('be.enabled')
            .click()

        return new CheckoutAssertion01
    }

    // assert items added to the cart
    totalCartItems() {
        cartPage
            .itemsInCart
            .find('.cart_item')
            .its('length')
            .as('totalCartItems')
        return this
    }
}

export default CartAssertions