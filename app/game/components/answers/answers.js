export default () => {
	require('./answers.scss');
	return {
		scope: {
			answers: '='
		},
		template: require('./answers.html'),
		bindToController: true,
		controllerAs: 'vm',
		controller: require('./answers.ctrl.js')
	};
};
