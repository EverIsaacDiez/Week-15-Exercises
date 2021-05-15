const cartPage = require('../pageobjects/cart.page');
const checkOutPage = require('../pageobjects/checkOut.page');
const inventoryPage = require('../pageobjects/inventory.page');
const loginPage = require('../pageobjects/login.page');

describe('Check out tests', () => {
    it('Empty first name on checkout-step-one.html',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.firstBtnAddToCartClick();
        inventoryPage.secondBtnAddToCartClick();
        inventoryPage.cartBtnClick();
        checkOutPage.checkOutBtnClick();
        checkOutPage.continueBtnClick();
        expect(checkOutPage.errorCheckMsg).toBe('Error: First Name is required');
        //Remove from cart for next tests
        checkOutPage.cancelBtnClick();
        checkOutPage.continueShopBtnClick();
        inventoryPage.firstBtnRemoveClick();
        inventoryPage.secondBtnRemoveClick();
    });
    it('Empty last name on checkout-step-one.html',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.firstBtnAddToCartClick();
        inventoryPage.secondBtnAddToCartClick();
        inventoryPage.cartBtnClick();
        checkOutPage.checkOutBtnClick();
        checkOutPage.inputFirstName.setValue("asd");
        checkOutPage.continueBtnClick();
        expect(checkOutPage.errorCheckMsg).toBe('Error: Last Name is required');
        //Remove from cart for next tests
        checkOutPage.cancelBtnClick();
        checkOutPage.continueShopBtnClick();
        inventoryPage.firstBtnRemoveClick();
        inventoryPage.secondBtnRemoveClick();
    });
    it('Empty postal code on checkout-step-one.html',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.firstBtnAddToCartClick();
        inventoryPage.secondBtnAddToCartClick();
        inventoryPage.cartBtnClick();
        checkOutPage.checkOutBtnClick();
        checkOutPage.inputFirstName.setValue("Name");
        checkOutPage.inputLastName.setValue("Last");
        checkOutPage.continueBtnClick();
        expect(checkOutPage.errorCheckMsg).toBe('Error: Postal Code is required');
        //Remove from cart for next tests
        checkOutPage.cancelBtnClick();
        checkOutPage.continueShopBtnClick();
        inventoryPage.firstBtnRemoveClick();
        inventoryPage.secondBtnRemoveClick();
    });
    it('Valid credentials on checkout',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.firstBtnAddToCartClick();
        inventoryPage.secondBtnAddToCartClick();
        inventoryPage.cartBtnClick();
        checkOutPage.checkOutBtnClick();
        checkOutPage.inputFirstName.setValue("Name");
        checkOutPage.inputLastName.setValue("Last");
        checkOutPage.inputPostalCode.setValue("asd");
        checkOutPage.continueBtnClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        //Remove from cart for next tests
        checkOutPage.cancelBtnClick();
        inventoryPage.firstBtnRemoveClick();
        inventoryPage.secondBtnRemoveClick();
    });
    it('Finish checkout',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.firstBtnAddToCartClick();
        inventoryPage.secondBtnAddToCartClick();
        inventoryPage.cartBtnClick();
        checkOutPage.checkOutBtnClick();
        checkOutPage.inputFirstName.setValue("Name");
        checkOutPage.inputLastName.setValue("Last");
        checkOutPage.inputPostalCode.setValue("asd");
        checkOutPage.continueBtnClick();
        checkOutPage.finishBtnClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    });
    it('Back home',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.firstBtnAddToCartClick();
        inventoryPage.secondBtnAddToCartClick();
        inventoryPage.cartBtnClick();
        checkOutPage.checkOutBtnClick();
        checkOutPage.inputFirstName.setValue("Name");
        checkOutPage.inputLastName.setValue("Last");
        checkOutPage.inputPostalCode.setValue("asd");
        checkOutPage.continueBtnClick();
        checkOutPage.finishBtnClick();
        checkOutPage.backHomeBtnClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
});
