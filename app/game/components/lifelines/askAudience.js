export default () => {
	return {
		template: '<life-line name="Ask The Audience" action="askTheAudience()"></life-line>',
		controllerAs: 'vm',
		controller: function () {
			var vm = this;
			vm.askTheAudience = () => {
				console.log('ask the audience');
			}
		}
	};
};