// Generated from: tests\features\checkout.feature
import { test } from "playwright-bdd";

test.describe('Checkout', () => {

  test.beforeEach('Background: I am logged in and have added all products', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('I am logged in', null, { page }); 
    await And('I have added all products to the cart', null, { page }); 
  });
  
  test('Negative – missing first name', async ({ When, Then, And, page }) => { 
    await When('I go to the cart', null, { page }); 
    await And('I proceed to checkout', null, { page }); 
    await And('I fill checkout information with missing first name', null, { page }); 
    await Then('I should see an error', null, { page }); 
  });

  test('Negative – missing last name', async ({ When, Then, And, page }) => { 
    await When('I go to the cart', null, { page }); 
    await And('I proceed to checkout', null, { page }); 
    await And('I fill checkout information with missing last name', null, { page }); 
    await Then('I should see an error', null, { page }); 
  });

  test('Negative – missing postal code', async ({ When, Then, And, page }) => { 
    await When('I go to the cart', null, { page }); 
    await And('I proceed to checkout', null, { page }); 
    await And('I fill checkout information with missing postal code', null, { page }); 
    await Then('I should see an error', null, { page }); 
  });

  test('Complete checkout successfully', async ({ When, Then, And, page }) => { 
    await When('I go to the cart', null, { page }); 
    await And('I proceed to checkout', null, { page }); 
    await And('I fill my information', null, { page }); 
    await Then('the item total should equal the sum of individual prices', null, { page }); 
    await And('the tax should be correctly calculated', null, { page }); 
    await When('I finish the order', null, { page }); 
    await Then('I should see a success message', null, { page }); 
    await And('the cart badge should be empty', null, { page }); 
    await And('I can logout successfully', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\checkout.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I have added all products to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I go to the cart","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And I fill checkout information with missing first name","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see an error","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I have added all products to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When I go to the cart","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And I fill checkout information with missing last name","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then I should see an error","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I have added all products to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When I go to the cart","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I fill checkout information with missing postal code","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see an error","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am logged in","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And I have added all products to the cart","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When I go to the cart","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And I proceed to checkout","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And I fill my information","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then the item total should equal the sum of individual prices","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And the tax should be correctly calculated","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When I finish the order","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then I should see a success message","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"And the cart badge should be empty","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And I can logout successfully","stepMatchArguments":[]}]},
]; // bdd-data-end