export default () => {
	return {
		scope: {
			name: '@',
			action: '&'
		},
		template: require('./lifeline.html'),
		controllerAs: 'vm',
		controller: function() {
			var vm = this;

		}
	};
};
