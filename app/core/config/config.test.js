'use strict';

/**
 * Stubbing of HTTP requests for backend-less frontend testing
 */
var ON_TEST = false;

if (ON_TEST) {
	require('angular-mocks/angular-mocks');
}
;

function onConfigTest($provide) {
	'ngInject';
	$provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
}

function onRunTest($httpBackend) {
	'ngInject';
	$httpBackend.whenGET(/^\w+.*/).passThrough();
	$httpBackend.whenPOST(/^\w+.*/).passThrough();
}

export default angular.module('app.core.test', [])
	.config(onConfigTest)
	.run(onRunTest);