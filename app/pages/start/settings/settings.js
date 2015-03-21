require('./settings.scss');

export default angular.module('pages.start.settings', [])
	.config(require('./settings.route.js'))
	.controller('SettingsCtrl', require('./settings.ctrl.js'));
