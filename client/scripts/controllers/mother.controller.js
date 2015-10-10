var MotherCtrl = function ($scope, $timeout) {

	var checkMobileView = function () {
		console.log(window.innerWidth < 768)
		return window.innerWidth < 768;
	};
	
	$scope.mobileView = checkMobileView();
	
	$(window).resize(function () {
		$timeout(function () {
			$scope.mobileView = checkMobileView();
		});
	});
};