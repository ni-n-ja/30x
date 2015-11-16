var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
	$scope.message = 'Hello world!';
	$scope.hoge = function() {
		console.log('aaa');
	};
	$scope.onKeydown = function(e) {
		console.log(e);
		if (e.which == 13) {

		}
	};
});
