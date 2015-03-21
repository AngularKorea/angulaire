class AnswersCtrl {
	constructor(SettingsService, GameService) {
		this.languages = SettingsService.getLanguage();
		this.Game = GameService;
		this.selectAnswer = (index) => {
			GameService.selected = index;
			GameService.isCorrect(index);
		};
	}
}
AnswersCtrl.$inject = ['SettingsService', 'GameService'];

export default AnswersCtrl;