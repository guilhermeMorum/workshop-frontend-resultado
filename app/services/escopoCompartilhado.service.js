'use strict';

app.service('escopoCompartilhadoService', [function(){

	var objects = {};

	function set(name, value){
		objects[name] = value;
	}

	function get(name){
		return objects[name];
	}

	function clear(){
		objects = {};
	}

	return {
		get: get,
		set: set,
		clear: clear		
	}

}]);