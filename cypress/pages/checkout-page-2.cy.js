import ConfirmationPage from "./confirmation-page.cy"
import InventoryPage from "./inventory-page.cy"

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
    
    // get items inside the checkout page 2
    get totalCartItems() {
        return this.itemsInCart.find('.cart_item').its('length')
    }

    // get finish button
    get finishButton() {
        return cy.get('#finish')
    }

    // get cancel button
    get cancelButton() {
        return cy.get('#cancel')
    }

    // assert cart page url
    assertCheckoutPage2Url() {
        cy.fixture('url').then(pageUrl => {
            this.checkoutUrl.should('eq', pageUrl.checkOut2Page)
        })
        return this
    } 

    // assert checkout page 2 header
    assertCheckout2Header() {
        this.pageHeader.should("contain", "Checkout: Overview");

    return this;
  }

    // assert items exist into the checkout page 2
    assertItemsInCheckout() {
        this.totalCartItems.then(totalItems => {
            cy.wrap(totalItems).should('eq', 6);
          })

        return this
    }

    // click on finish button
    clickFinish() {
        this.finishButton
            .should('have.css', 'background-color', 'rgb(61, 220, 145)')
            .and('contain', 'Finish')
            .click()

        return new ConfirmationPage
    }

    // click on finish button
    clickCancel() {
        this.cancelButton
            .should('contain', 'Cancel')
        
        return new InventoryPage
    }


}

export default CheckOutPage02