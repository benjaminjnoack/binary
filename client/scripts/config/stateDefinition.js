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
		.state('binary', {//place holder state, should be the main content wrapper for this tutorial
			abstract: true,
			url: '/binary',
			templateUrl: getTemp('binary'),
			controller: 'BinaryCtrl'
		})
		.state('binary.zero', {
			url: '/zero',
			templateUrl: getTemp('binary.zero'),
			controller: 'BinaryZeroCtrl'//could use as syntax, or a provider like the templatez
		})
		.state('binary.one', {
			url: '/one',
			template: '<p>Hello World</p>'
		});
}