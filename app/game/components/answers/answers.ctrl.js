class AnswersCtrl {
	constructor(gameSettings) {
		this.languages = gameSettings.getLanguage();
	}

	checkAnswer(answer) {
		answer.isCorrect === 'TRUE' ? alert('Correct') : alert('Wrong');
	}

	isSelected(index) {
		return this.selected === index;
	}
}
AnswersCtrl.$inject = ['gameSettings'];

export default AnswersCtrl;