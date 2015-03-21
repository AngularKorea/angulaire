export default ($stateProvider) => {
	$stateProvider
		.state('end', {
			url: '/end',
			template: require('./end.html')
		});
};

