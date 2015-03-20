class AnswersCtrl {
	constructor(SettingsService, AnswerService) {
		this.languages = SettingsService.getLanguage();
		this.isSelected = AnswerService.isSelected;
		this.select = AnswerService.selectAnswer;
	}

}
AnswersCtrl.$inject = ['SettingsService', 'AnswerService'];

export default AnswersCtrl;
