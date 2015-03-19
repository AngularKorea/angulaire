export default angular.module('app.start.settings', [])
	.config(require('./settings.route'))
	.factory('gameSettings', require('./settings.service'))
	.controller('SettingsCtrl', require('./settings.ctrl'));
