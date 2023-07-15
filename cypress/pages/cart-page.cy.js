import CheckOutPage01 from "./checkout-page-1.cy"

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
        return this.itemsInCart.find('.cart_item').its('length')
    }

    // assert cart page url
    assertCartPageUrl() {
        cy.fixture('url').then(pageUrl => {
            this.cartPageUrl.should('eq', pageUrl.cartPage)
        })
        return this
    } 

    // assert cart page header
    assertCartPageHeader() {
        this.cartPageHeader.should('contain', 'Your Cart')

        return this
    }

    // click on remove button
    clickRemoveButton() {
        this.removeButton
            .should('have.css', 'color', 'rgb(226, 35, 26)')
            .click()

        return this
    }

    // click on checkout button
    clickCheckout() {
        this.checkoutButton
            .should('have.attr', 'name', 'checkout')
            .and('have.css', 'background-color', 'rgb(61, 220, 145)')
            .click()
        
        return new CheckOutPage01
    }

    // assert items added to the cart
    assertItemsInCart() {
        this.totalCartItems.then(totalItems => {
            cy.wrap(totalItems).should('eq', totalItems).as('itemsInsideCart');
          })

        return this
    }

}

export default CartPage