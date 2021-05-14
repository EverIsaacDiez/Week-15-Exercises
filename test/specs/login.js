const LoginPage = require('../pageobjects/login.page');


describe('Standard user tests', () => {

  it('Should login with empty characters',  () => {
    LoginPage.open('');
    LoginPage.login('', '');
    expect(LoginPage.errorLoginMssg).toBe("Epic sadface: Username is required");
  });

  it('Login with incorrect credentials',  () => {
    LoginPage.open('');
    LoginPage.login('asd', 'asd');
    expect(LoginPage.errorLoginMssg).toBe("Epic sadface: Username and password do not match any user in this service");
  });

  it('Should login with empty password', () => {
    LoginPage.open('');
    LoginPage.login('Cualquiercosa', '');
    expect(LoginPage.errorLoginMssg).toBe("Epic sadface: Password is required");
  });

  it('Should login with empty username',  () => {
    LoginPage.open('');
    LoginPage.login('', 'contra');
    expect(LoginPage.errorLoginMssg).toBe("Epic sadface: Username is required");
  });
})


describe('Locked user test',() => {

  it('Should login with locked_out_user',  () => {
    LoginPage.open('');
    LoginPage.login('locked_out_user', 'secret_sauce');
    expect(LoginPage.errorLoginMssg).toBe("Epic sadface: Sorry, this user has been locked out.");
  });
})
 
describe('Problem user test',()=>{

  it('Should login with problem_user',  () => {
    LoginPage.open('');
    LoginPage.login('problem_user', 'secret_sauce');
    expect(LoginPage.srcOfProductPhoto).toBe("https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg");
  });
})
/*
describe('Performance user test',()=>{
  it('Login with performance_glitch_user',  () => {
    LoginPage.open('');
    LoginPage.login('performance_glitch_user', 'secret_sauce');
    expect(browser).not.waitForDisplayed({timeout:1000})
  });
})
*/
describe('Test with valid credentials', () => {
  it('Should login with standard_user',  () => {
    LoginPage.open('');
    LoginPage.login('standard_user', 'secret_sauce');
    expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  });
});

