export default class CartPage {
  constructor(page) {
    this.page = page;

    this.cartIcon = page.locator(".shopping_cart_link");

    this.checkoutButton = page.getByRole("button", {
      name: "Checkout",
    });

    this.continueShoppingButton = page.getByRole("button", {
      name: "Continue Shopping",
    });

    this.removeButton = page.locator("#remove-sauce-labs-backpack");
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async removeProduct() {
    await this.removeButton.click();
  }
}
