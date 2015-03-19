class AnswersService {
	constructor() {
		this.selected = null;
	}

	isSelected(index) {
		return this.selected === index;
	}

	selectAnswer(index) {
		this.selected = index;
		console.log(index);
	}

	checkAnswer(answer) {
		answer.isCorrect === 'TRUE' ? alert('Correct') : alert('Wrong');
	}
}

export default AnswersService;