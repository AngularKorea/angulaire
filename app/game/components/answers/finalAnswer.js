class FinalAnswerCtrl {
	constructor(CheckAnswerService) {
		this.checkAnswer = CheckAnswerService.checkAnswer;
	}
}
FinalAnswerCtrl.$inject = ['CheckAnswerService'];

export default () => {
	return {
		scope: {},
		bindToController: true,
		controllerAs: 'vm',
		controller: FinalAnswerCtrl,
		template: require('./finalAnswer.html')
	};
};
