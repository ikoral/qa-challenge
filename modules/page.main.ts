import { Locator, Page } from "@playwright/test";

export class PageMain {
  readonly page: Page;

  readonly inputBox: Locator;
  readonly btnCalculate: Locator;
  readonly resultDiv: Locator;
  readonly termsLink: Locator;
  readonly privacyLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.inputBox = page.locator('input[id="number"]');
    this.btnCalculate = page.locator("#getFactorial");
    this.resultDiv = page.locator("#resultDiv");
    this.termsLink = page.locator('a:has-text("Terms and Conditions")');
    this.privacyLink = page.locator('a:has-text("Privacy")');
  }
}
