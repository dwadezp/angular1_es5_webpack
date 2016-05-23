  'use strict';
  module.exports = angular
    .module('app.cars.component.car_user', [])
    .component('carUserComponent', {
      templateUrl: '/app/js/cars/components/car_user.template.html',
      bindings: {
        variableParam: '<',
        stringParam: '@',
        functionToPass: '&'
      },
      controller: CarUserController
    });

  function CarUserController(CarInfoService){

    var ctrl = this;
    ctrl.functionToPass();
  }


