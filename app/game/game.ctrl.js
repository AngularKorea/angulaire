class GameCtrl {
	constructor($state, gameData, SettingsService, AnswerService, $rootScope) {
		this.$state = $state;
		this.data = gameData;
		this.rounds = SettingsService.rounds;
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

}
GameCtrl.$inject = ['$state', 'gameData', 'SettingsService', 'AnswerService', '$rootScope'];

export default GameCtrl;
