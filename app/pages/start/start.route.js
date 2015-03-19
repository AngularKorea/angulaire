require('./start.scss');

export default ($stateProvider) => {
	$stateProvider
		.state('start', {
			url: '',
			template: require('./start.html')
		});
};

