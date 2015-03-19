class CheckAnswerService {
	constructor(AnswersService, dataService) {
		this.data = dataService;
		this.selected = AnswersService.selected;
	}

	checkAnswer() {
		console.log('check answer');
		//this.data.stored()[current].answers[this.selected].isCorrect === 'TRUE' ? console.log('Y') : console.log('N');
	}
}
CheckAnswerService.$inject = ['AnswerService', 'dataService'];

export default CheckAnswerService;