export default ($stateProvider) => {
	$stateProvider
		.state('pages.end', {
			url: '/end',
			template: require('./end.html')
		});
};

