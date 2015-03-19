class AnswerService {
	constructor($rootScope) {
		this.selected = null;
		this.$root = $rootScope;
	}

	isSelected(index) {
		return this.selected === index;
	}

	
	/* TODO: ShMcK check answer here, broadcast correct or incorrect. Easy. */
	
	selectAnswer(index) {
		this.selected = index;
		this.root.$broadcast('selected');
		console.log(index);
	}
}
AnswerService.$inject = ['$rootScope'];

export default AnswerService;