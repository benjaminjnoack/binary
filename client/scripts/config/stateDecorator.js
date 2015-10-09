//http://stackoverflow.com/questions/22985988/angular-ui-router-get-state-info-of-tostate-in-resolve/27255909#27255909
var stateDecorator = function($provide) {
	$provide.decorator('$state', function($delegate, $rootScope) {
		$rootScope.$on('$stateChangeStart', function(event, state, params) {
			$delegate.next = state;
			$delegate.toParams = params;
		});
		return $delegate;
	});
};