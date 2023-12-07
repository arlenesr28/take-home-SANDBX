let webdriver = require('selenium-webdriver');
const {By, Key} = require('selenium-webdriver');

require('chromedriver');

// Build new window of chrome 
let driver =  new webdriver.Builder() 
    .forBrowser("chrome").build(); 

class BasePage{
    constructor(){
        global.driver = driver;
    }

    async goToPage(URL){
        await driver.get(URL);
    }

    async enterText(name, text){
        await driver.findElement(By.name(name))
            .sendKeys(text, Key.RETURN);
    }

    async scrollToTheElement(element){
        const iframe = await driver.findElement(By.xpath(element));

        await driver.actions()
            .scroll(0,0,0,0, iframe)
            .perform()
    }

    async openNewTab(newLink){
        const newTab = await driver.findElement(By.xpath(newLink));
        const newURLToClick = await newTab.getAttribute('href');
        
        await driver.switchTo().newWindow();
        await driver.get(newURLToClick);
        console.log('The New Tab Title is: ' + await driver.getTitle());
    }

}

module.exports = new BasePage();