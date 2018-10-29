const assert = require("assert");
const { Given, When, Then } = require("cucumber");

When(/^I open google$/, async function() {
  await this.browser.get("https://www.google.com/");
});

Then(/^I should be on the google home page$/, async function() {
  let title = await this.browser.getTitle();
  await assert.equal(title, "Google");
});
