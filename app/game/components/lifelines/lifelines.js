export default angular.module('app.lifelines', [])
	.directive('lifeLine', require('./lifeLine.component.js'))
	.directive('askAudience', require('./askAudience'))
	.directive('fiftyFifty', require('./fiftyFifty'))
	.directive('phoneFriend', require('./phoneFriend'));
