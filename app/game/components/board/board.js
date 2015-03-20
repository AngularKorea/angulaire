class BoardCtrl {
	constructor(GameService, SettingsService) {
		this.current = GameService.current;
		this.total = SettingsService.rounds;
		this.levels = [];

		/* generate game board values. For example 2:  500 */
		var total = 6000;
		for (var i = this.total; i >= 0; i--) {
			if (total === 500) {
				total = 0;
			} else {
				total -= (i * 100);
			}
			this.levels.push({
				count: i,
				score: total
			});
		}
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
