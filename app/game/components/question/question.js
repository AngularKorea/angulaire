class QuestionCtrl {
	constructor(SettingsService, GameService) {
		this.languages = SettingsService.getLanguage();
		this.Game = GameService;
	}
}
QuestionCtrl.$inject = ['SettingsService', 'GameService'];

export default () => {
	return {
		template: require('./question.html'),
		bindToController: true,
		controllerAs: 'vm',
		controller: QuestionCtrl
	};
};

