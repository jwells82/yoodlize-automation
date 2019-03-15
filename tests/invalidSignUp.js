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
   //https://dmutah.atlassian.net/browse/QO2J-244
   'QO2J-244 Invalid Sign Up': browser => {
        yoodlize
            .click('@navSignUp')
            .click('@signUpWEmail')
            .click('@submitButton')
            .expect.element('@fNameRequired').text.to.contain('First name is Required')
        yoodlize
            .expect.element('@lNameRequired').text.to.contain('Last name is Required')
        yoodlize
            .expect.element('@emailRequired').text.to.contain('Email is required')
        yoodlize
            .expect.element('@passwordRequired').text.to.contain('Password is required')
        yoodlize
            .setValue('@fName', '1111111')
            .setValue('@lName', '1111111')
            .setValue('@email', '1111111')
            .setValue('@password', '1111111')
            .expect.element('@emailError').text.to.contain('Invalid Email Address')
        yoodlize
            .expect.element('@passwordError').text.to.contain('Your password must be at least 8 characters. Please try again')
        yoodlize
            .clearValue('@fName')
            .setValue('@fName', 'Bernice')
            .clearValue('@lName')
            .setValue('@lName', 'Ortiz')
            .clearValue('@email')
            .setValue('@email', 'bernice@ortiz.com')
            .clearValue('@password')
            .setValue('@password', '11111111')
            .click('@submitButton')
            .expect.element('@bdayError').text.to.contain('Select your birth date to continue')
        yoodlize
            .click('select[name="month"]')
            .click('select[name="month"] option[value="2"]')
        browser.keys(browser.Keys.TAB)
            .click('select[name="day"]')
            .click('select[name="day"] option[value="6"]')
        browser.keys(browser.Keys.TAB)
            .click('select[name="year"]')
            .click('select[name="year"] option[value="2019"]')
        yoodlize.click('@submitButton')   
        yoodlize
            .expect.element('@bdayAgeError').text.to.contain('You must be at least 18 years old')
   }
}