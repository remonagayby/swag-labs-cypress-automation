import CheckOutPage02 from "../pages/checkout-page-2.cy";
import ConfirmationAssertion from "./confirmation-assertions.cy";

let checkoutPage02 = new CheckOutPage02

class CheckoutAssertion2 {
    // assert cart page url
    assertCheckoutPage2Url() {
        cy.fixture('url').then(pageUrl => {
            checkoutPage02.checkoutUrl.should('eq', pageUrl.checkOut2Page)
        })
        return this
    }

    // assert checkout page 2 header
    assertCheckout2Header() {
        checkoutPage02.pageHeader.should("contain", "Checkout: Overview");

        return this;
    }

    // assert items exist into the checkout page 2
    assertItemsInCheckout() {
        checkoutPage02.itemsInCart.find('.cart_item').its('length').then(totalItems => {
            cy.get('@totalCartItems').then(totalCartItems => {
                cy.wrap(totalItems).should('eq', totalCartItems);
            })
        })

        return this
    }

    // click on finish button
    clickFinish() {
        checkoutPage02.finishButton
            .should('have.css', 'background-color', 'rgb(61, 220, 145)')
            .and('contain', 'Finish')
            .and('be.visible')
            .and('be.enabled')
            .click()

        return new ConfirmationAssertion
    }

    // click on finish button
    clickCancel() {
        checkoutPage02.cancelButton
            .should('contain', 'Cancel')
            .and('be.visible')
            .and('be.enabled')


        return new InventoryPage
    }

    // assert the total items prices before tax 
    assertTotalPrice() {
        checkoutPage02.totalPrice.its('text').then(total => {
            const totalPrice = parseFloat(total.slice(13))
            const calculatedPrice = this.calculateTotalPrice();
            expect(calculatedPrice).to.eq(totalPrice)
        })

        return this
    }

    // assert the total items price after tax
    assertTotalAfterTax() {
        checkoutPage02.totalAfterTax.invoke('text').then(total => {
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
        checkoutPage02.tax.invoke('text').then(text => {
            const taxAmount = parseFloat(text.slice(6))
            expect(taxAmount).to.eq(this.calculateTax())
            cy.wrap(taxAmount).as('taxAmount')
        })

        return this
    }

    // calculate the total items price before tax
    calculateTotalPrice() {
        let totalPrice = 0
        checkoutPage02.itemsInCart.find('.cart_item').each(itemsText => {
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
export default CheckoutAssertion2