class DataService {
	constructor($http, GameService) {
		this.$http = $http;
		this.GameService = GameService;
		this.gameData = [];
	}

	get() {
		/* Google Spreadsheet as a backend database. Why? No good reason. */
		var spreadsheet = '1fOaLreeBZyIk0X3q22eJkL4ZKGIp0SyyJkwaI750CkY';
		return this.$http({
			url: `https://spreadsheets.google.com/feeds/list/${spreadsheet}/od6/public/values?alt=json`,
			method: 'GET'
		}).then((response) => {
			var data = response.data.feed.entry;
			for (var i = 0; i < data.length; i++) {
				var row = data[i];
				this.gameData.push({
					question: {
						eng: row.gsx$questioneng.$t,
						kor: row.gsx$questionkor.$t
					},
					answers: [{
						eng: row.gsx$aeng.$t,
						kor: row.gsx$akor.$t,
						isCorrect: row.gsx$b.$t
					}, {
						eng: row.gsx$beng.$t,
						kor: row.gsx$bkor.$t,
						isCorrect: row.gsx$a.$t
					}, {
						eng: row.gsx$ceng.$t,
						kor: row.gsx$ckor.$t,
						isCorrect: row.gsx$c.$t
					}, {
						eng: row.gsx$deng.$t,
						kor: row.gsx$dkor.$t,
						isCorrect: row.gsx$d.$t
					}]
				});
			}
			// load game data into GameService
			this.GameService.load(data);
			// return data for GameCtrl
			return this.gameData;
		}, (error) => {
			console.error('Error loading data.', error);

		});
	}
}
DataService.$inject = ['$http', 'GameService'];

export default DataService;