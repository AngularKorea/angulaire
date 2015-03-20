class AnswersCtrl {
	constructor(SettingsService, GameService) {
		this.languages = SettingsService.getLanguage();
		this.isSelected = GameService.isSelected;
		this.select = GameService.selectAnswer;
	}

}
AnswersCtrl.$inject = ['SettingsService', 'GameService'];

export default AnswersCtrl;