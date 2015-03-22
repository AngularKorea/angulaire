export default ($stateProvider) => {
	$stateProvider
		.state('pages.settings', {
			url: '/settings',
			template: require('./settings.html'),
			controllerAs: 'vm',
			controller: require('./settings.ctrl.js')
		});
};

