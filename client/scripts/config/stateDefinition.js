var stateDefinition = function ($stateProvider) {
	var viewDir = '/static/views/';
	
	var getTemp = function (viewName) {
		return viewDir + viewName + ".html";
	};

	$stateProvider
		.state('home', {
			url: '/home',
			template: '<p>Hello World</p>'
		})
		.state('binary', {
			url: '/binary',
			templateUrl: getTemp('binary'),
			controller: 'BinaryCtrl'
		})
		.state('binary.zero', {
			url: '/zero',
			templateUrl: getTemp('binary.zero'),
			controller: 'BinaryZeroCtrl'
		})
		.state('binary.one', {
			url: '/one',
			templateUrl: getTemp('binary.one'),
			controller: 'BinaryOneCtrl'
		});
}