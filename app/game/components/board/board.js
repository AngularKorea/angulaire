class BoardCtrl {
	constructor(GameService, SettingsService) {
		this.Game = GameService;
		this.total = SettingsService.rounds;
		this.points = [];

		/* generate game board values. For example 2:  500 */
		var total = 6000;
		for (var i = this.total - 1; i >= 0; i--) {
			if (total === 500) {
				total = 0;
			} else {
				total -= (i * 100);
			}
			this.points.push(total);
		}
	}
	current (index) {
		return this.total - index;
	}
}
BoardCtrl.$inject = ['GameService', 'SettingsService'];

export default () => {
	require('./board.scss');
	return {
		scope: true,
		template: require('./board.html'),
		bindToController: true,
		controllerAs: 'vm',
		controller: BoardCtrl
	};
};
