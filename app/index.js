require('./core/vendor')();

var ngModule = angular.module('app', [
	/* ngModules */
	'ngMessages',
	'ngAnimate',
	'ngTouch',
	'ngSanitize',
	/* 3rd Party */
	'ui.router',
	'ui.select',
	/* custom */
	require('./game/game').name,
	require('./pages/pages').name
]);

require('./core/core')(ngModule);

