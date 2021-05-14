const cartPage = require('../pageobjects/cart.page');
const inventoryPage = require('../pageobjects/inventory.page');
const loginPage = require('../pageobjects/login.page');

describe('Cart tests', () => {
    it('Checks if the click to the Continue shopping redirects to its page', () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.cartBtnClick();
        cartPage.contShopBtnClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
      });
    it('Checks if the click to the remove removes the item', () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.fourthBtnAddToCartClick();
        inventoryPage.cartBtnClick();
        cartPage.removeFourthClick();
        expect(cartPage.removedFromCart).toBe('removed_cart_item');
      });
});