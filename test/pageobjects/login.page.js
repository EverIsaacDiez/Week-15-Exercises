const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return $('#user-name') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('#login-button') }
    get errorLoginMssg () { return $('form>div[class="error-message-container error"]>h3').getText()}
    get srcOfProductPhoto () { return $('img[src="/static/media/sl-404.168b1cce.jpg"]').getAttribute('src')}
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    /**
     *  overwrite specifc options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

module.exports = new LoginPage();
