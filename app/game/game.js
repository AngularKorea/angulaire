export default angular.module('app.game', [])
	.config(require('./game.route'))
	.factory('dataService', require('./services/data.service'))
	.service('AnswersService', require('./services/answers.service'))
	.directive('gameQuestion', require('./components/question/question'))
	.directive('gameBoard', require('./components/board/board'))
	.directive('gameAnswers', require('./components/answers/answers'))
	.directive('finalAnswer', require('./components/answers/finalAnswer'));

