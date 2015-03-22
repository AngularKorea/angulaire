require('./pages.scss');

export default angular.module('pages', [
	require('./landing/landing').name,
	require('./settings/settings').name,
	require('./end/end').name
])
	.config(require('./pages.route.js'));
