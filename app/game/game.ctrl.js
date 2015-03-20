class GameCtrl {
	constructor($state, gameData, GameService) {
		this.$state = $state;
		this.data = gameData;
		this.Game = GameService;
		this.current = GameService.current;
		this.getAnswers = GameService.getAnswers;
		this.getQuestion = GameService.getQuestion;
	}

}
GameCtrl.$inject = ['$state', 'gameData', 'GameService'];

export default GameCtrl;
