var BinaryCtrl = function ($scope, $state) {
	$scope.page = 0;
	$scope.pages = ['binary.zero', 'binary.one'];
	$scope.titles = ['Ones and Zeros', 'Logic Gates', 'Half Adder', 'Full Adder', '8-Bit Adder'];

	$scope.navigate = function (page) {
		$scope.page = page;
		$state.go($scope.pages[page]);
	};

	$scope.urls = {
		addition: '/static/views/binary.addition.html',
		and: '/static/views/binary.and.html',
		demo: '/static/views/binary.demo.html'
	};
};