export default angular.module('app.game', [])
	.config(require('./game.route'))
	.factory('dataService', require('./data/data.service'))
	.directive('gameQuestion', require('./components/question/question'))
	.directive('gameBoard', require('./components/board/board'))
	.directive('gameAnswers', require('./components/answers/answers'))
	.directive('finalAnswer', require('./components/answers/finalAnswer'));

