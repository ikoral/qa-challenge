import { test, expect } from "@playwright/test";
import { PageMain } from "../../modules/page.main";

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("https://qainterview.pythonanywhere.com/");
});

// Static UI test POC
test("calculate 4! by UI", async ({ page }) => {
  //use page object
  const pageMain = new PageMain(page);
  //Find input box and make sure it is visible in the DOM
  await expect(pageMain.inputBox).toBeVisible();
  await page.waitForTimeout(1000);

  // Fill with number 4
  await pageMain.inputBox.fill("4");

  // We don't need any explicit timeout. I put here in case you run the test, you can see it is filling the input box.
  // otherwise it is too fast.
  await page.waitForTimeout(1000);
  // Click Calculate button
  await pageMain.btnCalculate.click();
  await page.waitForTimeout(1000);
  // Check if the result is correct and there.
  await expect(pageMain.resultDiv).toBeVisible();
  expect(await page.innerText("#resultDiv")).toBe("The factorial of 4 is: 24");
});

test("Terms and Conditions link should go to terms endpoint @navigation", async ({
  page,
}) => {
  //use page object
  const pageMain = new PageMain(page);
  // click Terms and Conditions link
  await pageMain.termsLink.click();
  // Assert we are directed to correct URL
  await expect(page).toHaveURL("https://qainterview.pythonanywhere.com/terms");
});

test("Privacy link should go to privacy endpoint @navigation", async ({
  page,
}) => {
  //use page object
  const pageMain = new PageMain(page);
  // click Privacy link
  await pageMain.privacyLink.click();
  // Assert we are directed to correct URL
  await expect(page).toHaveURL(
    "https://qainterview.pythonanywhere.com/privacy"
  );
});

test("it should warn user, when a negative number passed", async ({ page }) => {
  //use page object
  const pageMain = new PageMain(page);
  // click Privacy link
  await pageMain.inputBox.fill("-3");
  // Click Calculate button
  await pageMain.btnCalculate.click();
  await expect(pageMain.resultDiv).toBeVisible();
  expect(await page.innerText("#resultDiv")).toBe("Please enter an integer");
});
