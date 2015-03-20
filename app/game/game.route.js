export default ($stateProvider) => {
	$stateProvider
		.state('game', {
			url: '/game',
			template: require('./game.html'),
			controllerAs: 'vm',
			controller: require('./game.ctrl'),
			resolve: {
				gameData: function(DataService) {
					return DataService.get();
				}
			}
		});
};
