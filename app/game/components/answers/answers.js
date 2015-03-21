export default () => {
	require('./answers.scss');
	require('./animation.scss');
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
