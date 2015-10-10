var MotherCtrl = function ($scope) {

	var checkMobileView = function () {
		console.log(window.innerWidth < 768)
		return window.innerWidth < 768;
	};
	
	$scope.mobileView = checkMobileView();
	
	$(window).resize(function () {
		$scope.mobileView = checkMobileView();
	});
};