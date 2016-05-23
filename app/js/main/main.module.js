var angular = require('angular'),
    carsComponent = require('../cars/cars.module.js'),
    contactsComponent = require('../contacts/contacts.module.js'),
    mainComponent = require('./components/main.component.js');
module.exports = angular.module("app.main", [
  // components
  carsComponent.name,
  mainComponent.name,
  contactsComponent.name
]);
