import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import { users } from "../utils/testData";

test.describe("Products Module", () => {
  let loginPage;
  let productPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);

    // Open application
    await loginPage.open();

    // Login
    await loginPage.login(users.validUser.username, users.validUser.password);

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);
  });

  test("TC-007 Verify Products page loads successfully", async () => {
    await expect(productPage.productTitle).toHaveText("Products");
  });

  test("TC-008 Verify user can add product to cart", async () => {
    await productPage.addBackpack();

    await expect(productPage.cartBadge).toHaveText("1");
  });

  test("TC-009 Verify Remove button after adding product", async () => {
    await productPage.addBackpack();

    await expect(productPage.removeBackpackButton).toBeVisible();
  });

  test("TC-010 Verify removing product updates cart badge", async () => {
    await productPage.addBackpack();

    await productPage.removeBackpack();

    await expect(productPage.cartBadge).toHaveCount(0);
  });

  test("TC-011 Verify sorting by Price (Low to High)", async ({ page }) => {
    await productPage.sortLowToHigh();

    await expect(page.locator(".active_option")).toHaveText(
      "Price (low to high)",
    );
  });

  test("TC-012 Verify clicking product opens Product Details page", async ({
    page,
  }) => {
    await page.getByText("Sauce Labs Backpack").click();

    await expect(page).toHaveURL(/inventory-item/);

    await expect(page.locator(".inventory_details_name")).toHaveText(
      "Sauce Labs Backpack",
    );
  });
});
