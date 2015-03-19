class QuestionCtrl {
	constructor(gameSettings) {
		this.languages = gameSettings.getLanguage();
	}
}
QuestionCtrl.$inject = ['gameSettings'];

export default () => {
	require('./question.scss');
	return {
		scope: {
			question: '='
		},
		templateUrl: require('./question.html'),
		bindToController: true,
		controllerAs: 'vm',
		controller: QuestionCtrl
	};
};

