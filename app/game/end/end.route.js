export default ($stateProvider) => {
	$stateProvider
		.state('end', {
			url: '/end',
			templateUrl: require('./end.html'),
			controller: function() {
			}
		});
};

