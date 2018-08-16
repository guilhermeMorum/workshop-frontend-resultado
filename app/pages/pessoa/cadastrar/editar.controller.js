'use strict';

app.controller('editarPessoaCtrl', ['$routeParams', 'pessoaService', '$scope', 'escopoCompartilhadoService', '$location', 
	function($routeParams, pessoaService, $scope, escopoCompartilhadoService, $location){

	var vm = $scope;

	vm.pessoa = {};

	function init(){
		var pessoa = escopoCompartilhadoService.get('pessoa');
		if(pessoa){
			vm.pessoa = pessoa;
		} else {
			pessoaService.get($routeParams.id).then(function(resposta){
				vm.pessoa = resposta.data;
			});	
		}
	}

	vm.enviar = function(){
		pessoaService.update(vm.pessoa, vm.pessoa.id).then(function(resposta){
			alert('sucesso');
			$location.path("/home");
		});
	}

	init();

}]);