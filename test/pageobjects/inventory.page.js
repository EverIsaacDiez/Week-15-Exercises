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
    //Button remove to cart
    get firstBtnRemove () { return $('#remove-sauce-labs-backpack')}
    get secondBtnRemove () { return $('#remove-sauce-labs-bike-light')}
    get thirdBtnRemove () { return $('#remove-sauce-labs-bolt-t-shirt')}
    get fourthBtnRemove () { return $('#remove-sauce-labs-fleece-jacket')}
    get fivethBtnRemove () { return $('#remove-sauce-labs-onesie')}
    get sixthBtnRemove () { return $('button[id="remove-test.allthethings()-t-shirt-(red)"]')}
    //Number of cart
    get numOfCart () { return $('#shopping_cart_container > a[class=shopping_cart_link]').getText()}
    //Cart button
    get cartBtn () { return $('div[id="shopping_cart_container"] > a')}
    //Options buttons
    get optionsBtn () { return $('#react-burger-menu-btn')}
    get allItemsBtn () { return $('#inventory_sidebar_link')}
    get aboutBtn () { return $('#about_sidebar_link')}
    get logOutBtn () { return $('#logout_sidebar_link')}
    get resetAppBtn () { return $('#reset_sidebar_link')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
  //Options clicks
  async allItemsBtnClick () {
    this.optionsBtn.click();
    this.allItemsBtn.click();
  }
  async aboutBtnClick () {
    this.optionsBtn.click();
    this.aboutBtn.click();
  }
  async logOutBtnClick () {
    this.optionsBtn.click();
    this.logOutBtn.click();
  }
  async resetAppBtnClick () {
    this.optionsBtn.click();
    this.resetAppBtn.click();
  }
  //Filter clicks
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
//Click on add cart buttons
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
  //Cart click
  async cartBtnClick(){
    this.cartBtn.click();
  }
  //Remove click
  async firstBtnRemoveClick(){
    this.firstBtnRemove.click();
  }
  async secondBtnRemoveClick(){
    this.secondBtnRemove.click();
  }
  async secondBtnRemoveClick(){
    this.secondBtnRemove.click();
  }
  async thirdBtnRemoveClick(){
    this.thirdBtnRemove.click();
  }
  async fourthBtnRemoveClick(){
    this.fourthBtnRemove.click();
  }
  async fivethBtnRemoveClick(){
    this.fivethBtnRemove.click();
  }
  async sixthBtnRemoveClick(){
    this.sixthBtnRemove.click();
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

