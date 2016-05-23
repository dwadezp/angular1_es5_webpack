'use strict';
module.exports = angular
  .module('app.cars.services.car_info', [])
  .factory('CarInfoService', CarInfoService);

function CarInfoService(){
  var service = {
    getCarInfoByEngine: getCarInfoByEngine
  };
  return service;

  function getCarInfoByEngine(engine) {
    if (engine === 'petrol') {
      return 'This car is quite silent';
    } else {
      return 'This car has diesel engine';
    }
  }
}

