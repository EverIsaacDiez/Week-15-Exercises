const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class inventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get filterOfProducts () { return $('#header_container > div.header_secondary_container > div.right_component > span > select')}
    get aToZFilter() { return $('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(1)')}
    get zToAFilter() { return $('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(2)')}
    get lowToHighFilter () { return $('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(3)')}
    get highToLowFilter () { return $('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(4)')} 
    //Name of products
    get firstProduct () { return $('#item_4_title_link > div').getText()}
    get secondProduct () { return $('#item_0_title_link > div').getText()}
    get thirdProduct () { return $('#item_1_title_link > div').getText()} 
    get fourthProduct () { return $('#item_5_title_link > div').getText()}
    get fivethProduct () {return $('#item_2_title_link > div').getText()}
    get sixthProduct () { return $('#item_3_title_link > div').getText()}
    //Price of products
    get firstPrice () { return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div').getText()}
    get secondPrice () { return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div').getText()}
    get thirdPrice () { return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > div').getText()}
    get fourthPrice () { return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div').getText()}
    get fivethPrice () { return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.pricebar > div').getText()}
    get sixthPrice () { return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div').getText()}
    //Button add to cart
    get firstBtnAddToCart () { return $('#add-to-cart-sauce-labs-backpack')}
    get secondBtnAddToCart () { return $('#add-to-cart-sauce-labs-bike-light')}
    get thirdBtnAddToCart () { return $('#add-to-cart-sauce-labs-bolt-t-shirt')}
    get fourthBtnAddToCart () { return $('#add-to-cart-sauce-labs-fleece-jacket')}
    get fivethBtnAddToCart () { return $('#add-to-cart-sauce-labs-onesie')}
    get sixthBtnAddToCart () { return $('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]')}
    //Number of cart
    get numOfCart () { return $('#shopping_cart_container > a[class=shopping_cart_link]').getText()}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async aToZClick () {
        this.filterOfProducts.click();
        this.AtoZFilter.click();
    }
    async zToAClick () {
      this.filterOfProducts.click();
      this.zToAFilter.click();
  }
  async lowToHighClick () {
    this.filterOfProducts.click();
    this.lowToHighFilter.click();
}  
async highToLowClick () {
  this.filterOfProducts.click();
  this.highToLowFilter.click();
}

async firstBtnAddToCartClick(){
  this.firstBtnAddToCart.click();
}
async secondBtnAddToCartClick(){
  this.secondBtnAddToCart.click();
}
async thirdBtnAddToCartClick(){
  this.thirdBtnAddToCart.click();
}
async fourthBtnAddToCartClick(){
  this.fourthBtnAddToCart.click();
}
async fivethBtnAddToCartClick(){
  this.fivethBtnAddToCart.click();
}
async sixthBtnAddToCartClick(){
  this.sixthBtnAddToCart.click();
}
//Check if word is less than word2
orderedLowToHigh(word, word2){
  const minimum = Math.min(word.length,word2.length);
  for(let i=0; i <= minimum-1; i++){
      if(word[i] > word2[i]) return 0;
      if(word[i] !== word2[i]) return 1;
  }
  return 1;
}

orderedPriceLowToHigh(num, num2){
  if(num <= num2) return 1;
  else return 0;
}
    /**
     *  overwrite specifc options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

module.exports = new inventoryPage();

