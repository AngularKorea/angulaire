export default ngModule => {
	ngModule.config(($locationProvider, $urlRouterProvider, $provide) => {
		// overwrite the default behaviour for $uiViewScroll service (scroll to top of the page)
		$provide.decorator('$uiViewScroll', ['$delegate', '$window', function($delegate, $window) {
			return function() {
				$window.scrollTo(0, 0);
			};
		}]);

		$locationProvider.html5Mode(true);

		var devMode = false;
		var root = devMode ? '/game' : '/start';

		// set to '/start' for game, '/game' in development
		$urlRouterProvider.otherwise(root);

		// the `when` method says if the url is `/` redirect to `/dashboard` what is basically our `home` for this
		// application
		$urlRouterProvider.when('/', root);
	});
};
