const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get loginInput() { return $('#user-name') }
    get passwordInput() { return $('#password') }
    get loginButton() { return $('#login-button') }
    get errorMessage() { return $('.error-message-container h3') }
    get errorMessage2() { return $('[data-test="error"]') }
    get errorIcons() { return $$('.error_icon') }

     async open() {
        await browser.url('https://www.saucedemo.com/')
    }

    async enterLogin(login) {
        await this.loginInput.setValue(login)
    }

}

module.exports = new LoginPage()
