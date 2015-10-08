var BinaryOneCtrl = function ($scope) {
	
	$scope.and = false;
	$scope.andLeft = false;
	$scope.andRight = false;
	
	$scope.or = false;
	$scope.orLeft = false;
	$scope.orRight = false;
	
	$scope.xor = false;
	$scope.xorLeft = false;
	$scope.xorRight = false;
	
	$scope.nor = true;
	$scope.norLeft = false;
	$scope.norRight = false;

	var checkAnd = function(one, two) {
		return one && two;
	};

	var checkOr = function(one, two) {
		return one || two;
	};

	var checkXor = function(one, two) {
		return (checkOr(one, two) && !checkAnd(one, two));
	};

	var checkNor = function(one, two) {
		return (checkAnd(one, two) || !checkOr(one, two));
	};


	$scope.checkAnd = checkAnd;
	$scope.checkOr = checkOr;
	$scope.checkXor = checkXor;
	$scope.checkNor = checkNor;
};