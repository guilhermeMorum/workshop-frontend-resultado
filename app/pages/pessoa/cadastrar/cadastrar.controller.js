'use strict';

app.controller('cadastrarPessoaCtrl', ['pessoaService', '$scope', '$mdToast', function(pessoaService, $scope, mdToast){

	var vm = $scope;

	vm.pessoa = {};

	vm.enviar = function(){
		pessoaService.save(vm.pessoa).then(function(resposta){
			alert('sucesso!');
			window.location.href = 'http://localhost:8000/#/home';
		});
	}

}]);