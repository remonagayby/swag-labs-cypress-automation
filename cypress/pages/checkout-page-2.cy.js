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
        this.itemsInCart.find('.cart_item').its('length').then(totalItems => {
            cy.get('@totalCartItems').then(totalCartItems => {
                cy.wrap(totalItems).should('eq', totalCartItems);
            }) 
        })

        return this
    }

    // click on finish button
    clickFinish() {
        this.finishButton
            .should('have.css', 'background-color', 'rgb(61, 220, 145)')
            .and('contain', 'Finish')
            .and('be.visible')
            .and('be.enabled')
            .click()

        return new ConfirmationPage
    }

    // click on finish button
    clickCancel() {
        this.cancelButton
            .should('contain', 'Cancel')
            .and('be.visible')
            .and('be.enabled')


        return new InventoryPage
    }

    // assert the total items prices before tax 
    assertTotalPrice() {
        this.totalPrice.its('text').then(total => {
            const totalPrice = parseFloat(total.slice(13))
            const calculatedPrice = this.calculateTotalPrice();
            expect(calculatedPrice).to.eq(totalPrice)
        })

        return this
    }

    // assert the total items price after tax
    assertTotalAfterTax() {
        this.totalAfterTax.invoke('text').then(total => {
            const totalAfterTax = parseFloat(total.slice(8))
            cy.wrap(totalAfterTax).as('totalAfterTax')
        })
        cy.get('@totalAfterTax').then(total => {
            expect(total).to.eq(this.priceAfterTax())
        })
        return this
    }

    // assert the tax amount
    assertTax() {
        this.tax.invoke('text').then(text => {
            const taxAmount = parseFloat(text.slice(6))
            expect(taxAmount).to.eq(this.calculateTax())
            cy.wrap(taxAmount).as('taxAmount')
        })

        return this
    }

    // calculate the total items price before tax
    calculateTotalPrice() {
        let totalPrice = 0
        this.totalCartItems.each(itemsText => {
            // get the item price text
            const itemPriceText = itemsText.find('.inventory_item_price').text()

            // get the item price
            const itemPrice = parseFloat(itemPriceText.slice(1))
            totalPrice += itemPrice
            
        })
        return totalPrice.toFixed(2)
    }

    // calculate total tax amount after adding 8% on the items add to the cart
    calculateTax() {
        const tax = 0.08
        let totalTax = (calculateTotalPrice() * tax).toFixed(2)
        return totalTax
    }

    // calculate total items price including tax
    priceAfterTax() {
        return calculateTax() + calculateTotalPrice()
    }


}

export default CheckOutPage02