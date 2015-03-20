class GameCtrl {
	constructor($state, gameData, GameService) {
		this.$state = $state;
		this.data = gameData;
		this.current = GameService.current;
		this.selected = GameService.selected;
	}

	getAnswers() {
		return this.data[this.current].answers;
	}

	getQuestion() {
		return this.data[this.current].question;
	}
}
GameCtrl.$inject = ['$state', 'gameData', 'GameService'];

export default GameCtrl;
