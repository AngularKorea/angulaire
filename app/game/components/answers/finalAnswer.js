class FinalAnswerCtrl {
	constructor() {
		//this.checkAnswer = CheckAnswerService.checkAnswer;
	}
}
FinalAnswerCtrl.$inject = [];

export default () => {
	return {
		scope: {},
		bindToController: true,
		controllerAs: 'vm',
		controller: FinalAnswerCtrl,
		template: require('./finalAnswer.html')
	};
};
