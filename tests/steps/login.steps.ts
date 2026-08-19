
import {expect} from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import locators from '../../config/locators.json';
import testData from '../../config/test-data.json';

const {Given, When, Then} = createBdd()

Given('I am on the login page', async ({page}) => {
  await page.goto(testData.urls.base);
});

Given('I am logged in', async function ({page}) {
  await page.goto(testData.urls.base);
  await page.locator(locators.login.username).fill(testData.users.standard.username);
  await page.locator(locators.login.password).fill(testData.users.standard.password);
  await page.locator(locators.login.loginButton).click();
  await page.waitForURL(`**${testData.urls.inventory}`);
});

When('I log in as a standard user', async ({page}) => {
  await page.locator(locators.login.username).fill(testData.users.standard.username);
  await page.locator(locators.login.password).fill(testData.users.standard.password);
  await page.locator(locators.login.loginButton).click();
  await page.waitForURL(`**${testData.urls.inventory}`);
});

Then('I should be redirected to the inventory page', async ({page}) => {
  await page.waitForURL(`**${testData.urls.inventory}`);
});

When('I enter invalid username and password', async ({page}) => {
  await page.locator(locators.login.username).fill(testData.users.invalid.username);
  await page.locator(locators.login.password).fill(testData.users.invalid.password);
  await page.locator(locators.login.loginButton).click();
});

Then('I should see an error message about invalid credentials', async ({page}) => {
  const error = page.locator(locators.login.errorContainer);
  await expect(error).toContainText(testData.errors.invalidCredentials);
});
