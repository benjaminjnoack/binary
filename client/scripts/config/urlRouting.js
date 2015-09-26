var urlRouting = function ($urlRouterProvider) {
	$urlRouterProvider
		.when('', '/binary/one')//evidently '/' doesn't work...
		.otherwise('/home');
}