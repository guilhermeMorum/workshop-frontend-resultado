'use strict';

angular.module('workshop')
.controller('MaterialCtrl', [function() {

	function init(){
		formatCode();
	}

	function formatCode(){
		var codeable = document.getElementsByClassName('codeable');
		for(var i = 0; i < codeable.length; i++){
			console.log(insertClasses(codeable[i].innerHTML));
		}
	}

	function insertClasses(code){
		return code.replace(/(\&lt;.+\&gt;\&lt;\/.+\&gt;)/g, "_$1_");
	}

	init();

}]);