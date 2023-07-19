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
}

export default InventoryPage;
