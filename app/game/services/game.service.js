/**
 * Game Service
 * current | selected | data
 * select | checkAnswer
 */

class GameService {
	constructor($state, SettingsService) {
		this.data = null;
		this.$state = $state;
		this.rounds = SettingsService.rounds;
		this.selected = null;
		this.correct = null;
		this.current = 0;
		this.submitted = false;
	}

	load(data) {
		this.data = data;
	}

	getAnswers() {
		return this.data[this.current].answers;
	}

	getQuestion() {
		return this.data[this.current].question;
	}

	isSelected(index) {
		return this.selected === index;
	}

	isCorrect(index) {
		this.submitted = true;
		var options = ['gsx$a', 'gsx$b', 'gsx$c', 'gsx$d']; // google spreadsheets are terrible.
		this.correct = this.data[this.current][options[index]]['$t'] === 'TRUE';
		console.log(`submitted: ${this.submitted}`);
		console.log(`correct: ${this.correct}`);
		return this.correct;
	}

	isSubmitted() {
		console.log(`isSubmitted: ${this.submitted}`);
		return this.submitted;
	}

	nextQuestion() {
		// check if finished
		if (this.current === this.rounds - 1) {
			this.$state.go('end');
		} else {
			// next
			this.current += 1;
			// reset selected
			this.selected = null;
			this.submitted = false;
			this.correct = null;
		}

	}
}
GameService.$inject = ['$state', 'SettingsService'];

export default GameService;
