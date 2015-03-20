export default() => {
	return {
		template: '<life-line name="Phone a Friend" action="vm.phoneFriend()"></life-line>',
		controllerAs: 'vm',
		controller: function() {
			var vm = this;
			vm.phoneFriend = () => {
				console.log('phone a friend')
			}
		}
	};
};