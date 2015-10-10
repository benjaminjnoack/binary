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

	$scope.nand = true;
	$scope.nandLeft = false;
	$scope.nandRight = false;

	var checkAnd = function(a, b) {
		return a && b;
	};

	var checkOr = function(a, b) {
		return a || b;
	};

	var checkXor = function(a, b) {
		return (checkOr(a, b) && !checkAnd(a, b));
	};

	var checkNor = function(a, b) {
		return !checkOr(a, b);
	};

	var checkNand = function (a, b) {
		return !checkAnd(a, b);
	}


	$scope.checkAnd = checkAnd;
	$scope.checkOr = checkOr;
	$scope.checkXor = checkXor;
	$scope.checkNor = checkNor;
	$scope.checkNand = checkNand;

	$scope.gates = [
		{ name: 'AND', path: '/static/views/binary.and.html', img: '/static/assets/AND_ANSI.svg' },
		{ name: 'OR', path: '/static/views/binary.or.html', img: '/static/assets/OR_ANSI.svg' },
		{ name: 'NAND', path: '/static/views/binary.nand.html', img: '/static/assets/NAND_ANSI.svg' },
		{ name: 'NOR', path: '/static/views/binary.nor.html', img: '/static/assets/NOR_ANSI.svg' },
		{ name: 'XOR', path: '/static/views/binary.xor.html', img: '/static/assets/XOR_ANSI.svg' }
	];
};