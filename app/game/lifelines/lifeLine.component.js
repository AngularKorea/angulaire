export default () => {
	return {
		scope: {
			name: '@'
			//action: '&'
		},
		templateUrl: require('./lifeline.html'),
		controllerAs: 'vm',
		controller: function() {
			var vm = this;

		}
	};
};