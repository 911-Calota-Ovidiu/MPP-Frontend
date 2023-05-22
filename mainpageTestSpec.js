describe('Protractor Testing', function() {
    it('to check the page title', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://mpporiginal.mooo.com/');
    browser.driver.getTitle().then(function(pageTitle) {
    expect(pageTitle).toEqual('Welcome');
    });
    });
    });