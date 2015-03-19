export default ($stateProvider) => {
	$stateProvider
		.state('start', {
			url: '/game',
			templateUrl: require('./start.html'),
			controller: function() {
				require('./start.scss');
			}
		});
};

