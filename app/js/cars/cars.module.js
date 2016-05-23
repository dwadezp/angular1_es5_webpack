var angular = require('angular'),
    carInfo = require('./components/car_info.component.js'),
    carUser = require('./components/car_user.component.js'),
    carService = require('./services/car_info.services.js');

module.exports = angular.module("app.cars", [
  // components
  carInfo.name,
  carUser.name,
  //services
  carService.name

]);
