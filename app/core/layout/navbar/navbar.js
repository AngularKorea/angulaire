'use strict';

var title = 'Angulaire';

class NavbarCtrl {
	constructor() {
		this.navbarItems = require('./menu').navbar.in;
		this.title = title;
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
