module.exports = angular
  .module('app.cars.component.car_info', [])
  .component('carInfoComponent', {
    templateUrl: '/app/js/cars/components/car_info.template.html',
    controller: CarInfoController,
    transclude: true
  });

function CarInfoController(CarInfoService){
  'use strict';
  var ctrl = this,
      variableToPass = "This is some stuff from car info";
  ctrl.variableToPass = variableToPass;
  ctrl.carInfo = CarInfoService.getCarInfoByEngine('petrol');
  ctrl.carText = "So the car has";
  ctrl.functionToBePassed = functionToBePassed;

  function functionToBePassed() {
    console.log("This is function from CarInfoController.");
  }
}

