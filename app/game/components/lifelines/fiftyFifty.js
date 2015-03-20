export default () => {
	return {
		template: '<life-line name="50/50" action="vm.removeTwoChoices()"></life-line>',
		controllerAs: 'vm',
		controller: function() {
			var vm = this;
			vm.removeTwoChoices = () => {
				console.log('remove two choices.');
			}
		}
	};
};
