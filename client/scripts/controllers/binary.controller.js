var BinaryCtrl = function ($scope, $interval, $timeout) {
	
	var plusDown = false;
	var plusInterval = undefined;
	var minusDown = false;
	var minusInterval = undefined;
	var debounce = 100;
	var interation = 100;

	var prependZeros = function (binaryString) {
		for (var i = 0, len = (8 - binaryString.length); i < len; i++) {
			binaryString = "0" + binaryString;
		}

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
	};

	$scope.baseTenCheck = {
		regEx: /\d+/,
		test: function (value) {
			if (!value) {
				value = $scope.model.baseTen;
			}
			if (!this.regEx.test(value)) return false;
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

	$scope.baseTenChange = function (valid) {
		if (valid) {
			$scope.model.baseTen = parseInt($scope.model.baseTen, 10);
			$scope.model.baseTwo = calculateBinary($scope.model.baseTen);	
		}
	}

	$scope.baseTwoChange = function (valid) {
		if (valid) {
			$scope.model.baseTen = parseInt($scope.model.baseTwo, 2);
			$scope.model.baseTwo = prependZeros($scope.model.baseTwo);
		}
	};

	$scope.plusDown = function () {
		plusDown = true;
		increase();
		
		$timeout(function() {
			if (plusDown) {
				plusInterval = $interval(increase, interation);
			}
		}, debounce);
	};

	$scope.plusUp = function () {
		plusDown = false;
		if (angular.isDefined(plusInterval)) {
			$interval.cancel(plusInterval);
			plusInterval = undefined;
		}
	};

	$scope.minusDown = function () {
		minusDown = true;
		decrease();
		
		$timeout(function() {
			if (minusDown) {
				minusInterval = $interval(decrease, interation);
			}
		}, debounce);
	};

	$scope.minusUp = function () {
		minusDown = false;
		if (angular.isDefined(minusInterval)) {
			$interval.cancel(minusInterval);
			minusInterval = undefined;
		}
	};

	$scope.increase = increase;
	$scope.decrease = decrease;
}