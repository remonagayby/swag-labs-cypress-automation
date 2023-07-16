import CartPage from "./cart-page.cy";

class InventoryPage {
    // get the inventory page url
    get inventoryPageUrl() {
        return cy.url();
    }

    // get all the inventory products
    get items() {
        return cy.get(".inventory_list");
    }

    // get the shopping cart link
    get shoppingCart() {
        return cy.get(".shopping_cart_link");
    }

    // get the add to cart button
    get addToCartButton() {
        return cy.get(".inventory_item button.btn_primary");
    }

    //get the remove item button
    get removeButton() {
        return cy.contains("Remove");
    }

    // assert inventory page url
    assertInventoryPageUrl() {
        cy.fixture("url").then((pageUrl) => {
            this.inventoryPageUrl.should("eq", pageUrl.inventoryPage);
        });

        return this;
    }

    // select random item
    selectRandomItem() {
        // get all the total number of items
        this.items
            .find(".inventory_item")
            .its("length")
            .then((numItems) => {
                // generate a random index between 0 and numItems - 1
                const randomIndex = Math.floor(Math.random() * numItems);

                // find the add-to-cart button for the random item and click it
                this.addToCartButton.eq(randomIndex).click();

                // assert that Add to cart button change to Remove button
                this.removeButton.should("have.text", "Remove");
            })
            .as("selectedItem");

        return this;
    }

    // select all items
    selectAllItems() {
        this.addToCartButton.each((button) => {
            // wrap the add to cart button to cypress object
            cy.wrap(button).click();

            // assert that Add to cart button change to Remove button
            this.removeButton.should("have.text", "Remove");
        });

        return this;
    }

    // remove the selected item added to the cart
    removeItem() {
        this.removeButton.should("be.visible").and("be.enabled").click();
        return this;
    }

    // click on the cart page
    clickCartButton() {
        this.shoppingCart.should("be.visible").click();

        return new CartPage();
    }
}

export default InventoryPage;
