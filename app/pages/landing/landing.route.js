export default ($stateProvider) => {
	$stateProvider
		.state('pages.landing', {
			url: '/start',
			template: require('./landing.html')
		});
};

