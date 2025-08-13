const { Given, When, Then } = require('@wdio/cucumber-framework')
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page')

Given('User is on the login page', async () => {
    await LoginPage.open()
})

When('User clicks the Login button', async () => {
    await LoginPage.loginButton.click()
})

Then(/^User should see "(.*)" error message$/, async (expectedMessage) => {
    const actualMessage = await LoginPage.errorMessage.getText()
    expect(actualMessage).toBe(expectedMessage)
    await browser.pause(1000)
})
