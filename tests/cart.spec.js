import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import { users } from "../utils/testData";

test.describe("Cart Module", () => {
  let loginPage;
  let productPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);

    // Open application
    await loginPage.open();

    // Login
    await loginPage.login(users.validUser.username, users.validUser.password);

    // Add Backpack
    await productPage.addBackpack();

    // Open Cart
    await cartPage.openCart();
  });

  test("TC-013 Verify Cart page opens", async ({ page }) => {
    await expect(page).toHaveURL(/cart/);

    await expect(page.locator(".title")).toHaveText("Your Cart");
  });

  test("TC-014 Verify added product is displayed", async ({ page }) => {
    await expect(page.locator(".inventory_item_name")).toHaveText(
      "Sauce Labs Backpack",
    );
  });

  test("TC-015 Verify Remove button removes product", async ({ page }) => {
    await cartPage.removeProduct();

    await expect(page.locator(".cart_item")).toHaveCount(0);
  });

  test("TC-016 Verify Continue Shopping button", async ({ page }) => {
    await cartPage.continueShopping();

    await expect(page).toHaveURL(/inventory/);
  });

  test("TC-017 Verify Checkout button", async ({ page }) => {
    await cartPage.checkout();

    await expect(page).toHaveURL(/checkout-step-one/);
  });
});
