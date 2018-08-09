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

window.onscroll = function changeNav(){
    var navBar = document.getElementById('resize-button'),
          secondSection = document.getElementById('content'),
          secondSectionTop = secondSection.getBoundingClientRect().top, 
          navBarHeight = navBar.getBoundingClientRect().height;

    if(secondSectionTop <= navBarHeight) {
          navBar.className = ('');
    } else if(secondSectionTop >= navBarHeight) {
         navBar.className =  ('open');
    }
}
