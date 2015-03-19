export default ngModule => {
	ngModule.config(($locationProvider, $urlRouterProvider, $provide) => {
		// overwrite the default behaviour for $uiViewScroll service (scroll to top of the page)
		$provide.decorator('$uiViewScroll', ['$delegate', '$window', function($delegate, $window) {
			return function() {
				$window.scrollTo(0, 0);
			};
		}]);

		$locationProvider.html5Mode(true);

		// for any unmatched url, send to 404 page (Not page found)
		$urlRouterProvider.otherwise('/game/start');

		// the `when` method says if the url is `/` redirect to `/dashboard` what is basically our `home` for this
		// application
		$urlRouterProvider.when('/', '/game/start');
	});
};
