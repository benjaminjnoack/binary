var MotherCtrl = function ($scope, $timeout) {

	var checkMobileView = function () {
		return window.innerWidth < 768;
	};
	
	$scope.mobileView = checkMobileView();
	
	$(window).resize(function () {
		$timeout(function () {
			$scope.mobileView = checkMobileView();
		});
	});
};