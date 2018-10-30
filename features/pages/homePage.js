const { Browser, By, Key, until } = require("selenium-webdriver");
const url = "https://www.hellobenefex.com";

class HomePage {
  constructor(browser, driver) {
    this.driver = driver;
    this.browser = browser;
    this.locators = {
      navigationBar: By.css(
        "body > div.primaryHeader.fw-container > header > div > nav > ul > li.primaryNavigation__list-item.primaryNavigation__list-item--visible.primaryNavigation__list-item--responsiveMenuToggle > div"
      ),
      navigationBenefitsLink: By.css(
        "body > div.responsiveNavigation.fw-container > nav > ul > li:nth-child(1) > div > ul > li:nth-child(1) > a"
      )
    };
  }
  openHomePage() {
    this.browser.get(url);
  }

  openNavigationBar() {
    this.browser.findElement(this.locators.navigationBar).click();
  }

  clickBenefitsNavigationLink() {
    this.browser.findElement(this.locators.navigationBenefitsLink).click();
  }
}

module.exports = HomePage;
