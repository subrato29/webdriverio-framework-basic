class Internet {
	get pageHeader() {
		return $("//h1[contains(text(),'Welcome')]")
	}

	get subHeader() {
		return $("//h2[contains(text(),'Available')]")
	}

	get pageFooter() {
		return $("//div[@id='page-footer']")
	}

	get parent() {
		return $('ul')
	}

	get childElements() {
		return this.parent.$$('li')
	}

	get firstLink() {
		return $("//ul/li[1]/a")
	}

	get username() {
		return $("//input[@name='username']")
	}

	get password() {
		return $("//input[@name='password']")
	}

	get loginPage() {
		return $("//h2[text()='Login Page']")
	}

	get formAuth() {
		return $("//a[text()='Form Authentication']")
	}

	linkIndex(index) {
		return $("//ul/li["+index+"]/a")
	}

	checkboxIndex(index) {
		return $("//input[@type='checkbox']["+index+"]")
	}















	getLiText() {
		this.childElements.filter((elements) => {
			console.log(elements.getText())
		})
	}

	clickFirstLink() {
		if(this.firstLink.isDisplayed() === true) {
			this.firstLink.click()
		}
		browser.pause(2000)
	}

	clickLinkIndex(index) {
		this.linkIndex(index).waitForDisplayed();
		this.linkIndex(index).click();
	}

	clickCheckboxIndex(index) {
		this.checkboxIndex(index).waitForDisplayed();
		this.checkboxIndex(index).click();
		browser.pause(2000)
	}

	enterUsername(text) {
		this.username.waitForDisplayed();
		this.username.setValue(text)
	}

	enterPassword(text) {
		this.password.waitForDisplayed();
		this.password.setValue(text)
	}

	clickElement(xpath) {
		$(xpath).waitForDisplayed();
		$(xpath).click();
	}


}
module.exports = new Internet()