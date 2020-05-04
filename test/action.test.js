const internetPage = require('../pages/internet.page')
const data = require('../data/testdata')

describe('Test element actions', function(){
	it('Click element', () => {
		browser.url('/')
		internetPage.clickFirstLink();
		expect(browser.getUrl()).equals('https://the-internet.herokuapp.com/abtest')
		//browser.debug()
	})

	it('Click check box', () => {
		browser.url('/');
		internetPage.clickLinkIndex(6);
		internetPage.clickCheckboxIndex(1);
		expect(internetPage.checkboxIndex(1).isSelected()).equals(true);
	})

	it('Uncheck the checkbox', () => {
		internetPage.clickCheckboxIndex(1);
		expect(internetPage.checkboxIndex(1).isSelected()).equals(false);
	})

	it('Entering username', () => {
		browser.url(`${browser.options.baseUrl}/login`)
		internetPage.enterUsername(data.userName)
		assert.equal(data.userName, internetPage.username.getValue());
	})

	it('Entering password', () => {
		browser.url(`${browser.options.baseUrl}/login`)
		internetPage.enterPassword(data.password)
		assert.equal(data.password, internetPage.password.getValue());
	})

	it('Wait Until Test', () => {
		browser.url('/')
		internetPage.clickElement(internetPage.formAuth)
		browser.waitUntil(() => {
			return internetPage.loginPage.getText() === 'Login Page'
		}, 6000, 'Expecting login page to appear')
		assert.equal('Login Page', internetPage.loginPage.getText())
		browser.pause(3000)
	})

})