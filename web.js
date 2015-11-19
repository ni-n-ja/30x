var app = angular.module('myApp', []);
app.controller('myController', function($scope) {
	/*
	todo
	read ->	perse json
	onKeypress -> manuve cut

	$scope.next;
	$scope.now;
	$scope.back;
	*/
	$scope.cut = 0;
	$scope.scene = [{
		'background': '1-1',
		'text': 'テスト用の文章です。べ、べつにあんたのにために書いた訳じゃないんだからね　		エンターキーを押せ',
		'charactor': ''

	}, {
		'background': '1-2',
		'text': '軟式grobeいきます',
		'charactor': 'human'
	}, {
		'background': '1-3',
		'text': 'アホだなー',
		'charactor': 'human'
	}, {
		'background': '1-4',
		'text': 'そうだよアホだよ',
		'charactor': 'human'
	}, {
		'background': '1-3',
		'text': 'バカだなー',
		'charactor': 'human'
	}, {
		'background': '1-4',
		'text': 'それがどうした　バカだよ',
		'charactor': 'human'
	}, {
		'background': '1-2',
		'text': '以上です',
		'charactor': 'human'
	}];
	$scope.backimg = "img/" + $scope.scene[$scope.cut].background + ".png";

	$scope.onKeydown = function(e) {

		if (e.which == 13) {
			if ($scope.cut + 1 == $scope.scene.length) {
				$scope.cut = 0;
			}
			else {
				$scope.cut++;
			}
			$scope.backimg = "img/" + $scope.scene[$scope.cut].background + ".png";

		}
	};

});