import BasePage from "./Base.page";

class InventoryItemPage extends BasePage {
  static get url() {
    return "/inventory-item";
  }

  static get AddButton() {
    return cy.get(".btn.btn_primary.btn_small.btn_inventory")
  }

  static get shoppingCartBage() {
    return cy.get(".shopping_cart_badge")
  }

  static get backButton() {
    return cy.get("#back-to-products")
  }

  static get removeButton() {
    return cy.get(".btn.btn_secondary.btn_small.btn_inventory")
  }

}

export default InventoryItemPage;