const { Browser, By, Key, until } = require("selenium-webdriver");

class GoogleSearchResultsPage {
  constructor(browser, driver) {
    this.driver = driver;
    this.browser = browser;
    this.locators = {
      firstGoogleResult: By.css(
        "#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a > h3"
      )
    };
  }
}

module.exports = GoogleSearchResultsPage;
