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
      });
})

/*
describe('SEGUIR ACA', () => {
    it('Check if add to cart',  () => {
        loginPage.open('');
        loginPage.login('', '');
        expect(loginPage.errorLoginMssg).toBe("Epic sadface: Username is required");
      });
})
*/