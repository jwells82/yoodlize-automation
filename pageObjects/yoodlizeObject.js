module.exports = {

    url: 'https://alpha.yoodlize.com/',

    elements: {
        root: '#app',
        signUpWEmail: {
            selector: '//span[contains(text(), "Sign up with Email")]',
            locateStrategy: 'xpath'
        },

        navLogIn: {
            selector: '//span[contains(text(), "Log in")]',
            locateStrategy: 'xpath'
        }, 

        navLogOut: {
            selector: '//span[contains(text(), "Logout")]',
            locateStrategy: 'xpath'
        },

        fName: 'input[name="firstName"]',
        lName: 'input[name="lastName"]',
        email: 'input[name="email"]',
        password: 'input[name="password"]',
        submitButton: 'button[type="submit"]',
        nextButton: {
            selector: '//button[contains(text(), "Next")]',
            locateStrategy: 'xpath'
        },

        userDropDown: '#basic-nav-dropdown',
        navSignUp: {
            selector: '//*[text()="Sign up"]',
            locateStrategy: 'xpath'
        }, 

        fNameRequired: {
            selector: '//*[text()="First name is Required"]',
            locateStrategy: 'xpath'
        },

        lNameRequired: {
            selector: '//*[text()="Last name is Required"]',
            locateStrategy: 'xpath'
        },

        emailRequired: {
            selector: '//*[text()="Email is required"]',
            locateStrategy: 'xpath'
        },

        emailError: {
            selector: '//*[text()="Invalid Email Address"]',
            locateStrategy: 'xpath'
        },

        passwordRequired: {
            selector: '//*[text()="Password is required"]',
            locateStrategy: 'xpath'
        },

        passwordError: {
            selector: '//*[text()="Your password must be at least 8 characters. Please try again"]',
            locateStrategy: 'xpath'
        },

        bdayError: {
            selector: '//*[text()="Select your birth date to continue"]',
            locateStrategy: 'xpath'
        },

        bdayAgeError: {
            selector: '//*[text()="You must be at least 18 years old"]',
            locateStrategy: 'xpath'
        },

        birthMonth: {
            selector: '//*[text()="month"]',
            locateStrategy: 'xpath'

        },

        birthDay: {
            selector: '//*[text()="day"]',
            locateStrategy: 'xpath'

        },

        birthYear: {
            selector: '//*[text()="year"]',
            locateStrategy: 'xpath'
        },

        later: {
            selector: '//*[text()="I\'ll do this later"]',
            locateStrategy: 'xpath'
        },

        listYourStuff: {
            selector: '//*[text()="List Your Stuff"]',
            locateStrategy: 'xpath'
        },

    }
}