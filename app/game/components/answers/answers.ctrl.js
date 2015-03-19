class AnswersCtrl {
	constructor(gameSettings, AnswerService) {
		this.languages = gameSettings.getLanguage();
		this.isSelected = AnswerService.isSelected;
		this.select = AnswerService.selectAnswer;
	}

}
AnswersCtrl.$inject = ['gameSettings', 'AnswerService'];

export default AnswersCtrl;