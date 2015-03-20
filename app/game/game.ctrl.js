class GameCtrl {
	constructor($state, gameData, GameService) {
		this.$state = $state;
		this.data = gameData;
		this.current = GameService.current;
		this.selected = GameService.selected;
		this.getAnswers = GameService.getAnswers;
		this.getQuestion = GameService.getQuestion;
	}

}
GameCtrl.$inject = ['$state', 'gameData', 'GameService'];

export default GameCtrl;
