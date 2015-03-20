class QuestionCtrl {
	constructor(SettingsService) {
		this.languages = SettingsService.getLanguage();
	}
}
QuestionCtrl.$inject = ['SettingsService'];

export default () => {
	require('./question.scss');
	return {
		scope: {
			question: '='
		},
		template: require('./question.html'),
		bindToController: true,
		controllerAs: 'vm',
		controller: QuestionCtrl
	};
};

