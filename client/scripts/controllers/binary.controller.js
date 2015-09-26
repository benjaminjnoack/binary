var BinaryCtrl = function ($scope) {
	$scope.model = {
		baseTwo: '',
		baseTen: 0
	}
	//add error for going above or below limit
	var increase = function () {
		if ($scope.model.baseTen < 255) {
			$scope.model.baseTen += 1;
			$scope.model.baseTwo = calculateBinary($scope.model.baseTen);
		} 
	}

	var decrease = function () {
		if ($scope.model.baseTen > 0) {
			$scope.model.baseTen -= 1;
			$scope.model.baseTwo = calculateBinary($scope.model.baseTen);
		} 
	}

	var calculateBinary = function (num) {
		var binaryString = (num >>> 0).toString(2);
		
		for (var i = 0, len = (8 - binaryString.length); i < len; i++) {
			binaryString = "0" + binaryString;
		};

		return binaryString;
	}

	$scope.testing = function () {
		return false;
	}

	$scope.increase = increase;
	$scope.decrease = decrease;
}