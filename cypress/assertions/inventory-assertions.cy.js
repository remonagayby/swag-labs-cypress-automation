import InventoryPage from "../pages/inventory-page.cy";
import CartAssertions from "./cart-assertions.cy";

let inventoryPage = new InventoryPage

class InventoryAssertions {
        // assert inventory page url
        assertInventoryPageUrl() {
            cy.fixture("url").then((pageUrl) => {
                inventoryPage.inventoryPageUrl.should("eq", pageUrl.inventoryPage);
            });
    
            return this;
        }
    
        // select random item
        selectRandomItem() {
            // get all the total number of items
            inventoryPage.items
                .find(".inventory_item")
                .its("length")
                .then((numItems) => {
                    // generate a random index between 0 and numItems - 1
                    const randomIndex = Math.floor(Math.random() * numItems);
    
                    // find the add-to-cart button for the random item and click it
                    inventoryPage.addToCartButton.eq(randomIndex).click();
    
                    // assert that Add to cart button change to Remove button
                    inventoryPage.removeButton.should("have.text", "Remove");
                })
                .as("selectedItem");
    
            return this;
        }
    
        // select all items
        selectAllItems() {
            inventoryPage.addToCartButton.each((button) => {
                // wrap the add to cart button to cypress object
                cy.wrap(button).click();
    
                // assert that Add to cart button change to Remove button
                inventoryPage.removeButton.should("have.text", "Remove");
            });
    
            return this;
        }
    
        // remove the selected item added to the cart
        removeItem() {
            inventoryPage.removeButton
                .should("be.visible")
                .and("be.enabled")
                .click();
            return this;
        }
    
        // click on the cart page
        clickCartButton() {
            inventoryPage.shoppingCart.should("be.visible").click();
    
            return new CartAssertions();
        }
}

export default InventoryAssertions