var stateDefinition = function ($stateProvider) {
	var viewDir = '/static/views/';
	
	var getTemp = function (viewName) {
		return viewDir + viewName + ".html";
	}

	$stateProvider
		.state('home', {
			url: '/home',
			template: '<p>Hello World</p>'
		})
		.state('binary', {//place holder state, should be the main content wrapper for this tutorial
			abstract: true,
			url: '/binary',
			template: '<ui-view/>'
		})
		.state('binary.one', {
			url: '/one',
			templateUrl: getTemp('binary-one'),
			controller: 'BinaryCtrl'//could use as syntax, or a provider like the templatez
		});
}