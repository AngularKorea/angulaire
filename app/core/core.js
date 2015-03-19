export default ngModule => {
	require('./config/config')(ngModule);
	require('./layout/navbar/navbar')(ngModule);
	require('./layout/footer/footer')(ngModule);
};
