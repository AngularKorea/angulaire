export default angular.module('pages.start', [
	require('./landing/landing').name,
	require('./settings/settings').name
])
	.config(require('./start.route'));
