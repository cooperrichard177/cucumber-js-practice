const assert = require("assert");
const { Given, When, Then, And } = require("cucumber");
const GoogleHomePage = require("../pages/googleHomePage");
const GoogleSearchResultsPage = require("../pages/googleSearchResultsPage");

const { Browser, By, Key, until } = require("selenium-webdriver");

Given("I am on the google home page", async function() {
  // Write code here that turns the phrase above into concrete actions
  let page = new GoogleHomePage(this.browser, this.driver);
  await page.openHomePage;
  //   return "pending";
});

When("I enter {string}", async function(string) {
  let page = new GoogleHomePage(this.browser, this.driver);
  await this.browser.wait(
    until.elementLocated(page.locators.googleSearchInput)
  );
  let googleSearchInput = await this.browser.findElement(
    page.locators.googleSearchInput
  );
  await googleSearchInput.sendKeys(string);
  // Write code here that turns the phrase above into concrete actions
  //   return "pending";
});
When("I click search", async function() {
  let page = new GoogleHomePage(this.browser, this.driver);
  let googleSearchButton = await this.browser.findElement(
    page.locators.googleSearchButton
  );
  await googleSearchButton.sendKeys(Key.ENTER);

  // Write code here that turns the phrase above into concrete actions
  //   return "pending";
});

Then("a list of search results are returned", async function() {
  // Write code here that turns the phrase above into concrete actions
  let page = new GoogleSearchResultsPage();
  let firstResult = await this.browser.findElement(
    page.locators.firstGoogleResult
  );
  assert(firstResult.isDisplayed());
});
