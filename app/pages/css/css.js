'use strict';

angular.module('workshop')
.controller('CssCtrl', ['$scope', function($scope) {

	var vm = $scope;

	vm.caixa = '#333333';

	vm.caixas = '#0099FF';

	vm.p = {
		color: '#FF9900',
		size: '20px'
	};

	vm.box = {
		hover: '#662041',
		active: '#FF0266'
	}

	vm.combining = {
		first: '#0099FF',
		second: {
			color1: '#FF0266',
			color2: '#0099FF'
		},
		third: {
			color1: '#FF0266',
			color2: '#0099FF'
		},
		fourth: {
			color1: '#FF0266',
			color2: '#0099FF',
			color3: '#FF9900',
			color4: '#0099FF',
			color5: '#FF0266',
			color6: '#0099FF'
		}
	};

	vm.functions = {
		calc: 'calc(100% - 300px)'
	};

}]);