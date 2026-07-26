# Playwright Automation - SauceDemo

## Project Overview

This project demonstrates UI automation testing using **Playwright** with the **Page Object Model (POM)** design pattern.

The application under test is **SauceDemo**:
https://www.saucedemo.com/

The project was created as a learning assignment to understand:

- Playwright fundamentals
- Functional test automation
- Locator strategies
- Assertions
- Page Object Model (POM)
- Reusable test data
- Test organization

---

# Tech Stack

- Playwright
- JavaScript
- Node.js

---

# Project Structure

```
playwright-ecomm
│
├── pages
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests
│   ├── login.spec.js
│   ├── product.spec.js
│   ├── cart.spec.js
│   └── checkout.spec.js
│
├── utils
│   └── testData.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Features Automated

## Login Module

- Valid Login
- Invalid Password
- Empty Username
- Empty Password
- Invalid Username
- Both Fields Empty

---

## Product Module

- Verify Products Page
- Add Product to Cart
- Remove Product
- Verify Cart Badge
- Sort Products (Low to High)
- Open Product Details

---

## Cart Module

- Open Cart
- Verify Added Product
- Remove Product
- Continue Shopping
- Checkout Navigation

---

## Checkout Module

- Successful Checkout
- Mandatory First Name Validation
- Mandatory Last Name Validation
- Mandatory Postal Code Validation
- Complete Order

---

# Design Pattern

This project follows the **Page Object Model (POM)**.

- Page classes contain locators and reusable methods.
- Test files contain only test logic and assertions.
- Test data is separated into a reusable utility file.

Benefits:

- Better code readability
- Reusable methods
- Easier maintenance
- Reduced code duplication

---

# Locator Strategies Used

The project demonstrates multiple Playwright locator strategies.

### ID

```javascript
page.locator("#user-name");
```

### Class

```javascript
page.locator(".title");
```

### Attribute

```javascript
page.locator('[data-test="error"]');
```

### Role

```javascript
page.getByRole("button", { name: "Checkout" });
```

### Text

```javascript
page.getByText("Sauce Labs Backpack");
```

---

# Assertions Used

- toHaveURL()
- toHaveText()
- toContainText()
- toBeVisible()
- toHaveCount()

---

# Test Data

Reusable test data is maintained in

```
utils/testData.js
```

This includes:

- Login Credentials
- Checkout Information

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Running Tests

Run all tests

```bash
npx playwright test
```

Run in headed mode

```bash
npx playwright test --headed
```

Run Login tests

```bash
npx playwright test tests/login.spec.js --headed
```

Run Product tests

```bash
npx playwright test tests/product.spec.js --headed
```

Run Cart tests

```bash
npx playwright test tests/cart.spec.js --headed
```

Run Checkout tests

```bash
npx playwright test tests/checkout.spec.js --headed
```

Run a specific test

```bash
npx playwright test -g "TC-001"
```

Run in debug mode

```bash
npx playwright test --debug
```

---

# Reports

Generate HTML Report

```bash
npx playwright show-report
```

---

# Learning Outcomes

Through this project I learned:

- Functional Test Automation
- Playwright Fundamentals
- Page Object Model (POM)
- Locator Strategies
- Assertions
- Test Organization
- Reusable Components
- Test Data Management

---

# Author

**Parth Parmar**
