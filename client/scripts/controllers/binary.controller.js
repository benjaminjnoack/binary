var BinaryCtrl = function ($scope, $state) {
	
	var checkNextState = function () {
		var page = null;
		switch ($state.next.name) {
			case 'binary.zero':
				page = 0;
				break;
			case 'binary.one':
				page = 1;
				break;
		}
		return page;
	}

	$scope.page = checkNextState();
	$scope.$on('$stateChangeStart', function () {
		$scope.page = checkNextState();
	});

	$scope.pages = ['binary.zero', 'binary.one'];
	$scope.titles = ['Ones and Zeros', 'Logic Gates', 'Half Adder', 'Full Adder', '8-Bit Adder'];

	$scope.navigate = function (page) {
		$scope.page = page;
		$state.go($scope.pages[page]);
	};
};