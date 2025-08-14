const Page = require('./page');

class LoginPage extends Page {

    get loginInput() { return $('#user-name') }
    get passwordInput() { return $('#password') }
    get loginButton() { return $('#login-button') }
    get errorMessage() { return $('.error-message-container h3') }
    get errorIcons() { return $$('.error_icon') }

    async open() {
        return super.open('');
    }

    async login(username, password) {
        await this.loginInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

}

module.exports = new LoginPage()
