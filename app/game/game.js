export default angular.module('app.game', [])
	.config(require('./game.route'))
	.service('DataService', require('./services/data.service'))
	.service('SettingsService', require('./services/settings.service'))
	.service('GameService', require('./services/game.service'))
	.directive('gameQuestion', require('./components/question/question'))
	.directive('gameBoard', require('./components/board/board'))
	.directive('gameAnswers', require('./components/answers/answers'))
	.directive('finalAnswer', require('./components/submit/finalAnswer'))
.directive('answerResponse', require('./components/submit/answerStatus'));

