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
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.firstPrice.slice(1)), parseInt(inventoryPage.secondPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.secondPrice.slice(1)), parseInt(inventoryPage.thirdPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.thirdPrice.slice(1)), parseInt(inventoryPage.fourthPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.fourthPrice.slice(1)), parseInt(inventoryPage.fivethPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.fivethPrice.slice(1)), parseInt(inventoryPage.sixthPrice.slice(1)))).toBe(1);
    });

    it('Price high to low',  () => {
        inventoryPage.open('');
        loginPage.login('standard_user','secret_sauce');
        inventoryPage.highToLowClick();
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.sixthPrice.slice(1)), parseInt(inventoryPage.fivethPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.fivethPrice.slice(1)), parseInt(inventoryPage.fourthPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.fourthPrice.slice(1)), parseInt(inventoryPage.thirdPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.thirdPrice.slice(1)), parseInt(inventoryPage.secondPrice.slice(1)))).toBe(1);
        expect(inventoryPage.orderedPriceLowToHihg(parseInt(inventoryPage.secondPrice.slice(1)), parseInt(inventoryPage.firstPrice.slice(1)))).toBe(1);
      });
})
/*
describe('', () => {
    it('',  () => {
        loginPage.open('');
        loginPage.login('', '');
        expect(loginPage.errorLoginMssg).toBe("Epic sadface: Username is required");
      });
})
*/