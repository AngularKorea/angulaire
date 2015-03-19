class GameCtrl {
	constructor($state, gameData, gameSettings) {
		this.$state = $state;
		this.data = gameData;
		this.current = 0;
		this.selected = null;
		this.rounds = gameSettings.rounds;
	}

	select(index) {
		this.selected = index;
		console.log(index);
	}

	getAnswers() {
		return this.data[vm.current].answers;
	}

	getQuestion() {
		console.log(this.data);
		//return this.data[vm.current].question;
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
GameCtrl.$inject = ['$state', 'gameData', 'gameSettings'];

export default GameCtrl;
