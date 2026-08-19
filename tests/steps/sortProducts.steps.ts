import {expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import locators from '../../config/locators.json';
import testData from '../../config/test-data.json';

const {Given, When, Then} = createBdd()

When('I sort products by "az"', async ({page}) => {
  await page.locator(locators.inventory.sortDropdown).selectOption('az');
});

When('I sort products by "za"', async ({page}) => {
  await page.locator(locators.inventory.sortDropdown).selectOption('za');
});

When('I sort products by "lohi"', async ({page}) => {
  await page.locator(locators.inventory.sortDropdown).selectOption('lohi');
});

When('I sort products by "hilo"', async ({page}) => {
  await page.locator(locators.inventory.sortDropdown).selectOption('hilo');
});

Then('the products should be displayed in alphabetical order ascending', async ({page}) => {
  const names = await page.locator(locators.inventory.productName).allTextContents();
  const sorted = [...names].sort();
  expect(names).toEqual(sorted);
});

Then('the products should be displayed in alphabetical order descending', async ({page}) => {
  const names = await page.locator(locators.inventory.productName).allTextContents();
  for (let i = 0; i < names.length - 1; i++) {
    expect(names[i].localeCompare(names[i + 1], undefined, { sensitivity: 'base' })).toBeGreaterThanOrEqual(0);
  }
});

Then('the products should be displayed in price order ascending', async ({page}) => {
  const priceTexts = await page.locator(locators.inventory.productPrice).allTextContents();
  const prices = priceTexts.map(t => parseFloat(t.replace('$', '')));
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeLessThanOrEqual(prices[i + 1]);
  }
});

Then('the products should be displayed in price order descending', async ({page}) => {
  const priceTexts = await page.locator(locators.inventory.productPrice).allTextContents();
  const prices = priceTexts.map(t => parseFloat(t.replace('$', '')));
  for (let i = 0; i < prices.length - 1; i++) {
    expect(prices[i]).toBeGreaterThanOrEqual(prices[i + 1]);
  }
});

Then('I am on the inventory page', async ({page}) => {
  await page.waitForURL(`**${testData.urls.inventory}`);
});