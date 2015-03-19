export default ($stateProvider) => {
	$stateProvider
		.state('start.landing', {
			url: '/start',
			templateUrl: require('./landing.html'),
			controller: function() {
			}
		});
};

