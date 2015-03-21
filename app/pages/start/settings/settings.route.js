export default ($stateProvider) => {
	$stateProvider
		.state('start.settings', {
			url: '/settings',
			template: require('./settings.html'),
			controller: 'SettingsCtrl as vm'
		});
};

