'use strict';

app.directive('listaPessoas', ['escopoCompartilhadoService', 'pessoaService', '$location',
 function(escopoCompartilhadoService, $location, pessoaService){
	return {
		scope: {
			pessoas: '='
		},
		templateUrl: 'directives/listaPessoas/listaPessoas.html',
		controller: function($scope, escopoCompartilhadoService, $location, pessoaService){
			var vm = $scope;

			vm.editar = function(pessoa){
				escopoCompartilhadoService.set('pessoa', pessoa);
				$location.path('/editar/'+pessoa.id);
			}

			vm.deletar = function(id, index){
				pessoaService.remove(id).then(function(resposta){
					alert('sucesso');
					vm.pessoas.splice(index, 1);
				});
			}
		}
	}
}]);