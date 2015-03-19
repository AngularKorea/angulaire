export default () => {
	require('./answers.scss');
	return {
		scope: {
			answers: '=',
			selected: '='
		},
		templateUrl: require('./answers.html'),
		bindToController: true,
		controllerAs: 'vm',
		controller: function(gameSettings) {
			var vm = this;
			vm.languages = gameSettings.getLanguage();
			vm.checkAnswer = function(answer) {
				if (answer.isCorrect === 'TRUE') {
					alert('Correct!');
				} else {
					alert('Wrong!');
				}
			};
			vm.isSelected = function(index) {
				return vm.selected === index;
			};
		}
	};
};
