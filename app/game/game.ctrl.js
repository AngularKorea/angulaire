class GameCtrl {
	constructor($state, gameData, gameSettings, AnswerService, $rootScope) {
		this.$state = $state;
		this.data = gameData;
		this.rounds = gameSettings.rounds;
		this.current = 0;
		this.selected = AnswerService.selected;
		$rootScope.$on('select', function() {
			this.selected = AnswerService.selected;
		})
	}

	getAnswers() {
		return this.data[this.current].answers;
	}

	getQuestion() {
		return this.data[this.current].question;
	}

	next() {
		if (this.current === this.rounds - 1) {
			this.$state.go('end');
		} else {
			this.current += 1;
		}
	}
}
GameCtrl.$inject = ['$state', 'gameData', 'gameSettings', 'AnswerService', '$rootScope'];

export default GameCtrl;
