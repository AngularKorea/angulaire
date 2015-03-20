class AnswerResponseCtrl {
	constructor(GameService) {
		this.GameService = GameService;
	}

	correctResponse() {
		return this.GameService.correctResponse();
	}
}
AnswerResponseCtrl.$inject = ['GameService'];

export default () => {
	return {
		template: require('./answerResponse.html'),
		controllerAs: 'vm',
		controller: AnswerResponseCtrl
	};
};