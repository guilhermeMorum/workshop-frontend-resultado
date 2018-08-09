'use strict';

angular.module('workshop', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

  $routeProvider
  .when('/home', {
            templateUrl : 'pages/home/home.html',
            controller  : 'HomeCtrl'
        })
  .when('/css', {
            templateUrl : 'pages/css/css.html',
            controller  : 'CssCtrl'
        })
  .otherwise({redirectTo: '/home'});
  $locationProvider.hashPrefix('');

}]);
