'user strict';

app.controller('listarPessoaCtrl', ['pessoaService', '$scope', 'escopoCompartilhadoService', '$location', 
	function(pessoaService, $scope, escopoCompartilhadoService, $location){

	var vm = $scope;

	$scope.listaUsuarios = [];

	vm.getAll = function(){
		pessoaService.getAll().then(function(resposta){
			$scope.listaUsuarios = resposta.data;
		});
	}

	function init(){
		vm.getAll();
	}

	init();

}]);