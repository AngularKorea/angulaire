class NavbarCtrl {
	constructor() {
		this.title = 'Angulaire';
	}
}

export default ngModule => {
	ngModule.directive('shmckNavbar', () => {
		require('./navbar.scss');
		return {
			scope: true,
			template: require('./navbar.html'),
			bindToController: true,
			controllerAs: 'vm',
			controller: NavbarCtrl
		};
	});
};
