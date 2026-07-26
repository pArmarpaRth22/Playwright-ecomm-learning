import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import { users, checkout } from "../utils/testData";

test.describe("Checkout Module", () => {
  let loginPage;
  let productPage;
  let cartPage;
  let checkoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    // Open application
    await loginPage.open();

    // Login
    await loginPage.login(users.validUser.username, users.validUser.password);

    // Add Product
    await productPage.addBackpack();

    // Open Cart
    await cartPage.openCart();

    // Go to Checkout
    await cartPage.checkout();
  });

  test("TC-018 Verify checkout with valid information", async ({ page }) => {
    await checkoutPage.fillInformation(
      checkout.firstName,
      checkout.lastName,
      checkout.postalCode,
    );

    await checkoutPage.continue();

    await expect(page).toHaveURL(/checkout-step-two/);

    await expect(page.locator(".title")).toHaveText("Checkout: Overview");
  });

  test("TC-019 Verify First Name is mandatory", async () => {
    await checkoutPage.fillInformation(
      "",
      checkout.lastName,
      checkout.postalCode,
    );

    await checkoutPage.continue();

    await expect(checkoutPage.errorMessage).toContainText(
      "First Name is required",
    );
  });

  test("TC-020 Verify Last Name is mandatory", async () => {
    await checkoutPage.fillInformation(
      checkout.firstName,
      "",
      checkout.postalCode,
    );

    await checkoutPage.continue();

    await expect(checkoutPage.errorMessage).toContainText(
      "Last Name is required",
    );
  });

  test("TC-021 Verify Postal Code is mandatory", async () => {
    await checkoutPage.fillInformation(
      checkout.firstName,
      checkout.lastName,
      "",
    );

    await checkoutPage.continue();

    await expect(checkoutPage.errorMessage).toContainText(
      "Postal Code is required",
    );
  });

  test("TC-022 Verify successful order completion", async ({ page }) => {
    await checkoutPage.fillInformation(
      checkout.firstName,
      checkout.lastName,
      checkout.postalCode,
    );

    await checkoutPage.continue();

    await checkoutPage.finish();

    await expect(page.locator(".complete-header")).toHaveText(
      "Thank you for your order!",
    );
  });
});
