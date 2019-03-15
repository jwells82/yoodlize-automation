let signUp = {};

module.exports = {
    beforeEach: browser => {
       yoodlize = browser.page.yoodlizeObject()
       yoodlize.navigate()
           .waitForElementPresent('@root', 5000)
   },
  
   after: browser => {
       browser.end()
   },
   //https://dmutah.atlassian.net/browse/QO2J-245
   'QO2J-245 Valid Sign Up': browser => {
        yoodlize
            .waitForElementVisible('@navSignUp')
            .click('@navSignUp')
        yoodlize
            .waitForElementVisible('@signUpWEmail')
            .click('@signUpWEmail')
        yoodlize
            .waitForElementVisible('@fName')
            .setValue('@fName', 'Bernice32')
            .setValue('@lName', 'Ortiz32')
            .setValue('@email', 'bernice32@ortiz.com')
            .setValue('@password', '11111111b32')
        yoodlize
            .click('select[name="month"]')
            .click('select[name="month"] option[value="2"]')
        browser.keys(browser.Keys.TAB)
            .click('select[name="day"]')
            .click('select[name="day"] option[value="6"]')
        browser.keys(browser.Keys.TAB)
            .click('select[name="year"]')
            .click('select[name="year"] option[value="2001"]')
        yoodlize.click('@submitButton')   
        yoodlize.api.pause(5000)
        yoodlize
            .expect.element('@nextButton').text.to.contain('Next')
        
        }
}
