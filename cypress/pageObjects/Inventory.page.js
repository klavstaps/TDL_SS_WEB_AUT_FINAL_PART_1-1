import BasePage from "./Base.page";

class InventoryPage extends BasePage {
  static get url() {
    return "/inventory";
  }

  static get inventoryItem() {
    return cy.get(".inventory_item")
  }

  static get sortButton() {
    return cy.get("select.product_sort_container")
  }

  static get item2() {
    return cy.get("#item_1_title_link")
  }

  static get item0() {
    return cy.get("#item_0_title_link")
  }

  static get burgerButton() {
    return cy.get("#react-burger-menu-btn")
  }

  static get resetButton() {
    return cy.get("#reset_sidebar_link")
  }

  static get item3() {
    return cy.get("#item_3_title_link")
  }

}

export default InventoryPage;