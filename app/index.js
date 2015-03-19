require('./core/vendor')();

var ngModule = angular.module('app', [
	/* ngModules */
	'ngMessages',
	'ngAnimate',
	'ngTouch',
	'ngSanitize',

	/* 3rd Party */
	'ui.router',

	/* custom */
	require('./game/game').name
]);

require('./core/core')(ngModule);

