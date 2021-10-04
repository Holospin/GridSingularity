// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Project', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Project', async function() {
    await driver.get("https://www.d3a.io/")
    await driver.manage().window().setRect(2560, 1415)
    await driver.findElement(By.css(".button__label")).click()
    await driver.findElement(By.id("email")).sendKeys("holospin.gabriel@gmail.com")
    await driver.findElement(By.id("password")).sendKeys("Password123!")
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.css(".button")).click()
    await driver.findElement(By.css(".icon-projects")).click()
    await driver.findElement(By.css(".button--accent > .button__label")).click()
    vars["currentdate"] = await driver.executeScript("return new Date();")
    console.log(vars["currentdate"])
    await driver.findElement(By.id("input-field-name")).sendKeys(vars["currentdate"])
    await driver.findElement(By.css(".button:nth-child(4)")).click()
    assert(await driver.findElement(By.css("div:nth-child(1) > .ConfigurationListHeadWrapper .saved-project__headline__name__text")).getText() == "vars[\"currentdate\"]")
    {
      const elements = await driver.findElements(By.css("button > .svg-icon > .icon-cog > use"))
      assert(elements.length)
    }
    await driver.findElement(By.css("button > .svg-icon > .icon-cog > use")).click()
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    await driver.findElement(By.css(".context-menu--options-button:nth-child(2) > p")).click()
  })
})
