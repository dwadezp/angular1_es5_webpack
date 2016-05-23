var car_info_service = require('./car_info.services.js');
describe('Сar info service: ', function() {
  var service,
      PETROL_MSG = 'This car is quite silent',
      PETROL = 'petrol';
  beforeEach(angular.mock.module(car_info_service.name));

  beforeEach(inject(function(_CarInfoService_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    service = _CarInfoService_;
  }));

  it('should be defined', function() {
    expect(service).toBeDefined();
  });

  it('should return valid msg for petrol', function() {
    expect(service.getCarInfoByEngine(PETROL)).toBe(PETROL_MSG);
  });
});
