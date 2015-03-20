class AnswerStatusCtrl {
	constructor(GameService) {
		this.GameService = GameService;
	}

	correctResponse() {
		return this.GameService.correctResponse();
	}
}
AnswerStatusCtrl.$inject = ['GameService'];

export default () => {
	return {
		template: require('./answerStatus.html'),
		controllerAs: 'vm',
		controller: AnswerStatusCtrl
	};
};
