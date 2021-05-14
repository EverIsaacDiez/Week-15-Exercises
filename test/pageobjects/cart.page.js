const Page = require('./page');

class cartPage extends Page {
    //Cart list products
    get cartList2 () { return $('#item_0_title_link > div').getText()}
    get cartList5 () { return $('#item_2_title_link > div').getText()}
    //Continue shopping button
    get contShopBtn () { return $('button[id="continue-shopping"]')}
    //Remove button from cart
    get removeFourth () { return $('button[id="remove-sauce-labs-fleece-jacket"]')}
    //Removed button from cart
    get removedFromCart () { return $('#cart_contents_container > div > div.cart_list > div[class="removed_cart_item"]').getAttribute('class')}

    async contShopBtnClick(){
        this.contShopBtn.click();
    }
    async removeFourthClick(){
        this.removeFourth.click();
    }
}

module.exports = new cartPage();