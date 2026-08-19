// Generated from: tests\features\sortProducts.feature
import { test } from "playwright-bdd";

test.describe('SortProducts', () => {

  test.beforeEach('Background: I am logged in and on the inventory page', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in', null, { page }); 
    await And('I am on the inventory page', null, { page }); 
  });
  
  test('Sort A to Z', async ({ When, Then, page }) => { 
    await When('I sort products by "az"', null, { page }); 
    await Then('the products should be displayed in alphabetical order ascending', null, { page }); 
  });

  test('Sort Z to A', async ({ When, Then, page }) => { 
    await When('I sort products by "za"', null, { page }); 
    await Then('the products should be displayed in alphabetical order descending', null, { page }); 
  });

  test('Sort price low to high', async ({ When, Then, page }) => { 
    await When('I sort products by "lohi"', null, { page }); 
    await Then('the products should be displayed in price order ascending', null, { page }); 
  });

  test('Sort price high to low', async ({ When, Then, page }) => { 
    await When('I sort products by "hilo"', null, { page }); 
    await Then('the products should be displayed in price order descending', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\sortProducts.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I am on the inventory page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When I sort products by \"az\"","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the products should be displayed in alphabetical order ascending","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I am on the inventory page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I sort products by \"za\"","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the products should be displayed in alphabetical order descending","stepMatchArguments":[]}]},
  {"pwTestLine":21,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I am on the inventory page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I sort products by \"lohi\"","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the products should be displayed in price order ascending","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I am on the inventory page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When I sort products by \"hilo\"","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then the products should be displayed in price order descending","stepMatchArguments":[]}]},
]; // bdd-data-end