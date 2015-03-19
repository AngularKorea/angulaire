export default ($stateProvider) => {
	$stateProvider
		.state('game', {
			url: '/game/play',
			templateUrl: require('./game.html'),
			controller: 'GameCtrl as vm',
			resolve: {
				gameData: function(dataService) {
					return dataService.get();
				}
			}
		});
}
