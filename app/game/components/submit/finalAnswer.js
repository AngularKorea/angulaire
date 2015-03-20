class FinalAnswerCtrl {
	constructor(GameService) {
		this.answerSelected = GameService.selected;
		this.next = GameService.nextQuestion;
	}
}
FinalAnswerCtrl.$inject = ['GameService'];

export default () => {
	return {
		scope: {},
		bindToController: true,
		controllerAs: 'vm',
		controller: FinalAnswerCtrl,
		template: require('./finalAnswer.html')
	};
};
