import {expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import locators from '../../config/locators.json';
import testData from '../../config/test-data.json';

const {Given, When, Then, Step} = createBdd()

Given('I have added all products to the cart', async function ({page}) {
  await page.goto(testData.urls.base + testData.urls.inventory);
  const items = page.locator(locators.inventory.inventoryItem);
  const count = await items.count();
  for (let i = 0; i < count; i++) {
    await items.nth(i).locator(locators.inventory.addToCartButton).click();
  }
});

When('I go to the cart', async function ({page}) {
  await page.locator(locators.inventory.cartLink).click();
});

When('I proceed to checkout', async function ({page}) {
  await page.locator(locators.cart.checkoutButton).click();
});

When('I fill my information', async function ({page}) {
  await page.locator(locators.checkout.firstName).fill(testData.checkout.firstName);
  await page.locator(locators.checkout.lastName).fill(testData.checkout.lastName);
  await page.locator(locators.checkout.postalCode).fill(testData.checkout.postalCode);
  await page.locator(locators.checkout.continueButton).click();
});

Step('I fill checkout information with missing first name',
  async function ({page}) {
    await page.locator(locators.checkout.firstName).fill('');
    await page.locator(locators.checkout.lastName).fill(testData.checkout.lastName);
    await page.locator(locators.checkout.postalCode).fill(testData.checkout.postalCode);
    await page.locator(locators.checkout.continueButton).click();
  }
);

Step('I fill checkout information with missing last name',
  async function ({page}) {
    await page.locator(locators.checkout.firstName).fill(testData.checkout.firstName);
    await page.locator(locators.checkout.lastName).fill('');
    await page.locator(locators.checkout.postalCode).fill(testData.checkout.postalCode);
    await page.locator(locators.checkout.continueButton).click();
  }
);

Step('I fill checkout information with missing postal code',
  async function ({page}) {
    await page.locator(locators.checkout.firstName).fill(testData.checkout.firstName);
    await page.locator(locators.checkout.lastName).fill(testData.checkout.lastName);
    await page.locator(locators.checkout.postalCode).fill('');
    await page.locator(locators.checkout.continueButton).click();
  }
);

Then('the item total should equal the sum of individual prices', async function ({page}) {
  const priceElements = page.locator(locators.inventory.productPrice);
  const texts = await priceElements.allTextContents();
  const sum = texts.reduce((acc, t) => acc + parseFloat(t.replace('$', '')), 0);
  const subtotalText = await page.locator(locators.checkout.subtotalLabel).textContent();
  const subtotal = parseFloat(subtotalText?.replace('Item total: $', '') || '0');
  expect(sum).toBeCloseTo(subtotal, 2);
});

Then('the tax should be correctly calculated', async function ({page}) {
  const subtotalText = await page.locator(locators.checkout.subtotalLabel).textContent();
  const totalText = await page.locator(locators.checkout.totalLabel).textContent();
  const taxText = await page.locator(locators.checkout.taxLabel).textContent();
  const subtotal = parseFloat(subtotalText?.replace('Item total: $', '') || '0');
  const total = parseFloat(totalText?.replace('Total: $', '') || '0');
  const tax = parseFloat(taxText?.replace('Tax: $', '') || '0');
  expect(total - subtotal).toBeCloseTo(tax, 2);
});

When('I finish the order', async function ({page}) {
  await page.locator(locators.checkout.finishButton).click();
});

Then('I should see a success message', async function ({page}) {
  const message = page.locator(locators.checkout.completeText);
  await expect(message).toContainText(testData.checkout.successMessage);
});

Then('the cart badge should be empty', async function ({page}) {
  const badge = page.locator(locators.inventory.cartBadge);
  await expect(badge).toBeHidden();
});

Then('I can logout successfully', async function ({page}) {
  await page.locator(locators.inventory.burgerMenuButton).click();
  await page.locator(locators.inventory.logoutLink).click();
  await expect(page.locator(locators.login.username)).toBeVisible();
});

Then('I should see an error', async function ({page}) {
  const error = page.locator(locators.checkout.infoError);
  await expect(error).toContainText("Error");
});