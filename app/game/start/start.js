export default angular.module('app.start', [
	require('./landing/landing').name,
	require('./settings/settings').name
])
	.config(require('./start.route'));
