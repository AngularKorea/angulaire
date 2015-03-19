require('./start.scss');

export default ($stateProvider) => {
	$stateProvider
		.state('start', {
			url: '/game',
			templateUrl: require('./start.html'),
			controller: function() {
			}
		});
};

