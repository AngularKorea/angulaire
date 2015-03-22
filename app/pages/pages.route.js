export default ($stateProvider) => {
	$stateProvider
		.state('pages', {
			url: '',
			abstract: true,
			template: require('./pages.html')
		});
};

