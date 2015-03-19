export default ($stateProvider) => {
	$stateProvider
		.state('start.landing', {
			url: '/welcome',
			templateUrl: require('./landing.html')
		});
};

