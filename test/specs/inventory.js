const cartPage = require('../pageobjects/cart.page');
const inventoryPage = require('../pageobjects/inventory.page');
const loginPage = require('../pageobjects/login.page');

describe('Filter tests', () => {
    //If more elements are added, expects must be added
    it('Name A to Z',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.aToZClick();
        expect(inventoryPage.orderedLowToHigh(inventoryPage.firstProduct, inventoryPage.secondProduct)).toBe(1);
        expect(inventoryPage.orderedLowToHigh(inventoryPage.secondProduct, inventoryPage.thirdProduct)).toBe(1);
        expect(inventoryPage.orderedLowToHigh(inventoryPage.thirdProduct, inventoryPage.fourthProduct)).toBe(1);
        expect(inventoryPage.orderedLowToHigh(inventoryPage.fourthProduct, inventoryPage.fivethProduct)).toBe(1);
        expect(inventoryPage.orderedLowToHigh(inventoryPage.fivethProduct, inventoryPage.sixthProduct)).toBe(1);
      });

    it('Name Z to A',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.zToAClick();
        expect(inventoryPage.orderedLowToHigh(inventoryPage.firstProduct, inventoryPage.secondProduct)).toBe(1);
        expect(inventoryPage.orderedLowToHigh(inventoryPage.secondProduct, inventoryPage.thirdProduct)).toBe(1);
        expect(inventoryPage.orderedLowToHigh(inventoryPage.thirdProduct, inventoryPage.fourthProduct)).toBe(1);
        expect(inventoryPage.orderedLowToHigh(inventoryPage.fourthProduct, inventoryPage.fivethProduct)).toBe(1);
        expect(inventoryPage.orderedLowToHigh(inventoryPage.fivethProduct, inventoryPage.sixthProduct)).toBe(1);
      });

    it('Price low to high',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.lowToHighClick();
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.firstPrice.slice(1)), parseInt(inventoryPage.secondPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.secondPrice.slice(1)), parseInt(inventoryPage.thirdPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.thirdPrice.slice(1)), parseInt(inventoryPage.fourthPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.fourthPrice.slice(1)), parseInt(inventoryPage.fivethPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.fivethPrice.slice(1)), parseInt(inventoryPage.sixthPrice.slice(1)))).toBe(1);
    });

    it('Price high to low',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.highToLowClick();
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.sixthPrice.slice(1)), parseInt(inventoryPage.fivethPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.fivethPrice.slice(1)), parseInt(inventoryPage.fourthPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.fourthPrice.slice(1)), parseInt(inventoryPage.thirdPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.thirdPrice.slice(1)), parseInt(inventoryPage.secondPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHigh(parseInt(inventoryPage.secondPrice.slice(1)), parseInt(inventoryPage.firstPrice.slice(1)))).toBe(1);
      });
})

describe('Cart', () => {
    it('Cart number is equal to the amount of click on add to cart',  () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.firstBtnAddToCartClick();
        inventoryPage.secondBtnAddToCartClick();
        inventoryPage.thirdBtnAddToCartClick();
        inventoryPage.fourthBtnAddToCartClick();
        inventoryPage.fivethBtnAddToCartClick();
        inventoryPage.sixthBtnAddToCartClick();
        expect(parseInt(inventoryPage.numOfCart)).toBe(6);
        inventoryPage.firstBtnRemoveClick();
        inventoryPage.secondBtnRemoveClick();
        inventoryPage.thirdBtnRemoveClick();
        inventoryPage.fourthBtnRemoveClick();
        inventoryPage.fivethBtnRemoveClick();
        inventoryPage.sixthBtnRemoveClick();
      });
      it('Checks if the click to the cart redirects to its page', () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.cartBtnClick();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
      });
      
      it('Checks if clicking "add to cart" button adds to cart', () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.secondBtnAddToCartClick();
        inventoryPage.fivethBtnAddToCartClick();
        inventoryPage.cartBtnClick();
        expect(cartPage.cartList2).toBe('Sauce Labs Bike Light');
        expect(cartPage.cartList5).not.toBe('Sauce Labs Fleece Jacket');
        expect(cartPage.cartList5).toBe('Sauce Labs Onesie');
        loginPage.open('inventory.html');
        inventoryPage.secondBtnRemoveClick();
        inventoryPage.fivethBtnRemoveClick();
      });
})

describe('Options button', () => {
    it('All items button',  () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.allItemsBtnClick();
        expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
      });
      it('About button',  () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.aboutBtnClick();
        expect(browser).toHaveUrl("https://saucelabs.com/");
      });
      it('Log out button',  () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.logOutBtnClick();
        expect(browser).toHaveUrl("https://www.saucedemo.com/");
      });
      it('Reset app state button',  () => {
        loginPage.open('');
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.resetAppBtnClick();
        expect(inventoryPage.numOfCart).not.toBe(1);
      });
})

