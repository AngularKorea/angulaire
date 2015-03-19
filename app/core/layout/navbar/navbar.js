export default ngModule => {
	ngModule.directive('shmckNavbar', () => {
		require('./navbar.scss');
		return {
			template: require('./navbar.html')
		};
	});
};
