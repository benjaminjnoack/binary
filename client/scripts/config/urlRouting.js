var urlRouting = function ($urlRouterProvider) {
	$urlRouterProvider
		.when('', '/binary/zero')//evidently '/' doesn't work...
		.otherwise('/home');
}