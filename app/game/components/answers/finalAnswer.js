export default () => {
	return {
		scope: {
			submit: '&'
		},
		bindToController: true,
		controllerAs: 'vm',
		controller: function () {},
		template: require('./finalAnswer.html')
	};
};
