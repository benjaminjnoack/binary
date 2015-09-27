var BinaryCtrl = function ($scope) {
	

	var prependZeros = function (binaryString) {
		for (var i = 0, len = (8 - binaryString.length); i < len; i++) {
			binaryString = "0" + binaryString;
		};

		return binaryString;
	}

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
		
		return prependZeros(binaryString);
	}

	$scope.model = {
		baseTwo: calculateBinary(0),
		baseTen: 0
	}

	$scope.baseTenCheck = {
		test: function (value) {
			var numValue = parseInt(value, 10);
			return value >= 0 && value <= 255;
		}
	}

	$scope.baseTwoCheck = {
		regEx: /^[01]{1,8}$/,
		test: function (value) {
			if (!value) {
				value = $scope.model.baseTwo;
			}
			return this.regEx.test(value);
		}
	}

	$scope.baseTenChange = function () {
		if (true) {
			$scope.model.baseTwo = calculateBinary($scope.model.baseTen);	
		}
	}

	$scope.baseTwoChange = function () {

		if ($scope.baseTwoCheck.test()) {
			$scope.model.baseTwo = prependZeros($scope.model.baseTwo);
			$scope.model.baseTen = parseInt($scope.model.baseTwo, 2);
		}
	}

	$scope.increase = increase;
	$scope.decrease = decrease;
}