class FooterCtrl {
	constructor() {
		this.copyrightDate = new Date();
	}
}

export default ngModule => {
	ngModule.directive('shmckFooter', () => {
		require('./footer.scss');
		return {
			template: require('./footer.html'),
			bindToController: true,
			controllerAs: 'vm',
			controller: FooterCtrl
		};
	});
};
