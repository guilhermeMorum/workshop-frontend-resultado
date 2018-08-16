'user stric';

app.service('pessoaService', ['$http', function($http){

	var getAll = function(){
		return $http.get(urlSistema+'/pessoas/api');
	}

	var get = function(id){
		return $http.get(urlSistema+'/pessoas/api/'+id);
	}

	var remove = function(id){
		return $http.delete(urlSistema+'/pessoas/api/'+id);
	}

	var save = function(body){
		return $http.post(urlSistema+'/pessoas/api', body);
	}

	var update = function(body, id){
		return $http.put(urlSistema+'/pessoas/api/'+id, body);
	}

	return {
		getAll: getAll,
		get: get,
		save: save,
		update: update,
		remove: remove
	}

}]);