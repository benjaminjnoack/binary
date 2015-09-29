var BinaryCtrl = function ($scope) {
	
	var plusDown = false;
	var plusInterval = null;
	var minusDown = false;
	var minusInterval = null;
	var debounce = 100;
	var interation = 100;

	$('button.glyphicon-plus').mousedown(function(event) {
		plusDown = true;
		increase();
		
		setTimeout(function() {
			if (plusDown) {
				plusInterval = setInterval(increase, interation);
			}
		}, debounce)
	}).mouseup(function(event) {
		plusDown = false;
		clearTimeout(plusInterval);
	});

	$('button.glyphicon-minus').mousedown(function(event) {
		minusDown = true;
		decrease();
		
		setTimeout(function() {
			if (minusDown) {
				minusInterval = setInterval(decrease, interation);
			}
		}, debounce)
	}).mouseup(function(event) {
		minusDown = false;
		clearTimeout(minusInterval);
	});

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
			$scope.$apply();
		} 
	}

	var decrease = function () {
		if ($scope.model.baseTen > 0) {
			$scope.model.baseTen -= 1;
			$scope.model.baseTwo = calculateBinary($scope.model.baseTen);
			$scope.$apply();
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
		test: function (value) {
			if (!value) {
				value = $scope.model.baseTen;
			}
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
		if ($scope.baseTenCheck.test()) {
			$scope.model.baseTen = parseInt($scope.model.baseTen, 10);
			$scope.model.baseTwo = calculateBinary($scope.model.baseTen);	
		}
	}

	$scope.baseTwoChange = function () {
		if ($scope.baseTwoCheck.test()) {
			$scope.model.baseTen = parseInt($scope.model.baseTwo, 2);
			$scope.model.baseTwo = prependZeros($scope.model.baseTwo);
		}
	}

	$scope.increase = increase;
	$scope.decrease = decrease;
}