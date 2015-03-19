class AnswersCtrl {
	constructor(gameSettings, AnswersService) {
		this.languages = gameSettings.getLanguage();
		this.isSelected = AnswersService.isSelected;
		this.select = AnswersService.selectAnswer;
	}

}
AnswersCtrl.$inject = ['gameSettings', 'AnswersService'];

export default AnswersCtrl;