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
	}

	load(data) {
		this.data = data;
	}

	isSelected(index) {
		return this.selected === index;
	}

	correctResponse() {
		return this.correct;
	}

	selectAnswer(index) {
		this.selected = index;
		this.correct = this.isCorrect(index, this.current);
	}

	isCorrect(index, current) {
		return this.data[current].answers[index].isCorrect === 'TRUE';
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
			this.correct = null;
		}

	}
}
GameService.$inject = ['$state', 'SettingsService'];

export default GameService;
