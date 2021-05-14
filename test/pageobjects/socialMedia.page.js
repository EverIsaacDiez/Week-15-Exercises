const Page = require('./page')

class socialMediaPage extends Page {
  get btnTwitter() {
    return $('li[class="social_twitter"] > a').getAttribute('href');
  }
  get btnFacebook() {
    return $('li[class="social_facebook"] > a').getAttribute('href');
  }
  get btnLinkedin() {
    return $('li[class="social_linkedin"]>a').getAttribute('href');
  }

  async twitterClick() {
    this.btnTwitter.click()
  }
  async facebookClick() {
    this.btnFacebook.click()
  }
  async linkedinClick() {
    this.btnLinkedin.click()
  }
  open(path) {
    return super.open(path)
  }
}

module.exports = new socialMediaPage()

