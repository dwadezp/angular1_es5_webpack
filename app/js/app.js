var angular = require('angular'),
    mainModule = require('./main/main.module.js');
require('@angular/router/angular1/angular_1_router');

angular.module('app',
    [
      mainModule.name,
      'ngComponentRouter'
    ])
  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })
  .value('$routerRootComponent', 'appMain');


