describe('Protractor Test', function() {
  var carLink = element(by.id('carsLink')),
      contactsLink = element(by.id('contactsLink')),
      carsBindings = element(by.binding('$ctrl.carInfo')),
      assertCarText = 'So the car has',
      assertCarInfo = 'This car is quite silent';

  it('should open cars page and check text', function() {
    browser.get('http://localhost:1111/cars'); //overrides baseURL
    carLink.click().then(function() {
      expect(carsBindings.getText()).toBe(assertCarInfo);
    });
  });
});
