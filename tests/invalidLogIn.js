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
   //https://dmutah.atlassian.net/browse/QO2J-248
   'QO2J-248 Invalid Log in': browser => {
        yoodlize
            .click('@navLogIn')
            .waitForElementVisible('@navLogIn')
        yoodlize
            .click('@submitButton')
            .expect.element('@emailRequired').text.to.contain('Email is required')
        yoodlize.api.pause(5000)
        yoodlize
            .expect.element('@passwordRequired').text.to.contain('Password is required')
        yoodlize
            .setValue('@email', 'Eve')
            .setValue('@password', 'Sparks')
            .click('@submitButton')
            .expect.element('@emailError').text.to.contain('Invalid Email Address')
        yoodlize
            .expect.element('@passwordError').text.to.contain('Your password must be at least 8 characters. Please try again')
   }
}

