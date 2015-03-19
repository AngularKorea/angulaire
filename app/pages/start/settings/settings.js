export default angular.module('pages.start.settings', [])
	.config(require('./settings.route.js'))
	.factory('gameSettings', require('./settings.service.js'))
	.controller('SettingsCtrl', require('./settings.ctrl.js'));
