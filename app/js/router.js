var angular = require('angular');
angular.module("app").config(function($locationProvider) {
  $locationProvider.html5Mode({enabled:true});
});
