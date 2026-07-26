export default class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator("#first-name");
    this.lastName = page.locator("#last-name");
    this.postalCode = page.locator("#postal-code");

    this.continueButton = page.locator("#continue");
    this.finishButton = page.locator("#finish");

    this.errorMessage = page.locator('[data-test="error"]');
  }

  async fillInformation(firstName, lastName, postalCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }
}
