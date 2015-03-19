export default ($stateProvider) => {
	$stateProvider
		.state('start.landing', {
			url: '/start',
			template: require('./landing.html')
		});
};

