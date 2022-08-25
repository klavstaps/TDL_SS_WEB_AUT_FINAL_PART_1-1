import BasePage from "./Base.page";

class CartPage extends BasePage {
  static get url() {
    return "/cart";
  }

  static get chekoutButton() {
    return cy.get(".checkout_button")
  }

}

export default CartPage;