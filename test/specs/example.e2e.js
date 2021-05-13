const LoginPage = require('../pageobjects/login.page');

describe('Tests of login page', () => {

    it('Should login with empty characters', async () => {
        await LoginPage.open('');
        await LoginPage.login('', '');
        expect(LoginPage.errorLoginMssg).toBe("Epic sadface: Username is required");
    });

    it('Should login with empty password', async () => {
        await LoginPage.open('');
        await LoginPage.login('Cualquiercosa', '');
        expect(LoginPage.errorLoginMssg).toBe("Epic sadface: Password is required");
    });

    it('Should login with empty username', async () => {
        await LoginPage.open('');
        await LoginPage.login('', 'contra');
        expect(LoginPage.errorLoginMssg).toBe("Epic sadface: Username is required");
    });
  /*  
    it('Should login with locked_out_user', async () => {
        await LoginPage.open('');
        await LoginPage.login('locked_out_user', 'secret_sauce');
        expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
*/
    it('Should login with standard_user', async () => {
        await LoginPage.open('');
        await LoginPage.login('standard_user', 'secret_sauce');
        expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
    });
});

