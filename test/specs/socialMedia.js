const inventoryPage = require('../pageobjects/inventory.page');
const loginPage = require('../pageobjects/login.page');
const socialMediaPage = require('../pageobjects/socialMedia.page');

describe('Click on the logos of social networks redirect to their corresponding pages', () => {
    it('Click on Twitter logo',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        expect(socialMediaPage.btnTwitter).toBe('https://twitter.com/saucelabs');
      });
     it('Click on Facebook logo',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
       expect(socialMediaPage.btnFacebook).toBe('https://www.facebook.com/saucelabs');
      });
      it('Click on Linkedin logo',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        expect(socialMediaPage.btnLinkedin).toBe('https://www.linkedin.com/company/sauce-labs/');
      });
});