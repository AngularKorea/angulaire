class SettingsService {
	constructor() {
		this.languages = ['eng', 'kor'];
		this.rounds = 10;
	}

	getLanguage() {
		return this.languages;
	}

	setLanguage(languageSetting) {
		this.languages = languageSetting;
	}
}

export default SettingsService;