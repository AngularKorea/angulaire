export default ($stateProvider) => {
	$stateProvider
		.state('start.settings', {
			url: '/settings',
			templateUrl: require('./settings.html'),
			controller: 'SettingsCtrl as vm'
		});
};

