export default () => {
	require('./answers.scss');
	return {
		scope: {
			answers: '=',
			selected: '='
		},
		template: require('./answers.html'),
		bindToController: true,
		controllerAs: 'vm',
		controller: require('./answers.ctrl.js')
	};
};
