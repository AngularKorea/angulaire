class SettingsCtrl {
	constructor($state, gameSettings) {
		this.$state = $state;
		this.settings = gameSettings;
		this.language = {};
		this.languages = [
			{name: 'English', sub: '영어', code: ['eng']},
			{name: '한국어', sub: 'Korean', code: ['kor']},
			{name: 'English & Korean', sub: '한국어 & 영어', code: ['eng', 'kor']}
		];
	}

	submit() {
		this.settings.setLanguage(this.language.selected.code);
		this.$state.go('game');
	}
}
SettingsCtrl.$inject = ['$state', 'gameSettings'];

export default SettingsCtrl;
