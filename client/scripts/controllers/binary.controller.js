var BinaryCtrl = function ($scope, $state) {
	$scope.page = 0;
	$scope.pages = ['binary.zero', 'binary.one'];

	$scope.navigate = function (page) {
		$scope.page = page;
		$state.go($scope.pages[page]);
	};
};