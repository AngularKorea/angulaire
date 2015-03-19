export default () => {
	require('./board.scss');
	return {
		scope: {
			current: '=',
			total: '@'
		},
		templateUrl: require('./board.html'),
		bindToController: true,
		controllerAs: 'vm',
		controller: function() {
			var vm = this;
			vm.levels = [];
			var total = 6000;
			for (var i = 10; i >= 0; i--) {
				total == 500 ? total = 0 : total -= (i * 100);
				vm.levels.push({
					count: i,
					score: total
				});
			}
		}
	};
};
