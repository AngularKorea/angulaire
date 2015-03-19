export default () => {
	// default languages
	var languages = ['eng', 'kor'];
	var rounds = 10;

	return {
		getLanguage: function() {
			return languages;
		},
		setLanguage: function(languageSetting) {
			languages = languageSetting;
		},
		rounds: rounds
	};
};
