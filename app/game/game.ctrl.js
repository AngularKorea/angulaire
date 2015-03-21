class GameCtrl {
	constructor($state, gameData, GameService) {
		this.$state = $state;
		this.data = gameData;
		this.Game = GameService;
	}

}
GameCtrl.$inject = ['$state', 'gameData', 'GameService'];

export default GameCtrl;
