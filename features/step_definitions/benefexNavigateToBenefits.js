const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const HomePage = require("../pages/homePage");
const { Browser, By, Key, until } = require("selenium-webdriver");

Given(/^I am on the Benefex home page$/, async function() {
  await this.browser.get("https://www.hellobenefex.com/");
});

When(/^I click the benefits link on the navigation bar$/, async function() {
  let page = await new HomePage(this.browser, this.driver);
  await page.openNavigationBar();
  await page.clickBenefitsNavigationLink();
});

Then(/^I am taken to the Benefits section$/, async function() {
  let title = await this.browser.getTitle();
  await this.browser.wait(await until.elementIsVisible(title));
  await assert.equal(title, "Create meaningful employee experiences - Benefex");
});
