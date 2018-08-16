'use strict';

angular.module('workshop')
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){

	$routeProvider
	.when('/home', {
		templateUrl: 'pages/pessoa/listar/listar.html',
		controller: 'listarPessoaCtrl'
	})
	.when('/cadastrar', {
		templateUrl: 'pages/pessoa/cadastrar/cadastrar.html',
		controller: 'cadastrarPessoaCtrl'
	})
	.when('/editar/:id', {
		templateUrl: 'pages/pessoa/cadastrar/cadastrar.html',
		controller: 'editarPessoaCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	});

	$locationProvider.hashPrefix('');

}]);


var urlSistema = 'http://localhost:8080';