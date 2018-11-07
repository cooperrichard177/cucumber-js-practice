const { Browser, By, Key, until } = require("selenium-webdriver");
const url = "https://www.google.com";

class GoogleHomePage {
  constructor(browser, driver) {
    this.driver = driver;
    this.browser = browser;
    this.locators = {
      googleSearchInput: By.css("#lst-ib"),
      googleSearchButton: By.name("btnK")
    };
  }
  openHomePage() {
    this.browser.get(url);
  }

  googleSearchForElement(element) {
    console.log(this.locators.googleSearchInput);
    this.locators.googleSearchInput.sendKeys(element);
    this.locators.googleSearchButton.click();
  }
}

module.exports = GoogleHomePage;
