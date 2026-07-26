import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { users } from "../utils/testData";

test.describe("Login Module", () => {
  test("TC-001 Verify user can login with valid credentials", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(users.validUser.username, users.validUser.password);

    await expect(page).toHaveURL(/inventory/);
    await expect(loginPage.productsTitle).toHaveText("Products");
  });

  test("TC-002 Verify login with invalid password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(users.validUser.username, "wrong_password");

    await expect(loginPage.errorMessage).toContainText(
      "Username and password do not match",
    );
  });

  test("TC-003 Verify login with empty username", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login("", users.validUser.password);

    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username is required",
    );
  });

  test("TC-004 Verify login with empty password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(users.validUser.username, "");

    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Password is required",
    );
  });

  test("TC-005 Verify login with invalid username", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(users.invalidUser.username, users.validUser.password);

    await expect(loginPage.errorMessage).toContainText(
      "Username and password do not match",
    );
  });

  test("TC-006 Verify login with both fields empty", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login("", "");

    await expect(loginPage.errorMessage).toHaveText(
      "Epic sadface: Username is required",
    );
  });
});
