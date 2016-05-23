/**
 * This file is an entry point for angular tests.
 * Avoids some weird issues when using webpack + angular.
 * */
var angular = require('angular');

var testsContext = require.context('./', true, /.spec$/);
testsContext.keys().forEach(testsContext);
