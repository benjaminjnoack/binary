var BinaryCtrl = function ($scope) {
	$scope.baseTwoModel = "00000000";
	$scope.baseTenModel = 0;

	var increase = function () {
		if ($scope.baseTenModel < 255) {
			$scope.baseTenModel += 1;
			$scope.baseTwoModel = calculateBinary();
		} 
	}

	var decrease = function () {
		if ($scope.baseTenModel > 0) {
			$scope.baseTenModel -= 1;
			$scope.baseTwoModel = calculateBinary();
		} 
	}

	var calculateBinary = function () {
		// var ones = twos = fours = eights = sixteens = thirtyTwos = sixtyFours = oneTwentyEights = "0";
		var binaryString = ($scope.baseTenModel >>> 0).toString(2);
		var neededZeros = 8 - binaryString.length;
		if (neededZeros) {
			for (var i = 0; i < neededZeros; i++) {
				binaryString = "0" + binaryString;
			};
		}

		return binaryString;
	}

	$scope.increase = increase;
	$scope.decrease = decrease;
}