var BinaryZeroCtrl = function ($scope, $interval, $timeout) {
	
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
	};

	var increase = function () {
		var model = $scope.models.demo;
		if (model.baseTen < 255) {
			model.baseTen += 1;
			model.baseTwo = calculateBinary(model.baseTen);
		} 
	};

	var decrease = function () {
		var model = $scope.models.demo;
		if (model.baseTen > 0) {
			model.baseTen -= 1;
			model.baseTwo = calculateBinary(model.baseTen);
		} 
	};

	var calculateBinary = function (num) {
		var binaryString = (num >>> 0).toString(2);	
		return prependZeros(binaryString);
	};

	var updateSums = function () {
		var model = $scope.models.sum;
		model.baseTen = $scope.models.augend.baseTen + $scope.models.addend.baseTen;
		model.baseTwo = calculateBinary(model.baseTen);
	}

	$scope.baseTenCheck = {
		regEx: /^[\d]{1,3}$/,
		test: function (value) {
			if (!this.regEx.test(value)) return false;
			var numValue = parseInt(value, 10);
			return numValue >= 0 && numValue <= 255;
		}
	}

	$scope.baseTwoCheck = {
		regEx: /^[01]{1,8}$/,
		test: function (value) {
			return this.regEx.test(value);
		}
	}

	$scope.baseTenChange = function (valid, modelName) {
		if (valid) {
			var model = $scope.models[modelName];
			model.baseTen = parseInt(model.baseTen, 10);
			model.baseTwo = calculateBinary(model.baseTen);
			if (modelName === 'augend' || modelName === 'addend') {
				updateSums();
			}
		}
	};

	$scope.baseTwoChange = function (valid, modelName) {
		if (valid) {
			var model = $scope.models[modelName];
			model.baseTen = parseInt(model.baseTwo, 2);
			model.baseTwo = prependZeros(model.baseTwo);
			if (modelName === 'augend' || modelName === 'addend') {
				updateSums();
			}
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
	$scope.models = {
		demo: {
			baseTwo: calculateBinary(0),
			baseTen: 0
		},
		augend: {
			baseTwo: calculateBinary(0),
			baseTen: 0
		},
		addend: {
			baseTwo: calculateBinary(0),
			baseTen: 0
		},
		sum: {
			baseTwo: calculateBinary(0),
			baseTen: 0
		}
	};
}