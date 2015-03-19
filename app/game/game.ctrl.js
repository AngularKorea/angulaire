class GameCtrl {
	constructor($state, gameData, gameSettings, AnswersService) {
		this.$state = $state;
		this.data = gameData;
		this.rounds = gameSettings.rounds;
		this.current = 0;
		this.selected = AnswersService.selected;
	}

	getAnswers() {
		return this.data[this.current].answers;
	}

	getQuestion() {
		return this.data[this.current].question;
	}

	submit() {

	}

	next() {
		if (this.current === this.rounds - 1) {
			this.$state.go('end');
		} else {
			this.current += 1;
		}
	}
}
GameCtrl.$inject = ['$state', 'gameData', 'gameSettings', 'AnswersService'];

export default GameCtrl;
