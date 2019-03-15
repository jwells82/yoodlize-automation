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
   //https://dmutah.atlassian.net/browse/QO2J-249
   'QO2J-249 Valid Log in and Log out': browser => {
        yoodlize
            .click('@navLogIn')
            .click('@submitButton')
            .setValue('@email', 'eve@sparks.com')
            .setValue('@password', 'eeeeeeee')
            .click('@logInButton')
        yoodlize
            .waitForElementPresent('#basic-nav-dropdown', 5000)
            .click('#basic-nav-dropdown')
            .click('@navLogOut')
           .expected.element('@navLogOut').text.to.contain('Logout')
   }
}
