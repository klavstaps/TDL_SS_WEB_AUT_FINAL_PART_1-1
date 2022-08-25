import BasePage from "./Base.page";

class LoginPage extends BasePage {
  static get url() {
    return "/";
  }

  static get xxx() {
    return cy.get("x[y=z]");
  }

  static get username() {
    return cy.get("input#user-name")
  }

  static get password() {
    return cy.get("input#password")
  }

  static get loginButton() {
    return cy.get("input#login-button")
  }

  static get errorMsg() {
    return cy.get("h3[data-test='error']")
  }

  static get inventoryList() {
    return cy.get(".inventory_list")
  }

  static get sortButton() {
    return cy.get(".product_sort_container")
  }


  
}

export default LoginPage;
