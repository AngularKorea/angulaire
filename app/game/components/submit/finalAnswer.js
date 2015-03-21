class FinalAnswerCtrl {
	constructor(GameService) {
		this.Game = GameService;
	}
}
FinalAnswerCtrl.$inject = ['GameService'];

export default () => {
	require('./finalAnswer.scss');
	return {
		scope: {},
		bindToController: true,
		controllerAs: 'vm',
		controller: FinalAnswerCtrl,
		template: require('./finalAnswer.html')
	};
};
