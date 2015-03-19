export default angular.module('app.game', [
	require('./start/start').name,
	require('./end/end').name
])
	.config(require('./game.route'))
	.factory('dataService', require('./data/data.service'))
	.controller('GameCtrl', require('./game.ctrl'))
	.directive('gameQuestion', require('./question/question'))
	.directive('gameBoard', require('./board/board'))
	.directive('gameAnswers', require('./answers/answers'))
	.directive('finalAnswer', require('./answers/finalAnswer'));

