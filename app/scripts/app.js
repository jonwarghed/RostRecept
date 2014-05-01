'use strict';

var myApp = angular.module('RostRecept', ['ngAnimate', 'ngRoute'])
  .constant('version', 'v0.1.0')
  .config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
//      .when('/features', {
//      templateUrl: 'views/features.html'
//     })
//    .when('/contact', {
//       templateUrl: 'views/contact.html'
//     })
      .otherwise({
        redirectTo: '/'
      });

  });

myApp.config(['$httpProvider', function($httpProvider) {
   $httpProvider.defaults.useXDomain = true;
}]);