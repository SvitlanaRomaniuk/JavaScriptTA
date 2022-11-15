// 1. 

let webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Check correct work', function () {

  let driver;

  before(async function () {
    driver = new webdriver.Builder().forBrowser('chrome').build();

  });

  it('1. Verify dropdown elements', async function () {
    await driver.get('http://the-internet.herokuapp.com/dropdown');
    let element1 = await driver.findElement(By.css('#dropdown > option:nth-child(1)'));
    let element2 = await driver.findElement(By.css('#dropdown > option:nth-child(2)'));
    console.table([await element1.getAttribute('disabled'), await element2.getAttribute('disabled')])
    assert.equal(await element1.getAttribute('disabled'), 'true')
    assert.equal(await element2.getAttribute('disabled'), null)
  });


  it('2. Verify hover over an element', async function () {
    const action = driver.actions({ async: true });

    await driver.get('http://the-internet.herokuapp.com/hovers');
    let avatar = await driver.findElement(By.className("figure"));
    const avatarTitles = await driver.findElements(By.className("figcaption"));

    await action.move({ origin: avatar }).perform();

    const titleDisplay = await avatarTitles[0].getCssValue("display");
    console.table([await avatarTitles[0].getText()])
    assert.equal(titleDisplay, "block");
  });

  it('3. Verify Filling out the form', async function () {
    await driver.get("http://formy-project.herokuapp.com/form");
    const firstNameInput = await driver.findElement(By.id("first-name"));
    const lastNameInput = await driver.findElement(By.id("last-name"));
    const jobTitleInput = await driver.findElement(By.id("job-title"));
    const education = await driver.findElement(By.id('radio-button-1'));
    const sex = await driver.findElement(By.id("checkbox-1"));
    const date = await driver.findElement(By.id("datepicker"));
    const experience = await driver.findElement(By.id("select-menu"));
    const experienceId = await driver.findElement(By.css("#select-menu > option:nth-child(3)"));
    const submitButton = await driver.findElement(By.className("btn btn-lg btn-primary"));

    await firstNameInput.sendKeys("Peter");
    await lastNameInput.sendKeys("Peterson");
    await jobTitleInput.sendKeys("tester");
    await education.click();
    await sex.click();
    await experience.click();
    await experienceId.click();
    await date.sendKeys("12/12/2020");
    await submitButton.click();
    const successMessage = await driver.wait(
      until.elementLocated(By.className("alert alert-success"))
    );

    const successText = await successMessage.getText();
    console.table([await successText])
    assert.equal(successText, "The form was successfully submitted!");
  });

  it('4. Sorting the table', async function () {
    await driver.get("http://the-internet.herokuapp.com/tables");
    const due = await driver.findElement(
      By.xpath('//table[@id="table2"]//thead//span[@class="dues"]'));
    await due.click();
    const firstRawDue = await driver.findElement(
      By.xpath('//table[@id="table2"]//tbody//tr[1]//td[@class="dues"]'));
    const secondRawDue = await driver.findElement(
      By.xpath('//table[@id="table2"]//tbody//tr[2]//td[@class="dues"]'));
    const thirdRawDue = await driver.findElement(
      By.xpath('//table[@id="table2"]//tbody//tr[3]//td[@class="dues"]'));
    const fourthRawDue = await driver.findElement(
      By.xpath('//table[@id="table2"]//tbody//tr[4]//td[@class="dues"]'));

    assert.equal(await firstRawDue.getText(), "$50.00");
    assert.equal(await secondRawDue.getText(), "$50.00");
    assert.equal(await thirdRawDue.getText(), "$51.00");
    assert.equal(await fourthRawDue.getText(), "$100.00");

  });

  after(() => driver.quit());

});

