'use strict';

angular.module('workshop', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate'
]);

var app = angular.module('workshop');

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