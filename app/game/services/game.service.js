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
		this.currentQuestion = null;
		this.currentAnswers = null;
	}

	load(data) {
		this.data = data;
		this.getQuestion();
		this.getAnswers();
	}

	getQuestion() {
		this.currentQuestion = this.data[this.current].question;
	}

	getAnswers() {
		this.currentAnswers = this.data[this.current].answers;
	}

	isSelected(index) {
		return this.selected === index;
	}

	isCorrect(index) {
		this.submitted = true;
		this.correct = this.data[this.current].answers[index].isCorrect === 'TRUE';
		return this.correct;
	}

	isSubmitted() {
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
			this.getQuestion();
			this.getAnswers();
		}

	}
}
GameService.$inject = ['$state', 'SettingsService'];

export default GameService;
