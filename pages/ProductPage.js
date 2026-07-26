export default class ProductPage {
  constructor(page) {
    this.page = page;

    this.backpack = page.locator("#add-to-cart-sauce-labs-backpack");
    this.removeBackpackButton = page.locator("#remove-sauce-labs-backpack");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.sortDropdown = page.locator(".product_sort_container");
    this.productTitle = page.locator(".title");
  }

  async addBackpack() {
    await this.backpack.click();
  }

  async removeBackpack() {
    await this.removeBackpackButton.click();
  }

  async sortLowToHigh() {
    await this.sortDropdown.selectOption("lohi");
  }
}
