var BasePage = require('../pages/basepage');

describe('Search words', function(){

    it('Searching Selenium word', async function(){
        var baseurl = 'https://www.google.com';
        var name ='q';
        var text = 'selenium';

        await BasePage.goToPage(baseurl);
        await BasePage.enterText(name, text);
    })

    it('Scrolling to the second result', async function(){
        var element = `//*[starts-with(text(),'Selenium - Wikipedia')]`;
        await BasePage.scrollToTheElement(element);
    })

    it('Open result in a new tab and getting the title', async function(){
        var newLink = `//*[@id="rso"]/div[2]/div[2]/div/div/div/div[1]/div/div/span/a`;
        await BasePage.openNewTab(newLink);
    })
})