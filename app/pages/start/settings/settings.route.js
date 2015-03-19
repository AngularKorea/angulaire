export default ($stateProvider) => {
	require('./settings.scss');
	$stateProvider
		.state('start.settings', {
			url: '/settings',
			template: require('./settings.html'),
			controller: 'SettingsCtrl as vm'
		});
};

