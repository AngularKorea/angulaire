/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(2)();

	var ngModule = angular.module("app", [
	/* ngModules */
	"ngMessages", "ngAnimate", "ngTouch", "ngSanitize",
	/* 3rd Party */
	"ui.router", "ui.select",
	/* custom */
	__webpack_require__(3).name, __webpack_require__(4).name]);

	__webpack_require__(5)(ngModule);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function () {
		/**
	  *  Styles, fonts & icons
	  */
		//require('../bower_components/bootstrap-sass-official/assets/stylesheets/_bootstrap.scss');
		/**
	  *  JS
	  */
		//require('imports?$=jquery!bootstrap/bootstrap-sass-official/assets/javascripts/bootstrap.js');
		//require('angular');
		__webpack_require__(21);
		__webpack_require__(22);
		__webpack_require__(23);
		__webpack_require__(24);
		__webpack_require__(25);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = angular.module("app.game", []).config(__webpack_require__(9)).service("DataService", __webpack_require__(10)).service("SettingsService", __webpack_require__(11)).service("GameService", __webpack_require__(12)).directive("gameQuestion", __webpack_require__(13)).directive("gameBoard", __webpack_require__(14)).directive("gameAnswers", __webpack_require__(15)).directive("finalAnswer", __webpack_require__(16));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(26);

	module.exports = angular.module("pages", [__webpack_require__(17).name, __webpack_require__(18).name, __webpack_require__(19).name]).config(__webpack_require__(20));

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function (ngModule) {
		__webpack_require__(6)(ngModule);
		__webpack_require__(7)(ngModule);
		__webpack_require__(8)(ngModule);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function (ngModule) {
		ngModule.config(["$locationProvider", "$urlRouterProvider", "$provide", function ($locationProvider, $urlRouterProvider, $provide) {
			// overwrite the default behaviour for $uiViewScroll service (scroll to top of the page)
			$provide.decorator("$uiViewScroll", ["$delegate", "$window", function ($delegate, $window) {
				return function () {
					$window.scrollTo(0, 0);
				};
			}]);

			$locationProvider.html5Mode(true);

			var devMode = false;
			var root = devMode ? "/game" : "/start";

			// set to '/start' for game, '/game' in development
			$urlRouterProvider.otherwise(root);

			// the `when` method says if the url is `/` redirect to `/dashboard` what is basically our `home` for this
			// application
			$urlRouterProvider.when("/", root);
		}]);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function (ngModule) {
		ngModule.directive("shmckNavbar", function () {
			__webpack_require__(40);
			return {
				template: __webpack_require__(47)
			};
		});
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var FooterCtrl = function FooterCtrl() {
		_classCallCheck(this, FooterCtrl);

		this.copyrightDate = new Date();
	};

	module.exports = function (ngModule) {
		ngModule.directive("shmckFooter", function () {
			__webpack_require__(42);
			return {
				template: __webpack_require__(48),
				bindToController: true,
				controllerAs: "vm",
				controller: FooterCtrl
			};
		});
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function ($stateProvider) {
		__webpack_require__(33);
		$stateProvider.state("game", {
			url: "/game",
			template: __webpack_require__(45),
			controllerAs: "vm",
			controller: __webpack_require__(35),
			resolve: {
				gameData: function gameData(DataService) {
					return DataService.get();
				}
			}
		});
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var DataService = (function () {
		function DataService($http, GameService) {
			_classCallCheck(this, DataService);

			this.$http = $http;
			this.GameService = GameService;
			this.gameData = [];
		}

		_createClass(DataService, {
			get: {
				value: function get() {
					var _this = this;

					/* Google Spreadsheet as a backend database. Why? No good reason. */
					var spreadsheet = "1fOaLreeBZyIk0X3q22eJkL4ZKGIp0SyyJkwaI750CkY";
					return this.$http({
						url: "https://spreadsheets.google.com/feeds/list/" + spreadsheet + "/od6/public/values?alt=json",
						method: "GET"
					}).then(function (response) {
						var data = response.data.feed.entry;
						for (var i = 0; i < data.length; i++) {
							var row = data[i];
							_this.gameData.push({
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
						_this.GameService.load(_this.gameData);
						// return data for GameCtrl
						return _this.gameData;
					}, function (error) {
						console.error("Error loading data.", error);
					});
				}
			}
		});

		return DataService;
	})();

	DataService.$inject = ["$http", "GameService"];

	module.exports = DataService;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var SettingsService = (function () {
		function SettingsService() {
			_classCallCheck(this, SettingsService);

			this.languages = ["eng", "kor"];
			this.rounds = 10;
		}

		_createClass(SettingsService, {
			getLanguage: {
				value: function getLanguage() {
					return this.languages;
				}
			},
			setLanguage: {
				value: function setLanguage(languageSetting) {
					this.languages = languageSetting;
				}
			}
		});

		return SettingsService;
	})();

	module.exports = SettingsService;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	/**
	 * Game Service
	 * current | selected | data
	 * select | checkAnswer
	 */

	var GameService = (function () {
		function GameService($state, SettingsService) {
			_classCallCheck(this, GameService);

			this.data = null;
			this.$state = $state;
			this.rounds = SettingsService.rounds;
			this.selected = null;
			this.correct = null;
			this.current = 0;
			this.submitted = false;
			this.currentQuestion = null;
			this.currentAnswers = null;
			this.trackWrong = [];
		}

		_createClass(GameService, {
			load: {
				value: function load(data) {
					this.data = data;
					this.getQuestion();
					this.getAnswers();
				}
			},
			getQuestion: {
				value: function getQuestion() {
					this.currentQuestion = this.data[this.current].question;
				}
			},
			getAnswers: {
				value: function getAnswers() {
					this.currentAnswers = this.data[this.current].answers;
				}
			},
			isSelected: {
				value: function isSelected(index) {
					return this.selected === index;
				}
			},
			isCorrect: {
				value: function isCorrect(index) {
					this.submitted = true;
					this.correct = this.data[this.current].answers[index].isCorrect === "TRUE";
					if (!this.correct) {
						this.trackWrong.push(this.rounds - this.current);
					}
					return this.correct;
				}
			},
			isSubmitted: {
				value: function isSubmitted() {
					return this.submitted;
				}
			},
			nextQuestion: {
				value: function nextQuestion() {
					// check if finished
					if (this.current === this.rounds - 1) {
						this.$state.go("pages.end");
					} else {
						// next
						this.current += 1;
						// reset selected
						this.selected = null;
						this.submitted = false;
						this.correct = null;
						this.getQuestion();
						this.getAnswers();
					}
				}
			}
		});

		return GameService;
	})();

	GameService.$inject = ["$state", "SettingsService"];

	module.exports = GameService;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var QuestionCtrl = function QuestionCtrl(SettingsService, GameService) {
		_classCallCheck(this, QuestionCtrl);

		this.languages = SettingsService.getLanguage();
		this.Game = GameService;
	};

	QuestionCtrl.$inject = ["SettingsService", "GameService"];

	module.exports = function () {
		return {
			template: __webpack_require__(50),
			bindToController: true,
			controllerAs: "vm",
			controller: QuestionCtrl
		};
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var BoardCtrl = (function () {
		function BoardCtrl(GameService, SettingsService) {
			_classCallCheck(this, BoardCtrl);

			this.Game = GameService;
			this.total = SettingsService.rounds;
			this.points = [];

			/* generate game board values. For example 2:  500 */
			var total = 6000;
			for (var i = this.total - 1; i >= 0; i--) {
				if (total === 500) {
					total = 0;
				} else {
					total -= i * 100;
				}
				this.points.push(total);
			}
		}

		_createClass(BoardCtrl, {
			current: {
				value: function current(index) {
					return this.total - index;
				}
			}
		});

		return BoardCtrl;
	})();

	BoardCtrl.$inject = ["GameService", "SettingsService"];

	module.exports = function () {
		return {
			scope: true,
			template: __webpack_require__(49),
			bindToController: true,
			controllerAs: "vm",
			controller: BoardCtrl
		};
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function () {
		return {
			scope: {
				answers: "="
			},
			template: __webpack_require__(51),
			bindToController: true,
			controllerAs: "vm",
			controller: __webpack_require__(44)
		};
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var FinalAnswerCtrl = function FinalAnswerCtrl(GameService) {
		_classCallCheck(this, FinalAnswerCtrl);

		this.Game = GameService;
	};

	FinalAnswerCtrl.$inject = ["GameService"];

	module.exports = function () {
		return {
			scope: {},
			bindToController: true,
			controllerAs: "vm",
			controller: FinalAnswerCtrl,
			template: __webpack_require__(52)
		};
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = angular.module("pages.landing", []).config(__webpack_require__(37));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = angular.module("pages.settings", []).config(__webpack_require__(39));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = angular.module("pages.end", []).config(__webpack_require__(38));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function ($stateProvider) {
		$stateProvider.state("pages", {
			url: "",
			abstract: true,
			template: __webpack_require__(46)
		});
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(30);
	module.exports = 'ngMessages';


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29);
	module.exports = 'ngAnimate';


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = 'ngTouch';


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32);
	module.exports = 'ngSanitize';


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * State-based routing for AngularJS
	 * @version v0.2.13
	 * @link http://angular-ui.github.com/
	 * @license MIT License, http://www.opensource.org/licenses/MIT
	 */

	/* commonjs package manager support (eg componentjs) */
	if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
	  module.exports = 'ui.router';
	}

	(function (window, angular, undefined) {
	/*jshint globalstrict:true*/
	/*global angular:false*/
	'use strict';

	var isDefined = angular.isDefined,
	    isFunction = angular.isFunction,
	    isString = angular.isString,
	    isObject = angular.isObject,
	    isArray = angular.isArray,
	    forEach = angular.forEach,
	    extend = angular.extend,
	    copy = angular.copy;

	function inherit(parent, extra) {
	  return extend(new (extend(function() {}, { prototype: parent }))(), extra);
	}

	function merge(dst) {
	  forEach(arguments, function(obj) {
	    if (obj !== dst) {
	      forEach(obj, function(value, key) {
	        if (!dst.hasOwnProperty(key)) dst[key] = value;
	      });
	    }
	  });
	  return dst;
	}

	/**
	 * Finds the common ancestor path between two states.
	 *
	 * @param {Object} first The first state.
	 * @param {Object} second The second state.
	 * @return {Array} Returns an array of state names in descending order, not including the root.
	 */
	function ancestors(first, second) {
	  var path = [];

	  for (var n in first.path) {
	    if (first.path[n] !== second.path[n]) break;
	    path.push(first.path[n]);
	  }
	  return path;
	}

	/**
	 * IE8-safe wrapper for `Object.keys()`.
	 *
	 * @param {Object} object A JavaScript object.
	 * @return {Array} Returns the keys of the object as an array.
	 */
	function objectKeys(object) {
	  if (Object.keys) {
	    return Object.keys(object);
	  }
	  var result = [];

	  angular.forEach(object, function(val, key) {
	    result.push(key);
	  });
	  return result;
	}

	/**
	 * IE8-safe wrapper for `Array.prototype.indexOf()`.
	 *
	 * @param {Array} array A JavaScript array.
	 * @param {*} value A value to search the array for.
	 * @return {Number} Returns the array index value of `value`, or `-1` if not present.
	 */
	function indexOf(array, value) {
	  if (Array.prototype.indexOf) {
	    return array.indexOf(value, Number(arguments[2]) || 0);
	  }
	  var len = array.length >>> 0, from = Number(arguments[2]) || 0;
	  from = (from < 0) ? Math.ceil(from) : Math.floor(from);

	  if (from < 0) from += len;

	  for (; from < len; from++) {
	    if (from in array && array[from] === value) return from;
	  }
	  return -1;
	}

	/**
	 * Merges a set of parameters with all parameters inherited between the common parents of the
	 * current state and a given destination state.
	 *
	 * @param {Object} currentParams The value of the current state parameters ($stateParams).
	 * @param {Object} newParams The set of parameters which will be composited with inherited params.
	 * @param {Object} $current Internal definition of object representing the current state.
	 * @param {Object} $to Internal definition of object representing state to transition to.
	 */
	function inheritParams(currentParams, newParams, $current, $to) {
	  var parents = ancestors($current, $to), parentParams, inherited = {}, inheritList = [];

	  for (var i in parents) {
	    if (!parents[i].params) continue;
	    parentParams = objectKeys(parents[i].params);
	    if (!parentParams.length) continue;

	    for (var j in parentParams) {
	      if (indexOf(inheritList, parentParams[j]) >= 0) continue;
	      inheritList.push(parentParams[j]);
	      inherited[parentParams[j]] = currentParams[parentParams[j]];
	    }
	  }
	  return extend({}, inherited, newParams);
	}

	/**
	 * Performs a non-strict comparison of the subset of two objects, defined by a list of keys.
	 *
	 * @param {Object} a The first object.
	 * @param {Object} b The second object.
	 * @param {Array} keys The list of keys within each object to compare. If the list is empty or not specified,
	 *                     it defaults to the list of keys in `a`.
	 * @return {Boolean} Returns `true` if the keys match, otherwise `false`.
	 */
	function equalForKeys(a, b, keys) {
	  if (!keys) {
	    keys = [];
	    for (var n in a) keys.push(n); // Used instead of Object.keys() for IE8 compatibility
	  }

	  for (var i=0; i<keys.length; i++) {
	    var k = keys[i];
	    if (a[k] != b[k]) return false; // Not '===', values aren't necessarily normalized
	  }
	  return true;
	}

	/**
	 * Returns the subset of an object, based on a list of keys.
	 *
	 * @param {Array} keys
	 * @param {Object} values
	 * @return {Boolean} Returns a subset of `values`.
	 */
	function filterByKeys(keys, values) {
	  var filtered = {};

	  forEach(keys, function (name) {
	    filtered[name] = values[name];
	  });
	  return filtered;
	}

	// like _.indexBy
	// when you know that your index values will be unique, or you want last-one-in to win
	function indexBy(array, propName) {
	  var result = {};
	  forEach(array, function(item) {
	    result[item[propName]] = item;
	  });
	  return result;
	}

	// extracted from underscore.js
	// Return a copy of the object only containing the whitelisted properties.
	function pick(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  forEach(keys, function(key) {
	    if (key in obj) copy[key] = obj[key];
	  });
	  return copy;
	}

	// extracted from underscore.js
	// Return a copy of the object omitting the blacklisted properties.
	function omit(obj) {
	  var copy = {};
	  var keys = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
	  for (var key in obj) {
	    if (indexOf(keys, key) == -1) copy[key] = obj[key];
	  }
	  return copy;
	}

	function pluck(collection, key) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = isFunction(key) ? key(val) : val[key];
	  });
	  return result;
	}

	function filter(collection, callback) {
	  var array = isArray(collection);
	  var result = array ? [] : {};
	  forEach(collection, function(val, i) {
	    if (callback(val, i)) {
	      result[array ? result.length : i] = val;
	    }
	  });
	  return result;
	}

	function map(collection, callback) {
	  var result = isArray(collection) ? [] : {};

	  forEach(collection, function(val, i) {
	    result[i] = callback(val, i);
	  });
	  return result;
	}

	/**
	 * @ngdoc overview
	 * @name ui.router.util
	 *
	 * @description
	 * # ui.router.util sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 *
	 */
	angular.module('ui.router.util', ['ng']);

	/**
	 * @ngdoc overview
	 * @name ui.router.router
	 * 
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.router sub-module
	 *
	 * This module is a dependency of other sub-modules. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 */
	angular.module('ui.router.router', ['ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router.state
	 * 
	 * @requires ui.router.router
	 * @requires ui.router.util
	 *
	 * @description
	 * # ui.router.state sub-module
	 *
	 * This module is a dependency of the main ui.router module. Do not include this module as a dependency
	 * in your angular app (use {@link ui.router} module instead).
	 * 
	 */
	angular.module('ui.router.state', ['ui.router.router', 'ui.router.util']);

	/**
	 * @ngdoc overview
	 * @name ui.router
	 *
	 * @requires ui.router.state
	 *
	 * @description
	 * # ui.router
	 * 
	 * ## The main module for ui.router 
	 * There are several sub-modules included with the ui.router module, however only this module is needed
	 * as a dependency within your angular app. The other modules are for organization purposes. 
	 *
	 * The modules are:
	 * * ui.router - the main "umbrella" module
	 * * ui.router.router - 
	 * 
	 * *You'll need to include **only** this module as the dependency within your angular app.*
	 * 
	 * <pre>
	 * <!doctype html>
	 * <html ng-app="myApp">
	 * <head>
	 *   <script src="js/angular.js"></script>
	 *   <!-- Include the ui-router script -->
	 *   <script src="js/angular-ui-router.min.js"></script>
	 *   <script>
	 *     // ...and add 'ui.router' as a dependency
	 *     var myApp = angular.module('myApp', ['ui.router']);
	 *   </script>
	 * </head>
	 * <body>
	 * </body>
	 * </html>
	 * </pre>
	 */
	angular.module('ui.router', ['ui.router.state']);

	angular.module('ui.router.compat', ['ui.router']);

	/**
	 * @ngdoc object
	 * @name ui.router.util.$resolve
	 *
	 * @requires $q
	 * @requires $injector
	 *
	 * @description
	 * Manages resolution of (acyclic) graphs of promises.
	 */
	$Resolve.$inject = ['$q', '$injector'];
	function $Resolve(  $q,    $injector) {
	  
	  var VISIT_IN_PROGRESS = 1,
	      VISIT_DONE = 2,
	      NOTHING = {},
	      NO_DEPENDENCIES = [],
	      NO_LOCALS = NOTHING,
	      NO_PARENT = extend($q.when(NOTHING), { $$promises: NOTHING, $$values: NOTHING });
	  

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#study
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Studies a set of invocables that are likely to be used multiple times.
	   * <pre>
	   * $resolve.study(invocables)(locals, parent, self)
	   * </pre>
	   * is equivalent to
	   * <pre>
	   * $resolve.resolve(invocables, locals, parent, self)
	   * </pre>
	   * but the former is more efficient (in fact `resolve` just calls `study` 
	   * internally).
	   *
	   * @param {object} invocables Invocable objects
	   * @return {function} a function to pass in locals, parent and self
	   */
	  this.study = function (invocables) {
	    if (!isObject(invocables)) throw new Error("'invocables' must be an object");
	    var invocableKeys = objectKeys(invocables || {});
	    
	    // Perform a topological sort of invocables to build an ordered plan
	    var plan = [], cycle = [], visited = {};
	    function visit(value, key) {
	      if (visited[key] === VISIT_DONE) return;
	      
	      cycle.push(key);
	      if (visited[key] === VISIT_IN_PROGRESS) {
	        cycle.splice(0, indexOf(cycle, key));
	        throw new Error("Cyclic dependency: " + cycle.join(" -> "));
	      }
	      visited[key] = VISIT_IN_PROGRESS;
	      
	      if (isString(value)) {
	        plan.push(key, [ function() { return $injector.get(value); }], NO_DEPENDENCIES);
	      } else {
	        var params = $injector.annotate(value);
	        forEach(params, function (param) {
	          if (param !== key && invocables.hasOwnProperty(param)) visit(invocables[param], param);
	        });
	        plan.push(key, value, params);
	      }
	      
	      cycle.pop();
	      visited[key] = VISIT_DONE;
	    }
	    forEach(invocables, visit);
	    invocables = cycle = visited = null; // plan is all that's required
	    
	    function isResolve(value) {
	      return isObject(value) && value.then && value.$$promises;
	    }
	    
	    return function (locals, parent, self) {
	      if (isResolve(locals) && self === undefined) {
	        self = parent; parent = locals; locals = null;
	      }
	      if (!locals) locals = NO_LOCALS;
	      else if (!isObject(locals)) {
	        throw new Error("'locals' must be an object");
	      }       
	      if (!parent) parent = NO_PARENT;
	      else if (!isResolve(parent)) {
	        throw new Error("'parent' must be a promise returned by $resolve.resolve()");
	      }
	      
	      // To complete the overall resolution, we have to wait for the parent
	      // promise and for the promise for each invokable in our plan.
	      var resolution = $q.defer(),
	          result = resolution.promise,
	          promises = result.$$promises = {},
	          values = extend({}, locals),
	          wait = 1 + plan.length/3,
	          merged = false;
	          
	      function done() {
	        // Merge parent values we haven't got yet and publish our own $$values
	        if (!--wait) {
	          if (!merged) merge(values, parent.$$values); 
	          result.$$values = values;
	          result.$$promises = result.$$promises || true; // keep for isResolve()
	          delete result.$$inheritedValues;
	          resolution.resolve(values);
	        }
	      }
	      
	      function fail(reason) {
	        result.$$failure = reason;
	        resolution.reject(reason);
	      }

	      // Short-circuit if parent has already failed
	      if (isDefined(parent.$$failure)) {
	        fail(parent.$$failure);
	        return result;
	      }
	      
	      if (parent.$$inheritedValues) {
	        merge(values, omit(parent.$$inheritedValues, invocableKeys));
	      }

	      // Merge parent values if the parent has already resolved, or merge
	      // parent promises and wait if the parent resolve is still in progress.
	      extend(promises, parent.$$promises);
	      if (parent.$$values) {
	        merged = merge(values, omit(parent.$$values, invocableKeys));
	        result.$$inheritedValues = omit(parent.$$values, invocableKeys);
	        done();
	      } else {
	        if (parent.$$inheritedValues) {
	          result.$$inheritedValues = omit(parent.$$inheritedValues, invocableKeys);
	        }        
	        parent.then(done, fail);
	      }
	      
	      // Process each invocable in the plan, but ignore any where a local of the same name exists.
	      for (var i=0, ii=plan.length; i<ii; i+=3) {
	        if (locals.hasOwnProperty(plan[i])) done();
	        else invoke(plan[i], plan[i+1], plan[i+2]);
	      }
	      
	      function invoke(key, invocable, params) {
	        // Create a deferred for this invocation. Failures will propagate to the resolution as well.
	        var invocation = $q.defer(), waitParams = 0;
	        function onfailure(reason) {
	          invocation.reject(reason);
	          fail(reason);
	        }
	        // Wait for any parameter that we have a promise for (either from parent or from this
	        // resolve; in that case study() will have made sure it's ordered before us in the plan).
	        forEach(params, function (dep) {
	          if (promises.hasOwnProperty(dep) && !locals.hasOwnProperty(dep)) {
	            waitParams++;
	            promises[dep].then(function (result) {
	              values[dep] = result;
	              if (!(--waitParams)) proceed();
	            }, onfailure);
	          }
	        });
	        if (!waitParams) proceed();
	        function proceed() {
	          if (isDefined(result.$$failure)) return;
	          try {
	            invocation.resolve($injector.invoke(invocable, self, values));
	            invocation.promise.then(function (result) {
	              values[key] = result;
	              done();
	            }, onfailure);
	          } catch (e) {
	            onfailure(e);
	          }
	        }
	        // Publish promise synchronously; invocations further down in the plan may depend on it.
	        promises[key] = invocation.promise;
	      }
	      
	      return result;
	    };
	  };
	  
	  /**
	   * @ngdoc function
	   * @name ui.router.util.$resolve#resolve
	   * @methodOf ui.router.util.$resolve
	   *
	   * @description
	   * Resolves a set of invocables. An invocable is a function to be invoked via 
	   * `$injector.invoke()`, and can have an arbitrary number of dependencies. 
	   * An invocable can either return a value directly,
	   * or a `$q` promise. If a promise is returned it will be resolved and the 
	   * resulting value will be used instead. Dependencies of invocables are resolved 
	   * (in this order of precedence)
	   *
	   * - from the specified `locals`
	   * - from another invocable that is part of this `$resolve` call
	   * - from an invocable that is inherited from a `parent` call to `$resolve` 
	   *   (or recursively
	   * - from any ancestor `$resolve` of that parent).
	   *
	   * The return value of `$resolve` is a promise for an object that contains 
	   * (in this order of precedence)
	   *
	   * - any `locals` (if specified)
	   * - the resolved return values of all injectables
	   * - any values inherited from a `parent` call to `$resolve` (if specified)
	   *
	   * The promise will resolve after the `parent` promise (if any) and all promises 
	   * returned by injectables have been resolved. If any invocable 
	   * (or `$injector.invoke`) throws an exception, or if a promise returned by an 
	   * invocable is rejected, the `$resolve` promise is immediately rejected with the 
	   * same error. A rejection of a `parent` promise (if specified) will likewise be 
	   * propagated immediately. Once the `$resolve` promise has been rejected, no 
	   * further invocables will be called.
	   * 
	   * Cyclic dependencies between invocables are not permitted and will caues `$resolve`
	   * to throw an error. As a special case, an injectable can depend on a parameter 
	   * with the same name as the injectable, which will be fulfilled from the `parent` 
	   * injectable of the same name. This allows inherited values to be decorated. 
	   * Note that in this case any other injectable in the same `$resolve` with the same
	   * dependency would see the decorated value, not the inherited value.
	   *
	   * Note that missing dependencies -- unlike cyclic dependencies -- will cause an 
	   * (asynchronous) rejection of the `$resolve` promise rather than a (synchronous) 
	   * exception.
	   *
	   * Invocables are invoked eagerly as soon as all dependencies are available. 
	   * This is true even for dependencies inherited from a `parent` call to `$resolve`.
	   *
	   * As a special case, an invocable can be a string, in which case it is taken to 
	   * be a service name to be passed to `$injector.get()`. This is supported primarily 
	   * for backwards-compatibility with the `resolve` property of `$routeProvider` 
	   * routes.
	   *
	   * @param {object} invocables functions to invoke or 
	   * `$injector` services to fetch.
	   * @param {object} locals  values to make available to the injectables
	   * @param {object} parent  a promise returned by another call to `$resolve`.
	   * @param {object} self  the `this` for the invoked methods
	   * @return {object} Promise for an object that contains the resolved return value
	   * of all invocables, as well as any inherited and local values.
	   */
	  this.resolve = function (invocables, locals, parent, self) {
	    return this.study(invocables)(locals, parent, self);
	  };
	}

	angular.module('ui.router.util').service('$resolve', $Resolve);


	/**
	 * @ngdoc object
	 * @name ui.router.util.$templateFactory
	 *
	 * @requires $http
	 * @requires $templateCache
	 * @requires $injector
	 *
	 * @description
	 * Service. Manages loading of templates.
	 */
	$TemplateFactory.$inject = ['$http', '$templateCache', '$injector'];
	function $TemplateFactory(  $http,   $templateCache,   $injector) {

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromConfig
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a configuration object. 
	   *
	   * @param {object} config Configuration object for which to load a template. 
	   * The following properties are search in the specified order, and the first one 
	   * that is defined is used to create the template:
	   *
	   * @param {string|object} config.template html string template or function to 
	   * load via {@link ui.router.util.$templateFactory#fromString fromString}.
	   * @param {string|object} config.templateUrl url to load or a function returning 
	   * the url to load via {@link ui.router.util.$templateFactory#fromUrl fromUrl}.
	   * @param {Function} config.templateProvider function to invoke via 
	   * {@link ui.router.util.$templateFactory#fromProvider fromProvider}.
	   * @param {object} params  Parameters to pass to the template function.
	   * @param {object} locals Locals to pass to `invoke` if the template is loaded 
	   * via a `templateProvider`. Defaults to `{ params: params }`.
	   *
	   * @return {string|object}  The template html as a string, or a promise for 
	   * that string,or `null` if no template is configured.
	   */
	  this.fromConfig = function (config, params, locals) {
	    return (
	      isDefined(config.template) ? this.fromString(config.template, params) :
	      isDefined(config.templateUrl) ? this.fromUrl(config.templateUrl, params) :
	      isDefined(config.templateProvider) ? this.fromProvider(config.templateProvider, params, locals) :
	      null
	    );
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromString
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template from a string or a function returning a string.
	   *
	   * @param {string|object} template html template as a string or function that 
	   * returns an html template as a string.
	   * @param {object} params Parameters to pass to the template function.
	   *
	   * @return {string|object} The template html as a string, or a promise for that 
	   * string.
	   */
	  this.fromString = function (template, params) {
	    return isFunction(template) ? template(params) : template;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromUrl
	   * @methodOf ui.router.util.$templateFactory
	   * 
	   * @description
	   * Loads a template from the a URL via `$http` and `$templateCache`.
	   *
	   * @param {string|Function} url url of the template to load, or a function 
	   * that returns a url.
	   * @param {Object} params Parameters to pass to the url function.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromUrl = function (url, params) {
	    if (isFunction(url)) url = url(params);
	    if (url == null) return null;
	    else return $http
	        .get(url, { cache: $templateCache, headers: { Accept: 'text/html' }})
	        .then(function(response) { return response.data; });
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$templateFactory#fromProvider
	   * @methodOf ui.router.util.$templateFactory
	   *
	   * @description
	   * Creates a template by invoking an injectable provider function.
	   *
	   * @param {Function} provider Function to invoke via `$injector.invoke`
	   * @param {Object} params Parameters for the template.
	   * @param {Object} locals Locals to pass to `invoke`. Defaults to 
	   * `{ params: params }`.
	   * @return {string|Promise.<string>} The template html as a string, or a promise 
	   * for that string.
	   */
	  this.fromProvider = function (provider, params, locals) {
	    return $injector.invoke(provider, null, locals || { params: params });
	  };
	}

	angular.module('ui.router.util').service('$templateFactory', $TemplateFactory);

	var $$UMFP; // reference to $UrlMatcherFactoryProvider

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Matches URLs against patterns and extracts named parameters from the path or the search
	 * part of the URL. A URL pattern consists of a path pattern, optionally followed by '?' and a list
	 * of search parameters. Multiple search parameter names are separated by '&'. Search parameters
	 * do not influence whether or not a URL is matched, but their values are passed through into
	 * the matched parameters returned by {@link ui.router.util.type:UrlMatcher#methods_exec exec}.
	 * 
	 * Path parameter placeholders can be specified using simple colon/catch-all syntax or curly brace
	 * syntax, which optionally allows a regular expression for the parameter to be specified:
	 *
	 * * `':'` name - colon placeholder
	 * * `'*'` name - catch-all placeholder
	 * * `'{' name '}'` - curly placeholder
	 * * `'{' name ':' regexp|type '}'` - curly placeholder with regexp or type name. Should the
	 *   regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
	 *
	 * Parameter names may contain only word characters (latin letters, digits, and underscore) and
	 * must be unique within the pattern (across both path and search parameters). For colon 
	 * placeholders or curly placeholders without an explicit regexp, a path parameter matches any
	 * number of characters other than '/'. For catch-all placeholders the path parameter matches
	 * any number of characters.
	 * 
	 * Examples:
	 * 
	 * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
	 *   trailing slashes, and patterns have to match the entire path, not just a prefix.
	 * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
	 *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
	 * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
	 * * `'/user/{id:[^/]*}'` - Same as the previous example.
	 * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
	 *   parameter consists of 1 to 8 hex digits.
	 * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	 *   path into the parameter 'path'.
	 * * `'/files/*path'` - ditto.
	 * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
	 *   in the built-in  `date` Type matches `2014-11-12`) and provides a Date object in $stateParams.start
	 *
	 * @param {string} pattern  The pattern to compile into a matcher.
	 * @param {Object} config  A configuration object hash:
	 * @param {Object=} parentMatcher Used to concatenate the pattern/config onto
	 *   an existing UrlMatcher
	 *
	 * * `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
	 * * `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
	 *
	 * @property {string} prefix  A static prefix of this pattern. The matcher guarantees that any
	 *   URL matching this matcher (i.e. any string for which {@link ui.router.util.type:UrlMatcher#methods_exec exec()} returns
	 *   non-null) will start with this prefix.
	 *
	 * @property {string} source  The pattern that was passed into the constructor
	 *
	 * @property {string} sourcePath  The path portion of the source property
	 *
	 * @property {string} sourceSearch  The search portion of the source property
	 *
	 * @property {string} regex  The constructed regex that will be used to match against the url when 
	 *   it is time to determine which url will match.
	 *
	 * @returns {Object}  New `UrlMatcher` object
	 */
	function UrlMatcher(pattern, config, parentMatcher) {
	  config = extend({ params: {} }, isObject(config) ? config : {});

	  // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
	  //   '*' name
	  //   ':' name
	  //   '{' name '}'
	  //   '{' name ':' regexp '}'
	  // The regular expression is somewhat complicated due to the need to allow curly braces
	  // inside the regular expression. The placeholder regexp breaks down as follows:
	  //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
	  //    \{([\w\[\]]+)(?:\:( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
	  //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
	  //    [^{}\\]+                       - anything other than curly braces or backslash
	  //    \\.                            - a backslash escape
	  //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
	  var placeholder       = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      searchPlaceholder = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
	      compiled = '^', last = 0, m,
	      segments = this.segments = [],
	      parentParams = parentMatcher ? parentMatcher.params : {},
	      params = this.params = parentMatcher ? parentMatcher.params.$$new() : new $$UMFP.ParamSet(),
	      paramNames = [];

	  function addParameter(id, type, config, location) {
	    paramNames.push(id);
	    if (parentParams[id]) return parentParams[id];
	    if (!/^\w+(-+\w+)*(?:\[\])?$/.test(id)) throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern + "'");
	    if (params[id]) throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern + "'");
	    params[id] = new $$UMFP.Param(id, type, config, location);
	    return params[id];
	  }

	  function quoteRegExp(string, pattern, squash) {
	    var surroundPattern = ['',''], result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	    if (!pattern) return result;
	    switch(squash) {
	      case false: surroundPattern = ['(', ')'];   break;
	      case true:  surroundPattern = ['?(', ')?']; break;
	      default:    surroundPattern = ['(' + squash + "|", ')?'];  break;
	    }
	    return result + surroundPattern[0] + pattern + surroundPattern[1];
	  }

	  this.source = pattern;

	  // Split into static segments separated by path parameter placeholders.
	  // The number of segments is always 1 more than the number of parameters.
	  function matchDetails(m, isSearch) {
	    var id, regexp, segment, type, cfg, arrayMode;
	    id          = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	    cfg         = config.params[id];
	    segment     = pattern.substring(last, m.index);
	    regexp      = isSearch ? m[4] : m[4] || (m[1] == '*' ? '.*' : null);
	    type        = $$UMFP.type(regexp || "string") || inherit($$UMFP.type("string"), { pattern: new RegExp(regexp) });
	    return {
	      id: id, regexp: regexp, segment: segment, type: type, cfg: cfg
	    };
	  }

	  var p, param, segment;
	  while ((m = placeholder.exec(pattern))) {
	    p = matchDetails(m, false);
	    if (p.segment.indexOf('?') >= 0) break; // we're into the search part

	    param = addParameter(p.id, p.type, p.cfg, "path");
	    compiled += quoteRegExp(p.segment, param.type.pattern.source, param.squash);
	    segments.push(p.segment);
	    last = placeholder.lastIndex;
	  }
	  segment = pattern.substring(last);

	  // Find any search parameter names and remove them from the last segment
	  var i = segment.indexOf('?');

	  if (i >= 0) {
	    var search = this.sourceSearch = segment.substring(i);
	    segment = segment.substring(0, i);
	    this.sourcePath = pattern.substring(0, last + i);

	    if (search.length > 0) {
	      last = 0;
	      while ((m = searchPlaceholder.exec(search))) {
	        p = matchDetails(m, true);
	        param = addParameter(p.id, p.type, p.cfg, "search");
	        last = placeholder.lastIndex;
	        // check if ?&
	      }
	    }
	  } else {
	    this.sourcePath = pattern;
	    this.sourceSearch = '';
	  }

	  compiled += quoteRegExp(segment) + (config.strict === false ? '\/?' : '') + '$';
	  segments.push(segment);

	  this.regexp = new RegExp(compiled, config.caseInsensitive ? 'i' : undefined);
	  this.prefix = segments[0];
	  this.$$paramNames = paramNames;
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#concat
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns a new matcher for a pattern constructed by appending the path part and adding the
	 * search parameters of the specified pattern to this pattern. The current pattern is not
	 * modified. This can be understood as creating a pattern for URLs that are relative to (or
	 * suffixes of) the current pattern.
	 *
	 * @example
	 * The following two matchers are equivalent:
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').concat('/details?date');
	 * new UrlMatcher('/user/{id}/details?q&date');
	 * </pre>
	 *
	 * @param {string} pattern  The pattern to append.
	 * @param {Object} config  An object hash of the configuration for the matcher.
	 * @returns {UrlMatcher}  A matcher for the concatenated pattern.
	 */
	UrlMatcher.prototype.concat = function (pattern, config) {
	  // Because order of search parameters is irrelevant, we can add our own search
	  // parameters to the end of the new pattern. Parse the new pattern by itself
	  // and then join the bits together, but it's much easier to do this on a string level.
	  var defaultConfig = {
	    caseInsensitive: $$UMFP.caseInsensitive(),
	    strict: $$UMFP.strictMode(),
	    squash: $$UMFP.defaultSquashPolicy()
	  };
	  return new UrlMatcher(this.sourcePath + pattern + this.sourceSearch, extend(defaultConfig, config), this);
	};

	UrlMatcher.prototype.toString = function () {
	  return this.source;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#exec
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Tests the specified path against this matcher, and returns an object containing the captured
	 * parameter values, or null if the path does not match. The returned object contains the values
	 * of any search parameters that are mentioned in the pattern, but their value may be null if
	 * they are not present in `searchParams`. This means that search parameters are always treated
	 * as optional.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
	 *   x: '1', q: 'hello'
	 * });
	 * // returns { id: 'bob', q: 'hello', r: null }
	 * </pre>
	 *
	 * @param {string} path  The URL path to match, e.g. `$location.path()`.
	 * @param {Object} searchParams  URL search parameters, e.g. `$location.search()`.
	 * @returns {Object}  The captured parameter values.
	 */
	UrlMatcher.prototype.exec = function (path, searchParams) {
	  var m = this.regexp.exec(path);
	  if (!m) return null;
	  searchParams = searchParams || {};

	  var paramNames = this.parameters(), nTotal = paramNames.length,
	    nPath = this.segments.length - 1,
	    values = {}, i, j, cfg, paramName;

	  if (nPath !== m.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");

	  function decodePathArray(string) {
	    function reverseString(str) { return str.split("").reverse().join(""); }
	    function unquoteDashes(str) { return str.replace(/\\-/, "-"); }

	    var split = reverseString(string).split(/-(?!\\)/);
	    var allReversed = map(split, reverseString);
	    return map(allReversed, unquoteDashes).reverse();
	  }

	  for (i = 0; i < nPath; i++) {
	    paramName = paramNames[i];
	    var param = this.params[paramName];
	    var paramVal = m[i+1];
	    // if the param value matches a pre-replace pair, replace the value before decoding.
	    for (j = 0; j < param.replace; j++) {
	      if (param.replace[j].from === paramVal) paramVal = param.replace[j].to;
	    }
	    if (paramVal && param.array === true) paramVal = decodePathArray(paramVal);
	    values[paramName] = param.value(paramVal);
	  }
	  for (/**/; i < nTotal; i++) {
	    paramName = paramNames[i];
	    values[paramName] = this.params[paramName].value(searchParams[paramName]);
	  }

	  return values;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#parameters
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Returns the names of all path and search parameters of this pattern in an unspecified order.
	 * 
	 * @returns {Array.<string>}  An array of parameter names. Must be treated as read-only. If the
	 *    pattern has no parameters, an empty array is returned.
	 */
	UrlMatcher.prototype.parameters = function (param) {
	  if (!isDefined(param)) return this.$$paramNames;
	  return this.params[param] || null;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#validate
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Checks an object hash of parameters to validate their correctness according to the parameter
	 * types of this `UrlMatcher`.
	 *
	 * @param {Object} params The object hash of parameters to validate.
	 * @returns {boolean} Returns `true` if `params` validates, otherwise `false`.
	 */
	UrlMatcher.prototype.validates = function (params) {
	  return this.params.$$validates(params);
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:UrlMatcher#format
	 * @methodOf ui.router.util.type:UrlMatcher
	 *
	 * @description
	 * Creates a URL that matches this pattern by substituting the specified values
	 * for the path and search parameters. Null values for path parameters are
	 * treated as empty strings.
	 *
	 * @example
	 * <pre>
	 * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
	 * // returns '/user/bob?q=yes'
	 * </pre>
	 *
	 * @param {Object} values  the values to substitute for the parameters in this pattern.
	 * @returns {string}  the formatted URL (path and optionally search part).
	 */
	UrlMatcher.prototype.format = function (values) {
	  values = values || {};
	  var segments = this.segments, params = this.parameters(), paramset = this.params;
	  if (!this.validates(values)) return null;

	  var i, search = false, nPath = segments.length - 1, nTotal = params.length, result = segments[0];

	  function encodeDashes(str) { // Replace dashes with encoded "\-"
	    return encodeURIComponent(str).replace(/-/g, function(c) { return '%5C%' + c.charCodeAt(0).toString(16).toUpperCase(); });
	  }

	  for (i = 0; i < nTotal; i++) {
	    var isPathParam = i < nPath;
	    var name = params[i], param = paramset[name], value = param.value(values[name]);
	    var isDefaultValue = param.isOptional && param.type.equals(param.value(), value);
	    var squash = isDefaultValue ? param.squash : false;
	    var encoded = param.type.encode(value);

	    if (isPathParam) {
	      var nextSegment = segments[i + 1];
	      if (squash === false) {
	        if (encoded != null) {
	          if (isArray(encoded)) {
	            result += map(encoded, encodeDashes).join("-");
	          } else {
	            result += encodeURIComponent(encoded);
	          }
	        }
	        result += nextSegment;
	      } else if (squash === true) {
	        var capture = result.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
	        result += nextSegment.match(capture)[1];
	      } else if (isString(squash)) {
	        result += squash + nextSegment;
	      }
	    } else {
	      if (encoded == null || (isDefaultValue && squash !== false)) continue;
	      if (!isArray(encoded)) encoded = [ encoded ];
	      encoded = map(encoded, encodeURIComponent).join('&' + name + '=');
	      result += (search ? '&' : '?') + (name + '=' + encoded);
	      search = true;
	    }
	  }

	  return result;
	};

	/**
	 * @ngdoc object
	 * @name ui.router.util.type:Type
	 *
	 * @description
	 * Implements an interface to define custom parameter types that can be decoded from and encoded to
	 * string parameters matched in a URL. Used by {@link ui.router.util.type:UrlMatcher `UrlMatcher`}
	 * objects when matching or formatting URLs, or comparing or validating parameter values.
	 *
	 * See {@link ui.router.util.$urlMatcherFactory#methods_type `$urlMatcherFactory#type()`} for more
	 * information on registering custom types.
	 *
	 * @param {Object} config  A configuration object which contains the custom type definition.  The object's
	 *        properties will override the default methods and/or pattern in `Type`'s public interface.
	 * @example
	 * <pre>
	 * {
	 *   decode: function(val) { return parseInt(val, 10); },
	 *   encode: function(val) { return val && val.toString(); },
	 *   equals: function(a, b) { return this.is(a) && a === b; },
	 *   is: function(val) { return angular.isNumber(val) isFinite(val) && val % 1 === 0; },
	 *   pattern: /\d+/
	 * }
	 * </pre>
	 *
	 * @property {RegExp} pattern The regular expression pattern used to match values of this type when
	 *           coming from a substring of a URL.
	 *
	 * @returns {Object}  Returns a new `Type` object.
	 */
	function Type(config) {
	  extend(this, config);
	}

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#is
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Detects whether a value is of a particular type. Accepts a native (decoded) value
	 * and determines whether it matches the current `Type` object.
	 *
	 * @param {*} val  The value to check.
	 * @param {string} key  Optional. If the type check is happening in the context of a specific
	 *        {@link ui.router.util.type:UrlMatcher `UrlMatcher`} object, this is the name of the
	 *        parameter in which `val` is stored. Can be used for meta-programming of `Type` objects.
	 * @returns {Boolean}  Returns `true` if the value matches the type, otherwise `false`.
	 */
	Type.prototype.is = function(val, key) {
	  return true;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#encode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Encodes a custom/native type value to a string that can be embedded in a URL. Note that the
	 * return value does *not* need to be URL-safe (i.e. passed through `encodeURIComponent()`), it
	 * only needs to be a representation of `val` that has been coerced to a string.
	 *
	 * @param {*} val  The value to encode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {string}  Returns a string representation of `val` that can be encoded in a URL.
	 */
	Type.prototype.encode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#decode
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Converts a parameter value (from URL string or transition param) to a custom/native value.
	 *
	 * @param {string} val  The URL parameter value to decode.
	 * @param {string} key  The name of the parameter in which `val` is stored. Can be used for
	 *        meta-programming of `Type` objects.
	 * @returns {*}  Returns a custom representation of the URL parameter value.
	 */
	Type.prototype.decode = function(val, key) {
	  return val;
	};

	/**
	 * @ngdoc function
	 * @name ui.router.util.type:Type#equals
	 * @methodOf ui.router.util.type:Type
	 *
	 * @description
	 * Determines whether two decoded values are equivalent.
	 *
	 * @param {*} a  A value to compare against.
	 * @param {*} b  A value to compare against.
	 * @returns {Boolean}  Returns `true` if the values are equivalent/equal, otherwise `false`.
	 */
	Type.prototype.equals = function(a, b) {
	  return a == b;
	};

	Type.prototype.$subPattern = function() {
	  var sub = this.pattern.toString();
	  return sub.substr(1, sub.length - 2);
	};

	Type.prototype.pattern = /.*/;

	Type.prototype.toString = function() { return "{Type:" + this.name + "}"; };

	/*
	 * Wraps an existing custom Type as an array of Type, depending on 'mode'.
	 * e.g.:
	 * - urlmatcher pattern "/path?{queryParam[]:int}"
	 * - url: "/path?queryParam=1&queryParam=2
	 * - $stateParams.queryParam will be [1, 2]
	 * if `mode` is "auto", then
	 * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
	 * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
	 */
	Type.prototype.$asArray = function(mode, isSearch) {
	  if (!mode) return this;
	  if (mode === "auto" && !isSearch) throw new Error("'auto' array mode is for query parameters only");
	  return new ArrayType(this, mode);

	  function ArrayType(type, mode) {
	    function bindTo(type, callbackName) {
	      return function() {
	        return type[callbackName].apply(type, arguments);
	      };
	    }

	    // Wrap non-array value as array
	    function arrayWrap(val) { return isArray(val) ? val : (isDefined(val) ? [ val ] : []); }
	    // Unwrap array value for "auto" mode. Return undefined for empty array.
	    function arrayUnwrap(val) {
	      switch(val.length) {
	        case 0: return undefined;
	        case 1: return mode === "auto" ? val[0] : val;
	        default: return val;
	      }
	    }
	    function falsey(val) { return !val; }

	    // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
	    function arrayHandler(callback, allTruthyMode) {
	      return function handleArray(val) {
	        val = arrayWrap(val);
	        var result = map(val, callback);
	        if (allTruthyMode === true)
	          return filter(result, falsey).length === 0;
	        return arrayUnwrap(result);
	      };
	    }

	    // Wraps type (.equals) functions to operate on each value of an array
	    function arrayEqualsHandler(callback) {
	      return function handleArray(val1, val2) {
	        var left = arrayWrap(val1), right = arrayWrap(val2);
	        if (left.length !== right.length) return false;
	        for (var i = 0; i < left.length; i++) {
	          if (!callback(left[i], right[i])) return false;
	        }
	        return true;
	      };
	    }

	    this.encode = arrayHandler(bindTo(type, 'encode'));
	    this.decode = arrayHandler(bindTo(type, 'decode'));
	    this.is     = arrayHandler(bindTo(type, 'is'), true);
	    this.equals = arrayEqualsHandler(bindTo(type, 'equals'));
	    this.pattern = type.pattern;
	    this.$arrayMode = mode;
	  }
	};



	/**
	 * @ngdoc object
	 * @name ui.router.util.$urlMatcherFactory
	 *
	 * @description
	 * Factory for {@link ui.router.util.type:UrlMatcher `UrlMatcher`} instances. The factory
	 * is also available to providers under the name `$urlMatcherFactoryProvider`.
	 */
	function $UrlMatcherFactory() {
	  $$UMFP = this;

	  var isCaseInsensitive = false, isStrictMode = true, defaultSquashPolicy = false;

	  function valToString(val) { return val != null ? val.toString().replace(/\//g, "%2F") : val; }
	  function valFromString(val) { return val != null ? val.toString().replace(/%2F/g, "/") : val; }
	//  TODO: in 1.0, make string .is() return false if value is undefined by default.
	//  function regexpMatches(val) { /*jshint validthis:true */ return isDefined(val) && this.pattern.test(val); }
	  function regexpMatches(val) { /*jshint validthis:true */ return this.pattern.test(val); }

	  var $types = {}, enqueue = true, typeQueue = [], injector, defaultTypes = {
	    string: {
	      encode: valToString,
	      decode: valFromString,
	      is: regexpMatches,
	      pattern: /[^/]*/
	    },
	    int: {
	      encode: valToString,
	      decode: function(val) { return parseInt(val, 10); },
	      is: function(val) { return isDefined(val) && this.decode(val.toString()) === val; },
	      pattern: /\d+/
	    },
	    bool: {
	      encode: function(val) { return val ? 1 : 0; },
	      decode: function(val) { return parseInt(val, 10) !== 0; },
	      is: function(val) { return val === true || val === false; },
	      pattern: /0|1/
	    },
	    date: {
	      encode: function (val) {
	        if (!this.is(val))
	          return undefined;
	        return [ val.getFullYear(),
	          ('0' + (val.getMonth() + 1)).slice(-2),
	          ('0' + val.getDate()).slice(-2)
	        ].join("-");
	      },
	      decode: function (val) {
	        if (this.is(val)) return val;
	        var match = this.capture.exec(val);
	        return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
	      },
	      is: function(val) { return val instanceof Date && !isNaN(val.valueOf()); },
	      equals: function (a, b) { return this.is(a) && this.is(b) && a.toISOString() === b.toISOString(); },
	      pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
	      capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
	    },
	    json: {
	      encode: angular.toJson,
	      decode: angular.fromJson,
	      is: angular.isObject,
	      equals: angular.equals,
	      pattern: /[^/]*/
	    },
	    any: { // does not encode/decode
	      encode: angular.identity,
	      decode: angular.identity,
	      is: angular.identity,
	      equals: angular.equals,
	      pattern: /.*/
	    }
	  };

	  function getDefaultConfig() {
	    return {
	      strict: isStrictMode,
	      caseInsensitive: isCaseInsensitive
	    };
	  }

	  function isInjectable(value) {
	    return (isFunction(value) || (isArray(value) && isFunction(value[value.length - 1])));
	  }

	  /**
	   * [Internal] Get the default value of a parameter, which may be an injectable function.
	   */
	  $UrlMatcherFactory.$$getDefaultValue = function(config) {
	    if (!isInjectable(config.value)) return config.value;
	    if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	    return injector.invoke(config.value);
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#caseInsensitive
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URL matching should be case sensitive (the default behavior), or not.
	   *
	   * @param {boolean} value `false` to match URL in a case sensitive manner; otherwise `true`;
	   * @returns {boolean} the current value of caseInsensitive
	   */
	  this.caseInsensitive = function(value) {
	    if (isDefined(value))
	      isCaseInsensitive = value;
	    return isCaseInsensitive;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#strictMode
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Defines whether URLs should match trailing slashes, or not (the default behavior).
	   *
	   * @param {boolean=} value `false` to match trailing slashes in URLs, otherwise `true`.
	   * @returns {boolean} the current value of strictMode
	   */
	  this.strictMode = function(value) {
	    if (isDefined(value))
	      isStrictMode = value;
	    return isStrictMode;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#defaultSquashPolicy
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Sets the default behavior when generating or matching URLs with default parameter values.
	   *
	   * @param {string} value A string that defines the default parameter URL squashing behavior.
	   *    `nosquash`: When generating an href with a default parameter value, do not squash the parameter value from the URL
	   *    `slash`: When generating an href with a default parameter value, squash (remove) the parameter value, and, if the
	   *             parameter is surrounded by slashes, squash (remove) one slash from the URL
	   *    any other string, e.g. "~": When generating an href with a default parameter value, squash (remove)
	   *             the parameter value from the URL and replace it with this string.
	   */
	  this.defaultSquashPolicy = function(value) {
	    if (!isDefined(value)) return defaultSquashPolicy;
	    if (value !== true && value !== false && !isString(value))
	      throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
	    defaultSquashPolicy = value;
	    return value;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#compile
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Creates a {@link ui.router.util.type:UrlMatcher `UrlMatcher`} for the specified pattern.
	   *
	   * @param {string} pattern  The URL pattern.
	   * @param {Object} config  The config object hash.
	   * @returns {UrlMatcher}  The UrlMatcher.
	   */
	  this.compile = function (pattern, config) {
	    return new UrlMatcher(pattern, extend(getDefaultConfig(), config));
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#isMatcher
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Returns true if the specified object is a `UrlMatcher`, or false otherwise.
	   *
	   * @param {Object} object  The object to perform the type check against.
	   * @returns {Boolean}  Returns `true` if the object matches the `UrlMatcher` interface, by
	   *          implementing all the same methods.
	   */
	  this.isMatcher = function (o) {
	    if (!isObject(o)) return false;
	    var result = true;

	    forEach(UrlMatcher.prototype, function(val, name) {
	      if (isFunction(val)) {
	        result = result && (isDefined(o[name]) && isFunction(o[name]));
	      }
	    });
	    return result;
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.util.$urlMatcherFactory#type
	   * @methodOf ui.router.util.$urlMatcherFactory
	   *
	   * @description
	   * Registers a custom {@link ui.router.util.type:Type `Type`} object that can be used to
	   * generate URLs with typed parameters.
	   *
	   * @param {string} name  The type name.
	   * @param {Object|Function} definition   The type definition. See
	   *        {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   * @param {Object|Function} definitionFn (optional) A function that is injected before the app
	   *        runtime starts.  The result of this function is merged into the existing `definition`.
	   *        See {@link ui.router.util.type:Type `Type`} for information on the values accepted.
	   *
	   * @returns {Object}  Returns `$urlMatcherFactoryProvider`.
	   *
	   * @example
	   * This is a simple example of a custom type that encodes and decodes items from an
	   * array, using the array index as the URL-encoded value:
	   *
	   * <pre>
	   * var list = ['John', 'Paul', 'George', 'Ringo'];
	   *
	   * $urlMatcherFactoryProvider.type('listItem', {
	   *   encode: function(item) {
	   *     // Represent the list item in the URL using its corresponding index
	   *     return list.indexOf(item);
	   *   },
	   *   decode: function(item) {
	   *     // Look up the list item by index
	   *     return list[parseInt(item, 10)];
	   *   },
	   *   is: function(item) {
	   *     // Ensure the item is valid by checking to see that it appears
	   *     // in the list
	   *     return list.indexOf(item) > -1;
	   *   }
	   * });
	   *
	   * $stateProvider.state('list', {
	   *   url: "/list/{item:listItem}",
	   *   controller: function($scope, $stateParams) {
	   *     console.log($stateParams.item);
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * // Changes URL to '/list/3', logs "Ringo" to the console
	   * $state.go('list', { item: "Ringo" });
	   * </pre>
	   *
	   * This is a more complex example of a type that relies on dependency injection to
	   * interact with services, and uses the parameter name from the URL to infer how to
	   * handle encoding and decoding parameter values:
	   *
	   * <pre>
	   * // Defines a custom type that gets a value from a service,
	   * // where each service gets different types of values from
	   * // a backend API:
	   * $urlMatcherFactoryProvider.type('dbObject', {}, function(Users, Posts) {
	   *
	   *   // Matches up services to URL parameter names
	   *   var services = {
	   *     user: Users,
	   *     post: Posts
	   *   };
	   *
	   *   return {
	   *     encode: function(object) {
	   *       // Represent the object in the URL using its unique ID
	   *       return object.id;
	   *     },
	   *     decode: function(value, key) {
	   *       // Look up the object by ID, using the parameter
	   *       // name (key) to call the correct service
	   *       return services[key].findById(value);
	   *     },
	   *     is: function(object, key) {
	   *       // Check that object is a valid dbObject
	   *       return angular.isObject(object) && object.id && services[key];
	   *     }
	   *     equals: function(a, b) {
	   *       // Check the equality of decoded objects by comparing
	   *       // their unique IDs
	   *       return a.id === b.id;
	   *     }
	   *   };
	   * });
	   *
	   * // In a config() block, you can then attach URLs with
	   * // type-annotated parameters:
	   * $stateProvider.state('users', {
	   *   url: "/users",
	   *   // ...
	   * }).state('users.item', {
	   *   url: "/{user:dbObject}",
	   *   controller: function($scope, $stateParams) {
	   *     // $stateParams.user will now be an object returned from
	   *     // the Users service
	   *   },
	   *   // ...
	   * });
	   * </pre>
	   */
	  this.type = function (name, definition, definitionFn) {
	    if (!isDefined(definition)) return $types[name];
	    if ($types.hasOwnProperty(name)) throw new Error("A type named '" + name + "' has already been defined.");

	    $types[name] = new Type(extend({ name: name }, definition));
	    if (definitionFn) {
	      typeQueue.push({ name: name, def: definitionFn });
	      if (!enqueue) flushTypeQueue();
	    }
	    return this;
	  };

	  // `flushTypeQueue()` waits until `$urlMatcherFactory` is injected before invoking the queued `definitionFn`s
	  function flushTypeQueue() {
	    while(typeQueue.length) {
	      var type = typeQueue.shift();
	      if (type.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
	      angular.extend($types[type.name], injector.invoke(type.def));
	    }
	  }

	  // Register default types. Store them in the prototype of $types.
	  forEach(defaultTypes, function(type, name) { $types[name] = new Type(extend({name: name}, type)); });
	  $types = inherit($types, {});

	  /* No need to document $get, since it returns this */
	  this.$get = ['$injector', function ($injector) {
	    injector = $injector;
	    enqueue = false;
	    flushTypeQueue();

	    forEach(defaultTypes, function(type, name) {
	      if (!$types[name]) $types[name] = new Type(type);
	    });
	    return this;
	  }];

	  this.Param = function Param(id, type, config, location) {
	    var self = this;
	    config = unwrapShorthand(config);
	    type = getType(config, type, location);
	    var arrayMode = getArrayMode();
	    type = arrayMode ? type.$asArray(arrayMode, location === "search") : type;
	    if (type.name === "string" && !arrayMode && location === "path" && config.value === undefined)
	      config.value = ""; // for 0.2.x; in 0.3.0+ do not automatically default to ""
	    var isOptional = config.value !== undefined;
	    var squash = getSquashPolicy(config, isOptional);
	    var replace = getReplace(config, arrayMode, isOptional, squash);

	    function unwrapShorthand(config) {
	      var keys = isObject(config) ? objectKeys(config) : [];
	      var isShorthand = indexOf(keys, "value") === -1 && indexOf(keys, "type") === -1 &&
	                        indexOf(keys, "squash") === -1 && indexOf(keys, "array") === -1;
	      if (isShorthand) config = { value: config };
	      config.$$fn = isInjectable(config.value) ? config.value : function () { return config.value; };
	      return config;
	    }

	    function getType(config, urlType, location) {
	      if (config.type && urlType) throw new Error("Param '"+id+"' has two type configurations.");
	      if (urlType) return urlType;
	      if (!config.type) return (location === "config" ? $types.any : $types.string);
	      return config.type instanceof Type ? config.type : new Type(config.type);
	    }

	    // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
	    function getArrayMode() {
	      var arrayDefaults = { array: (location === "search" ? "auto" : false) };
	      var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
	      return extend(arrayDefaults, arrayParamNomenclature, config).array;
	    }

	    /**
	     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
	     */
	    function getSquashPolicy(config, isOptional) {
	      var squash = config.squash;
	      if (!isOptional || squash === false) return false;
	      if (!isDefined(squash) || squash == null) return defaultSquashPolicy;
	      if (squash === true || isString(squash)) return squash;
	      throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
	    }

	    function getReplace(config, arrayMode, isOptional, squash) {
	      var replace, configuredKeys, defaultPolicy = [
	        { from: "",   to: (isOptional || arrayMode ? undefined : "") },
	        { from: null, to: (isOptional || arrayMode ? undefined : "") }
	      ];
	      replace = isArray(config.replace) ? config.replace : [];
	      if (isString(squash))
	        replace.push({ from: squash, to: undefined });
	      configuredKeys = map(replace, function(item) { return item.from; } );
	      return filter(defaultPolicy, function(item) { return indexOf(configuredKeys, item.from) === -1; }).concat(replace);
	    }

	    /**
	     * [Internal] Get the default value of a parameter, which may be an injectable function.
	     */
	    function $$getDefaultValue() {
	      if (!injector) throw new Error("Injectable functions cannot be called at configuration time");
	      return injector.invoke(config.$$fn);
	    }

	    /**
	     * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
	     * default value, which may be the result of an injectable function.
	     */
	    function $value(value) {
	      function hasReplaceVal(val) { return function(obj) { return obj.from === val; }; }
	      function $replace(value) {
	        var replacement = map(filter(self.replace, hasReplaceVal(value)), function(obj) { return obj.to; });
	        return replacement.length ? replacement[0] : value;
	      }
	      value = $replace(value);
	      return isDefined(value) ? self.type.decode(value) : $$getDefaultValue();
	    }

	    function toString() { return "{Param:" + id + " " + type + " squash: '" + squash + "' optional: " + isOptional + "}"; }

	    extend(this, {
	      id: id,
	      type: type,
	      location: location,
	      array: arrayMode,
	      squash: squash,
	      replace: replace,
	      isOptional: isOptional,
	      value: $value,
	      dynamic: undefined,
	      config: config,
	      toString: toString
	    });
	  };

	  function ParamSet(params) {
	    extend(this, params || {});
	  }

	  ParamSet.prototype = {
	    $$new: function() {
	      return inherit(this, extend(new ParamSet(), { $$parent: this}));
	    },
	    $$keys: function () {
	      var keys = [], chain = [], parent = this,
	        ignore = objectKeys(ParamSet.prototype);
	      while (parent) { chain.push(parent); parent = parent.$$parent; }
	      chain.reverse();
	      forEach(chain, function(paramset) {
	        forEach(objectKeys(paramset), function(key) {
	            if (indexOf(keys, key) === -1 && indexOf(ignore, key) === -1) keys.push(key);
	        });
	      });
	      return keys;
	    },
	    $$values: function(paramValues) {
	      var values = {}, self = this;
	      forEach(self.$$keys(), function(key) {
	        values[key] = self[key].value(paramValues && paramValues[key]);
	      });
	      return values;
	    },
	    $$equals: function(paramValues1, paramValues2) {
	      var equal = true, self = this;
	      forEach(self.$$keys(), function(key) {
	        var left = paramValues1 && paramValues1[key], right = paramValues2 && paramValues2[key];
	        if (!self[key].type.equals(left, right)) equal = false;
	      });
	      return equal;
	    },
	    $$validates: function $$validate(paramValues) {
	      var result = true, isOptional, val, param, self = this;

	      forEach(this.$$keys(), function(key) {
	        param = self[key];
	        val = paramValues[key];
	        isOptional = !val && param.isOptional;
	        result = result && (isOptional || !!param.type.is(val));
	      });
	      return result;
	    },
	    $$parent: undefined
	  };

	  this.ParamSet = ParamSet;
	}

	// Register as a provider so it's available to other providers
	angular.module('ui.router.util').provider('$urlMatcherFactory', $UrlMatcherFactory);
	angular.module('ui.router.util').run(['$urlMatcherFactory', function($urlMatcherFactory) { }]);

	/**
	 * @ngdoc object
	 * @name ui.router.router.$urlRouterProvider
	 *
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 * @requires $locationProvider
	 *
	 * @description
	 * `$urlRouterProvider` has the responsibility of watching `$location`. 
	 * When `$location` changes it runs through a list of rules one by one until a 
	 * match is found. `$urlRouterProvider` is used behind the scenes anytime you specify 
	 * a url in a state configuration. All urls are compiled into a UrlMatcher object.
	 *
	 * There are several methods on `$urlRouterProvider` that make it useful to use directly
	 * in your module config.
	 */
	$UrlRouterProvider.$inject = ['$locationProvider', '$urlMatcherFactoryProvider'];
	function $UrlRouterProvider(   $locationProvider,   $urlMatcherFactory) {
	  var rules = [], otherwise = null, interceptDeferred = false, listener;

	  // Returns a string that is a prefix of all strings matching the RegExp
	  function regExpPrefix(re) {
	    var prefix = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(re.source);
	    return (prefix != null) ? prefix[1].replace(/\\(.)/g, "$1") : '';
	  }

	  // Interpolates matched values into a String.replace()-style pattern
	  function interpolate(pattern, match) {
	    return pattern.replace(/\$(\$|\d{1,2})/, function (m, what) {
	      return match[what === '$' ? 0 : Number(what)];
	    });
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#rule
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines rules that are used by `$urlRouterProvider` to find matches for
	   * specific URLs.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // Here's an example of how you might allow case insensitive urls
	   *   $urlRouterProvider.rule(function ($injector, $location) {
	   *     var path = $location.path(),
	   *         normalized = path.toLowerCase();
	   *
	   *     if (path !== normalized) {
	   *       return normalized;
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {object} rule Handler function that takes `$injector` and `$location`
	   * services as arguments. You can use them to return a valid path as a string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.rule = function (rule) {
	    if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    rules.push(rule);
	    return this;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouterProvider#otherwise
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Defines a path that is used when an invalid route is requested.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   // if the path doesn't match any of the urls you configured
	   *   // otherwise will take care of routing the user to the
	   *   // specified url
	   *   $urlRouterProvider.otherwise('/index');
	   *
	   *   // Example of using function rule as param
	   *   $urlRouterProvider.otherwise(function ($injector, $location) {
	   *     return '/a/valid/url';
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} rule The url path you want to redirect to or a function 
	   * rule that returns the url path. The function version is passed two params: 
	   * `$injector` and `$location` services, and must return a url string.
	   *
	   * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
	   */
	  this.otherwise = function (rule) {
	    if (isString(rule)) {
	      var redirect = rule;
	      rule = function () { return redirect; };
	    }
	    else if (!isFunction(rule)) throw new Error("'rule' must be a function");
	    otherwise = rule;
	    return this;
	  };


	  function handleIfMatch($injector, handler, match) {
	    if (!match) return false;
	    var result = $injector.invoke(handler, handler, { $match: match });
	    return isDefined(result) ? result : true;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#when
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Registers a handler for a given url matching. if handle is a string, it is
	   * treated as a redirect, and is interpolated according to the syntax of match
	   * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
	   *
	   * If the handler is a function, it is injectable. It gets invoked if `$location`
	   * matches. You have the option of inject the match object as `$match`.
	   *
	   * The handler can return
	   *
	   * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
	   *   will continue trying to find another one that matches.
	   * - **string** which is treated as a redirect and passed to `$location.url()`
	   * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
	   *     if ($state.$current.navigable !== state ||
	   *         !equalForKeys($match, $stateParams) {
	   *      $state.transitionTo(state, $match, false);
	   *     }
	   *   });
	   * });
	   * </pre>
	   *
	   * @param {string|object} what The incoming path that you want to redirect.
	   * @param {string|object} handler The path you want to redirect your user to.
	   */
	  this.when = function (what, handler) {
	    var redirect, handlerIsString = isString(handler);
	    if (isString(what)) what = $urlMatcherFactory.compile(what);

	    if (!handlerIsString && !isFunction(handler) && !isArray(handler))
	      throw new Error("invalid 'handler' in when()");

	    var strategies = {
	      matcher: function (what, handler) {
	        if (handlerIsString) {
	          redirect = $urlMatcherFactory.compile(handler);
	          handler = ['$match', function ($match) { return redirect.format($match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path(), $location.search()));
	        }, {
	          prefix: isString(what.prefix) ? what.prefix : ''
	        });
	      },
	      regex: function (what, handler) {
	        if (what.global || what.sticky) throw new Error("when() RegExp must not be global or sticky");

	        if (handlerIsString) {
	          redirect = handler;
	          handler = ['$match', function ($match) { return interpolate(redirect, $match); }];
	        }
	        return extend(function ($injector, $location) {
	          return handleIfMatch($injector, handler, what.exec($location.path()));
	        }, {
	          prefix: regExpPrefix(what)
	        });
	      }
	    };

	    var check = { matcher: $urlMatcherFactory.isMatcher(what), regex: what instanceof RegExp };

	    for (var n in check) {
	      if (check[n]) return this.rule(strategies[n](what, handler));
	    }

	    throw new Error("invalid 'what' in when()");
	  };

	  /**
	   * @ngdoc function
	   * @name ui.router.router.$urlRouterProvider#deferIntercept
	   * @methodOf ui.router.router.$urlRouterProvider
	   *
	   * @description
	   * Disables (or enables) deferring location change interception.
	   *
	   * If you wish to customize the behavior of syncing the URL (for example, if you wish to
	   * defer a transition but maintain the current URL), call this method at configuration time.
	   * Then, at run time, call `$urlRouter.listen()` after you have configured your own
	   * `$locationChangeSuccess` event handler.
	   *
	   * @example
	   * <pre>
	   * var app = angular.module('app', ['ui.router.router']);
	   *
	   * app.config(function ($urlRouterProvider) {
	   *
	   *   // Prevent $urlRouter from automatically intercepting URL changes;
	   *   // this allows you to configure custom behavior in between
	   *   // location changes and route synchronization:
	   *   $urlRouterProvider.deferIntercept();
	   *
	   * }).run(function ($rootScope, $urlRouter, UserService) {
	   *
	   *   $rootScope.$on('$locationChangeSuccess', function(e) {
	   *     // UserService is an example service for managing user state
	   *     if (UserService.isLoggedIn()) return;
	   *
	   *     // Prevent $urlRouter's default handler from firing
	   *     e.preventDefault();
	   *
	   *     UserService.handleLogin().then(function() {
	   *       // Once the user has logged in, sync the current URL
	   *       // to the router:
	   *       $urlRouter.sync();
	   *     });
	   *   });
	   *
	   *   // Configures $urlRouter's listener *after* your custom listener
	   *   $urlRouter.listen();
	   * });
	   * </pre>
	   *
	   * @param {boolean} defer Indicates whether to defer location change interception. Passing
	            no parameter is equivalent to `true`.
	   */
	  this.deferIntercept = function (defer) {
	    if (defer === undefined) defer = true;
	    interceptDeferred = defer;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.router.$urlRouter
	   *
	   * @requires $location
	   * @requires $rootScope
	   * @requires $injector
	   * @requires $browser
	   *
	   * @description
	   *
	   */
	  this.$get = $get;
	  $get.$inject = ['$location', '$rootScope', '$injector', '$browser'];
	  function $get(   $location,   $rootScope,   $injector,   $browser) {

	    var baseHref = $browser.baseHref(), location = $location.url(), lastPushedUrl;

	    function appendBasePath(url, isHtml5, absolute) {
	      if (baseHref === '/') return url;
	      if (isHtml5) return baseHref.slice(0, -1) + url;
	      if (absolute) return baseHref.slice(1) + url;
	      return url;
	    }

	    // TODO: Optimize groups of rules with non-empty prefix into some sort of decision tree
	    function update(evt) {
	      if (evt && evt.defaultPrevented) return;
	      var ignoreUpdate = lastPushedUrl && $location.url() === lastPushedUrl;
	      lastPushedUrl = undefined;
	      if (ignoreUpdate) return true;

	      function check(rule) {
	        var handled = rule($injector, $location);

	        if (!handled) return false;
	        if (isString(handled)) $location.replace().url(handled);
	        return true;
	      }
	      var n = rules.length, i;

	      for (i = 0; i < n; i++) {
	        if (check(rules[i])) return;
	      }
	      // always check otherwise last to allow dynamic updates to the set of rules
	      if (otherwise) check(otherwise);
	    }

	    function listen() {
	      listener = listener || $rootScope.$on('$locationChangeSuccess', update);
	      return listener;
	    }

	    if (!interceptDeferred) listen();

	    return {
	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#sync
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * Triggers an update; the same update that happens when the address bar url changes, aka `$locationChangeSuccess`.
	       * This method is useful when you need to use `preventDefault()` on the `$locationChangeSuccess` event,
	       * perform some custom logic (route protection, auth, config, redirection, etc) and then finally proceed
	       * with the transition by calling `$urlRouter.sync()`.
	       *
	       * @example
	       * <pre>
	       * angular.module('app', ['ui.router'])
	       *   .run(function($rootScope, $urlRouter) {
	       *     $rootScope.$on('$locationChangeSuccess', function(evt) {
	       *       // Halt state change from even starting
	       *       evt.preventDefault();
	       *       // Perform custom logic
	       *       var meetsRequirement = ...
	       *       // Continue with the update and state transition if logic allows
	       *       if (meetsRequirement) $urlRouter.sync();
	       *     });
	       * });
	       * </pre>
	       */
	      sync: function() {
	        update();
	      },

	      listen: function() {
	        return listen();
	      },

	      update: function(read) {
	        if (read) {
	          location = $location.url();
	          return;
	        }
	        if ($location.url() === location) return;

	        $location.url(location);
	        $location.replace();
	      },

	      push: function(urlMatcher, params, options) {
	        $location.url(urlMatcher.format(params || {}));
	        lastPushedUrl = options && options.$$avoidResync ? $location.url() : undefined;
	        if (options && options.replace) $location.replace();
	      },

	      /**
	       * @ngdoc function
	       * @name ui.router.router.$urlRouter#href
	       * @methodOf ui.router.router.$urlRouter
	       *
	       * @description
	       * A URL generation method that returns the compiled URL for a given
	       * {@link ui.router.util.type:UrlMatcher `UrlMatcher`}, populated with the provided parameters.
	       *
	       * @example
	       * <pre>
	       * $bob = $urlRouter.href(new UrlMatcher("/about/:person"), {
	       *   person: "bob"
	       * });
	       * // $bob == "/about/bob";
	       * </pre>
	       *
	       * @param {UrlMatcher} urlMatcher The `UrlMatcher` object which is used as the template of the URL to generate.
	       * @param {object=} params An object of parameter values to fill the matcher's required parameters.
	       * @param {object=} options Options object. The options are:
	       *
	       * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	       *
	       * @returns {string} Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
	       */
	      href: function(urlMatcher, params, options) {
	        if (!urlMatcher.validates(params)) return null;

	        var isHtml5 = $locationProvider.html5Mode();
	        if (angular.isObject(isHtml5)) {
	          isHtml5 = isHtml5.enabled;
	        }
	        
	        var url = urlMatcher.format(params);
	        options = options || {};

	        if (!isHtml5 && url !== null) {
	          url = "#" + $locationProvider.hashPrefix() + url;
	        }
	        url = appendBasePath(url, isHtml5, options.absolute);

	        if (!options.absolute || !url) {
	          return url;
	        }

	        var slash = (!isHtml5 && url ? '/' : ''), port = $location.port();
	        port = (port === 80 || port === 443 ? '' : ':' + port);

	        return [$location.protocol(), '://', $location.host(), port, slash, url].join('');
	      }
	    };
	  }
	}

	angular.module('ui.router.router').provider('$urlRouter', $UrlRouterProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$stateProvider
	 *
	 * @requires ui.router.router.$urlRouterProvider
	 * @requires ui.router.util.$urlMatcherFactoryProvider
	 *
	 * @description
	 * The new `$stateProvider` works similar to Angular's v1 router, but it focuses purely
	 * on state.
	 *
	 * A state corresponds to a "place" in the application in terms of the overall UI and
	 * navigation. A state describes (via the controller / template / view properties) what
	 * the UI looks like and does at that place.
	 *
	 * States often have things in common, and the primary way of factoring out these
	 * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
	 * nested states.
	 *
	 * The `$stateProvider` provides interfaces to declare these states for your app.
	 */
	$StateProvider.$inject = ['$urlRouterProvider', '$urlMatcherFactoryProvider'];
	function $StateProvider(   $urlRouterProvider,   $urlMatcherFactory) {

	  var root, states = {}, $state, queue = {}, abstractKey = 'abstract';

	  // Builds state properties from definition passed to registerState()
	  var stateBuilder = {

	    // Derive parent state from a hierarchical name only if 'parent' is not explicitly defined.
	    // state.children = [];
	    // if (parent) parent.children.push(state);
	    parent: function(state) {
	      if (isDefined(state.parent) && state.parent) return findState(state.parent);
	      // regex matches any valid composite state name
	      // would match "contact.list" but not "contacts"
	      var compositeName = /^(.+)\.[^.]+$/.exec(state.name);
	      return compositeName ? findState(compositeName[1]) : root;
	    },

	    // inherit 'data' from parent and override by own values (if any)
	    data: function(state) {
	      if (state.parent && state.parent.data) {
	        state.data = state.self.data = extend({}, state.parent.data, state.data);
	      }
	      return state.data;
	    },

	    // Build a URLMatcher if necessary, either via a relative or absolute URL
	    url: function(state) {
	      var url = state.url, config = { params: state.params || {} };

	      if (isString(url)) {
	        if (url.charAt(0) == '^') return $urlMatcherFactory.compile(url.substring(1), config);
	        return (state.parent.navigable || root).url.concat(url, config);
	      }

	      if (!url || $urlMatcherFactory.isMatcher(url)) return url;
	      throw new Error("Invalid url '" + url + "' in state '" + state + "'");
	    },

	    // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
	    navigable: function(state) {
	      return state.url ? state : (state.parent ? state.parent.navigable : null);
	    },

	    // Own parameters for this state. state.url.params is already built at this point. Create and add non-url params
	    ownParams: function(state) {
	      var params = state.url && state.url.params || new $$UMFP.ParamSet();
	      forEach(state.params || {}, function(config, id) {
	        if (!params[id]) params[id] = new $$UMFP.Param(id, null, config, "config");
	      });
	      return params;
	    },

	    // Derive parameters for this state and ensure they're a super-set of parent's parameters
	    params: function(state) {
	      return state.parent && state.parent.params ? extend(state.parent.params.$$new(), state.ownParams) : new $$UMFP.ParamSet();
	    },

	    // If there is no explicit multi-view configuration, make one up so we don't have
	    // to handle both cases in the view directive later. Note that having an explicit
	    // 'views' property will mean the default unnamed view properties are ignored. This
	    // is also a good time to resolve view names to absolute names, so everything is a
	    // straight lookup at link time.
	    views: function(state) {
	      var views = {};

	      forEach(isDefined(state.views) ? state.views : { '': state }, function (view, name) {
	        if (name.indexOf('@') < 0) name += '@' + state.parent.name;
	        views[name] = view;
	      });
	      return views;
	    },

	    // Keep a full path from the root down to this state as this is needed for state activation.
	    path: function(state) {
	      return state.parent ? state.parent.path.concat(state) : []; // exclude root from path
	    },

	    // Speed up $state.contains() as it's used a lot
	    includes: function(state) {
	      var includes = state.parent ? extend({}, state.parent.includes) : {};
	      includes[state.name] = true;
	      return includes;
	    },

	    $delegates: {}
	  };

	  function isRelative(stateName) {
	    return stateName.indexOf(".") === 0 || stateName.indexOf("^") === 0;
	  }

	  function findState(stateOrName, base) {
	    if (!stateOrName) return undefined;

	    var isStr = isString(stateOrName),
	        name  = isStr ? stateOrName : stateOrName.name,
	        path  = isRelative(name);

	    if (path) {
	      if (!base) throw new Error("No reference point given for path '"  + name + "'");
	      base = findState(base);
	      
	      var rel = name.split("."), i = 0, pathLength = rel.length, current = base;

	      for (; i < pathLength; i++) {
	        if (rel[i] === "" && i === 0) {
	          current = base;
	          continue;
	        }
	        if (rel[i] === "^") {
	          if (!current.parent) throw new Error("Path '" + name + "' not valid for state '" + base.name + "'");
	          current = current.parent;
	          continue;
	        }
	        break;
	      }
	      rel = rel.slice(i).join(".");
	      name = current.name + (current.name && rel ? "." : "") + rel;
	    }
	    var state = states[name];

	    if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
	      return state;
	    }
	    return undefined;
	  }

	  function queueState(parentName, state) {
	    if (!queue[parentName]) {
	      queue[parentName] = [];
	    }
	    queue[parentName].push(state);
	  }

	  function flushQueuedChildren(parentName) {
	    var queued = queue[parentName] || [];
	    while(queued.length) {
	      registerState(queued.shift());
	    }
	  }

	  function registerState(state) {
	    // Wrap a new object around the state so we can store our private details easily.
	    state = inherit(state, {
	      self: state,
	      resolve: state.resolve || {},
	      toString: function() { return this.name; }
	    });

	    var name = state.name;
	    if (!isString(name) || name.indexOf('@') >= 0) throw new Error("State must have a valid name");
	    if (states.hasOwnProperty(name)) throw new Error("State '" + name + "'' is already defined");

	    // Get parent name
	    var parentName = (name.indexOf('.') !== -1) ? name.substring(0, name.lastIndexOf('.'))
	        : (isString(state.parent)) ? state.parent
	        : (isObject(state.parent) && isString(state.parent.name)) ? state.parent.name
	        : '';

	    // If parent is not registered yet, add state to queue and register later
	    if (parentName && !states[parentName]) {
	      return queueState(parentName, state.self);
	    }

	    for (var key in stateBuilder) {
	      if (isFunction(stateBuilder[key])) state[key] = stateBuilder[key](state, stateBuilder.$delegates[key]);
	    }
	    states[name] = state;

	    // Register the state in the global state list and with $urlRouter if necessary.
	    if (!state[abstractKey] && state.url) {
	      $urlRouterProvider.when(state.url, ['$match', '$stateParams', function ($match, $stateParams) {
	        if ($state.$current.navigable != state || !equalForKeys($match, $stateParams)) {
	          $state.transitionTo(state, $match, { inherit: true, location: false });
	        }
	      }]);
	    }

	    // Register any queued children
	    flushQueuedChildren(name);

	    return state;
	  }

	  // Checks text to see if it looks like a glob.
	  function isGlob (text) {
	    return text.indexOf('*') > -1;
	  }

	  // Returns true if glob matches current $state name.
	  function doesStateMatchGlob (glob) {
	    var globSegments = glob.split('.'),
	        segments = $state.$current.name.split('.');

	    //match greedy starts
	    if (globSegments[0] === '**') {
	       segments = segments.slice(indexOf(segments, globSegments[1]));
	       segments.unshift('**');
	    }
	    //match greedy ends
	    if (globSegments[globSegments.length - 1] === '**') {
	       segments.splice(indexOf(segments, globSegments[globSegments.length - 2]) + 1, Number.MAX_VALUE);
	       segments.push('**');
	    }

	    if (globSegments.length != segments.length) {
	      return false;
	    }

	    //match single stars
	    for (var i = 0, l = globSegments.length; i < l; i++) {
	      if (globSegments[i] === '*') {
	        segments[i] = '*';
	      }
	    }

	    return segments.join('') === globSegments.join('');
	  }


	  // Implicit root state that is always active
	  root = registerState({
	    name: '',
	    url: '^',
	    views: null,
	    'abstract': true
	  });
	  root.navigable = null;


	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#decorator
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Allows you to extend (carefully) or override (at your own peril) the 
	   * `stateBuilder` object used internally by `$stateProvider`. This can be used 
	   * to add custom functionality to ui-router, for example inferring templateUrl 
	   * based on the state name.
	   *
	   * When passing only a name, it returns the current (original or decorated) builder
	   * function that matches `name`.
	   *
	   * The builder functions that can be decorated are listed below. Though not all
	   * necessarily have a good use case for decoration, that is up to you to decide.
	   *
	   * In addition, users can attach custom decorators, which will generate new 
	   * properties within the state's internal definition. There is currently no clear 
	   * use-case for this beyond accessing internal states (i.e. $state.$current), 
	   * however, expect this to become increasingly relevant as we introduce additional 
	   * meta-programming features.
	   *
	   * **Warning**: Decorators should not be interdependent because the order of 
	   * execution of the builder functions in non-deterministic. Builder functions 
	   * should only be dependent on the state definition object and super function.
	   *
	   *
	   * Existing builder functions and current return values:
	   *
	   * - **parent** `{object}` - returns the parent state object.
	   * - **data** `{object}` - returns state data, including any inherited data that is not
	   *   overridden by own values (if any).
	   * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
	   *   or `null`.
	   * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is 
	   *   navigable).
	   * - **params** `{object}` - returns an array of state params that are ensured to 
	   *   be a super-set of parent's params.
	   * - **views** `{object}` - returns a views object where each key is an absolute view 
	   *   name (i.e. "viewName@stateName") and each value is the config object 
	   *   (template, controller) for the view. Even when you don't use the views object 
	   *   explicitly on a state config, one is still created for you internally.
	   *   So by decorating this builder function you have access to decorating template 
	   *   and controller properties.
	   * - **ownParams** `{object}` - returns an array of params that belong to the state, 
	   *   not including any params defined by ancestor states.
	   * - **path** `{string}` - returns the full path from the root down to this state. 
	   *   Needed for state activation.
	   * - **includes** `{object}` - returns an object that includes every state that 
	   *   would pass a `$state.includes()` test.
	   *
	   * @example
	   * <pre>
	   * // Override the internal 'views' builder with a function that takes the state
	   * // definition, and a reference to the internal function being overridden:
	   * $stateProvider.decorator('views', function (state, parent) {
	   *   var result = {},
	   *       views = parent(state);
	   *
	   *   angular.forEach(views, function (config, name) {
	   *     var autoName = (state.name + '.' + name).replace('.', '/');
	   *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
	   *     result[name] = config;
	   *   });
	   *   return result;
	   * });
	   *
	   * $stateProvider.state('home', {
	   *   views: {
	   *     'contact.list': { controller: 'ListController' },
	   *     'contact.item': { controller: 'ItemController' }
	   *   }
	   * });
	   *
	   * // ...
	   *
	   * $state.go('home');
	   * // Auto-populates list and item views with /partials/home/contact/list.html,
	   * // and /partials/home/contact/item.html, respectively.
	   * </pre>
	   *
	   * @param {string} name The name of the builder function to decorate. 
	   * @param {object} func A function that is responsible for decorating the original 
	   * builder function. The function receives two parameters:
	   *
	   *   - `{object}` - state - The state config object.
	   *   - `{object}` - super - The original builder function.
	   *
	   * @return {object} $stateProvider - $stateProvider instance
	   */
	  this.decorator = decorator;
	  function decorator(name, func) {
	    /*jshint validthis: true */
	    if (isString(name) && !isDefined(func)) {
	      return stateBuilder[name];
	    }
	    if (!isFunction(func) || !isString(name)) {
	      return this;
	    }
	    if (stateBuilder[name] && !stateBuilder.$delegates[name]) {
	      stateBuilder.$delegates[name] = stateBuilder[name];
	    }
	    stateBuilder[name] = func;
	    return this;
	  }

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$stateProvider#state
	   * @methodOf ui.router.state.$stateProvider
	   *
	   * @description
	   * Registers a state configuration under a given state name. The stateConfig object
	   * has the following acceptable properties.
	   *
	   * @param {string} name A unique state name, e.g. "home", "about", "contacts".
	   * To create a parent/child state use a dot, e.g. "about.sales", "home.newest".
	   * @param {object} stateConfig State configuration object.
	   * @param {string|function=} stateConfig.template
	   * <a id='template'></a>
	   *   html template as a string or a function that returns
	   *   an html template as a string which should be used by the uiView directives. This property 
	   *   takes precedence over templateUrl.
	   *   
	   *   If `template` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by
	   *     applying the current state
	   *
	   * <pre>template:
	   *   "<h1>inline template definition</h1>" +
	   *   "<div ui-view></div>"</pre>
	   * <pre>template: function(params) {
	   *       return "<h1>generated template</h1>"; }</pre>
	   * </div>
	   *
	   * @param {string|function=} stateConfig.templateUrl
	   * <a id='templateUrl'></a>
	   *
	   *   path or function that returns a path to an html
	   *   template that should be used by uiView.
	   *   
	   *   If `templateUrl` is a function, it will be called with the following parameters:
	   *
	   *   - {array.&lt;object&gt;} - state parameters extracted from the current $location.path() by 
	   *     applying the current state
	   *
	   * <pre>templateUrl: "home.html"</pre>
	   * <pre>templateUrl: function(params) {
	   *     return myTemplates[params.pageId]; }</pre>
	   *
	   * @param {function=} stateConfig.templateProvider
	   * <a id='templateProvider'></a>
	   *    Provider function that returns HTML content string.
	   * <pre> templateProvider:
	   *       function(MyTemplateService, params) {
	   *         return MyTemplateService.getTemplate(params.pageId);
	   *       }</pre>
	   *
	   * @param {string|function=} stateConfig.controller
	   * <a id='controller'></a>
	   *
	   *  Controller fn that should be associated with newly
	   *   related scope or the name of a registered controller if passed as a string.
	   *   Optionally, the ControllerAs may be declared here.
	   * <pre>controller: "MyRegisteredController"</pre>
	   * <pre>controller:
	   *     "MyRegisteredController as fooCtrl"}</pre>
	   * <pre>controller: function($scope, MyService) {
	   *     $scope.data = MyService.getData(); }</pre>
	   *
	   * @param {function=} stateConfig.controllerProvider
	   * <a id='controllerProvider'></a>
	   *
	   * Injectable provider function that returns the actual controller or string.
	   * <pre>controllerProvider:
	   *   function(MyResolveData) {
	   *     if (MyResolveData.foo)
	   *       return "FooCtrl"
	   *     else if (MyResolveData.bar)
	   *       return "BarCtrl";
	   *     else return function($scope) {
	   *       $scope.baz = "Qux";
	   *     }
	   *   }</pre>
	   *
	   * @param {string=} stateConfig.controllerAs
	   * <a id='controllerAs'></a>
	   * 
	   * A controller alias name. If present the controller will be
	   *   published to scope under the controllerAs name.
	   * <pre>controllerAs: "myCtrl"</pre>
	   *
	   * @param {object=} stateConfig.resolve
	   * <a id='resolve'></a>
	   *
	   * An optional map&lt;string, function&gt; of dependencies which
	   *   should be injected into the controller. If any of these dependencies are promises, 
	   *   the router will wait for them all to be resolved before the controller is instantiated.
	   *   If all the promises are resolved successfully, the $stateChangeSuccess event is fired
	   *   and the values of the resolved promises are injected into any controllers that reference them.
	   *   If any  of the promises are rejected the $stateChangeError event is fired.
	   *
	   *   The map object is:
	   *   
	   *   - key - {string}: name of dependency to be injected into controller
	   *   - factory - {string|function}: If string then it is alias for service. Otherwise if function, 
	   *     it is injected and return value it treated as dependency. If result is a promise, it is 
	   *     resolved before its value is injected into controller.
	   *
	   * <pre>resolve: {
	   *     myResolve1:
	   *       function($http, $stateParams) {
	   *         return $http.get("/api/foos/"+stateParams.fooID);
	   *       }
	   *     }</pre>
	   *
	   * @param {string=} stateConfig.url
	   * <a id='url'></a>
	   *
	   *   A url fragment with optional parameters. When a state is navigated or
	   *   transitioned to, the `$stateParams` service will be populated with any 
	   *   parameters that were passed.
	   *
	   * examples:
	   * <pre>url: "/home"
	   * url: "/users/:userid"
	   * url: "/books/{bookid:[a-zA-Z_-]}"
	   * url: "/books/{categoryid:int}"
	   * url: "/books/{publishername:string}/{categoryid:int}"
	   * url: "/messages?before&after"
	   * url: "/messages?{before:date}&{after:date}"</pre>
	   * url: "/messages/:mailboxid?{before:date}&{after:date}"
	   *
	   * @param {object=} stateConfig.views
	   * <a id='views'></a>
	   * an optional map&lt;string, object&gt; which defined multiple views, or targets views
	   * manually/explicitly.
	   *
	   * Examples:
	   *
	   * Targets three named `ui-view`s in the parent state's template
	   * <pre>views: {
	   *     header: {
	   *       controller: "headerCtrl",
	   *       templateUrl: "header.html"
	   *     }, body: {
	   *       controller: "bodyCtrl",
	   *       templateUrl: "body.html"
	   *     }, footer: {
	   *       controller: "footCtrl",
	   *       templateUrl: "footer.html"
	   *     }
	   *   }</pre>
	   *
	   * Targets named `ui-view="header"` from grandparent state 'top''s template, and named `ui-view="body" from parent state's template.
	   * <pre>views: {
	   *     'header@top': {
	   *       controller: "msgHeaderCtrl",
	   *       templateUrl: "msgHeader.html"
	   *     }, 'body': {
	   *       controller: "messagesCtrl",
	   *       templateUrl: "messages.html"
	   *     }
	   *   }</pre>
	   *
	   * @param {boolean=} [stateConfig.abstract=false]
	   * <a id='abstract'></a>
	   * An abstract state will never be directly activated,
	   *   but can provide inherited properties to its common children states.
	   * <pre>abstract: true</pre>
	   *
	   * @param {function=} stateConfig.onEnter
	   * <a id='onEnter'></a>
	   *
	   * Callback function for when a state is entered. Good way
	   *   to trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onEnter: function(MyService, $stateParams) {
	   *     MyService.foo($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {function=} stateConfig.onExit
	   * <a id='onExit'></a>
	   *
	   * Callback function for when a state is exited. Good way to
	   *   trigger an action or dispatch an event, such as opening a dialog.
	   * If minifying your scripts, make sure to explictly annotate this function,
	   * because it won't be automatically annotated by your build tools.
	   *
	   * <pre>onExit: function(MyService, $stateParams) {
	   *     MyService.cleanup($stateParams.myParam);
	   * }</pre>
	   *
	   * @param {boolean=} [stateConfig.reloadOnSearch=true]
	   * <a id='reloadOnSearch'></a>
	   *
	   * If `false`, will not retrigger the same state
	   *   just because a search/query parameter has changed (via $location.search() or $location.hash()). 
	   *   Useful for when you'd like to modify $location.search() without triggering a reload.
	   * <pre>reloadOnSearch: false</pre>
	   *
	   * @param {object=} stateConfig.data
	   * <a id='data'></a>
	   *
	   * Arbitrary data object, useful for custom configuration.  The parent state's `data` is
	   *   prototypally inherited.  In other words, adding a data property to a state adds it to
	   *   the entire subtree via prototypal inheritance.
	   *
	   * <pre>data: {
	   *     requiredRole: 'foo'
	   * } </pre>
	   *
	   * @param {object=} stateConfig.params
	   * <a id='params'></a>
	   *
	   * A map which optionally configures parameters declared in the `url`, or
	   *   defines additional non-url parameters.  For each parameter being
	   *   configured, add a configuration object keyed to the name of the parameter.
	   *
	   *   Each parameter configuration object may contain the following properties:
	   *
	   *   - ** value ** - {object|function=}: specifies the default value for this
	   *     parameter.  This implicitly sets this parameter as optional.
	   *
	   *     When UI-Router routes to a state and no value is
	   *     specified for this parameter in the URL or transition, the
	   *     default value will be used instead.  If `value` is a function,
	   *     it will be injected and invoked, and the return value used.
	   *
	   *     *Note*: `undefined` is treated as "no default value" while `null`
	   *     is treated as "the default value is `null`".
	   *
	   *     *Shorthand*: If you only need to configure the default value of the
	   *     parameter, you may use a shorthand syntax.   In the **`params`**
	   *     map, instead mapping the param name to a full parameter configuration
	   *     object, simply set map it to the default parameter value, e.g.:
	   *
	   * <pre>// define a parameter's default value
	   * params: {
	   *     param1: { value: "defaultValue" }
	   * }
	   * // shorthand default values
	   * params: {
	   *     param1: "defaultValue",
	   *     param2: "param2Default"
	   * }</pre>
	   *
	   *   - ** array ** - {boolean=}: *(default: false)* If true, the param value will be
	   *     treated as an array of values.  If you specified a Type, the value will be
	   *     treated as an array of the specified Type.  Note: query parameter values
	   *     default to a special `"auto"` mode.
	   *
	   *     For query parameters in `"auto"` mode, if multiple  values for a single parameter
	   *     are present in the URL (e.g.: `/foo?bar=1&bar=2&bar=3`) then the values
	   *     are mapped to an array (e.g.: `{ foo: [ '1', '2', '3' ] }`).  However, if
	   *     only one value is present (e.g.: `/foo?bar=1`) then the value is treated as single
	   *     value (e.g.: `{ foo: '1' }`).
	   *
	   * <pre>params: {
	   *     param1: { array: true }
	   * }</pre>
	   *
	   *   - ** squash ** - {bool|string=}: `squash` configures how a default parameter value is represented in the URL when
	   *     the current parameter value is the same as the default value. If `squash` is not set, it uses the
	   *     configured default squash policy.
	   *     (See {@link ui.router.util.$urlMatcherFactory#methods_defaultSquashPolicy `defaultSquashPolicy()`})
	   *
	   *   There are three squash settings:
	   *
	   *     - false: The parameter's default value is not squashed.  It is encoded and included in the URL
	   *     - true: The parameter's default value is omitted from the URL.  If the parameter is preceeded and followed
	   *       by slashes in the state's `url` declaration, then one of those slashes are omitted.
	   *       This can allow for cleaner looking URLs.
	   *     - `"<arbitrary string>"`: The parameter's default value is replaced with an arbitrary placeholder of  your choice.
	   *
	   * <pre>params: {
	   *     param1: {
	   *       value: "defaultId",
	   *       squash: true
	   * } }
	   * // squash "defaultValue" to "~"
	   * params: {
	   *     param1: {
	   *       value: "defaultValue",
	   *       squash: "~"
	   * } }
	   * </pre>
	   *
	   *
	   * @example
	   * <pre>
	   * // Some state name examples
	   *
	   * // stateName can be a single top-level name (must be unique).
	   * $stateProvider.state("home", {});
	   *
	   * // Or it can be a nested state name. This state is a child of the
	   * // above "home" state.
	   * $stateProvider.state("home.newest", {});
	   *
	   * // Nest states as deeply as needed.
	   * $stateProvider.state("home.newest.abc.xyz.inception", {});
	   *
	   * // state() returns $stateProvider, so you can chain state declarations.
	   * $stateProvider
	   *   .state("home", {})
	   *   .state("about", {})
	   *   .state("contacts", {});
	   * </pre>
	   *
	   */
	  this.state = state;
	  function state(name, definition) {
	    /*jshint validthis: true */
	    if (isObject(name)) definition = name;
	    else definition.name = name;
	    registerState(definition);
	    return this;
	  }

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$state
	   *
	   * @requires $rootScope
	   * @requires $q
	   * @requires ui.router.state.$view
	   * @requires $injector
	   * @requires ui.router.util.$resolve
	   * @requires ui.router.state.$stateParams
	   * @requires ui.router.router.$urlRouter
	   *
	   * @property {object} params A param object, e.g. {sectionId: section.id)}, that 
	   * you'd like to test against the current active state.
	   * @property {object} current A reference to the state's config object. However 
	   * you passed it in. Useful for accessing custom data.
	   * @property {object} transition Currently pending transition. A promise that'll 
	   * resolve or reject.
	   *
	   * @description
	   * `$state` service is responsible for representing states as well as transitioning
	   * between them. It also provides interfaces to ask for current state or even states
	   * you're coming from.
	   */
	  this.$get = $get;
	  $get.$inject = ['$rootScope', '$q', '$view', '$injector', '$resolve', '$stateParams', '$urlRouter', '$location', '$urlMatcherFactory'];
	  function $get(   $rootScope,   $q,   $view,   $injector,   $resolve,   $stateParams,   $urlRouter,   $location,   $urlMatcherFactory) {

	    var TransitionSuperseded = $q.reject(new Error('transition superseded'));
	    var TransitionPrevented = $q.reject(new Error('transition prevented'));
	    var TransitionAborted = $q.reject(new Error('transition aborted'));
	    var TransitionFailed = $q.reject(new Error('transition failed'));

	    // Handles the case where a state which is the target of a transition is not found, and the user
	    // can optionally retry or defer the transition
	    function handleRedirect(redirect, state, params, options) {
	      /**
	       * @ngdoc event
	       * @name ui.router.state.$state#$stateNotFound
	       * @eventOf ui.router.state.$state
	       * @eventType broadcast on root scope
	       * @description
	       * Fired when a requested state **cannot be found** using the provided state name during transition.
	       * The event is broadcast allowing any handlers a single chance to deal with the error (usually by
	       * lazy-loading the unfound state). A special `unfoundState` object is passed to the listener handler,
	       * you can see its three properties in the example. You can use `event.preventDefault()` to abort the
	       * transition and the promise returned from `go` will be rejected with a `'transition aborted'` value.
	       *
	       * @param {Object} event Event object.
	       * @param {Object} unfoundState Unfound State information. Contains: `to, toParams, options` properties.
	       * @param {State} fromState Current state object.
	       * @param {Object} fromParams Current state params.
	       *
	       * @example
	       *
	       * <pre>
	       * // somewhere, assume lazy.state has not been defined
	       * $state.go("lazy.state", {a:1, b:2}, {inherit:false});
	       *
	       * // somewhere else
	       * $scope.$on('$stateNotFound',
	       * function(event, unfoundState, fromState, fromParams){
	       *     console.log(unfoundState.to); // "lazy.state"
	       *     console.log(unfoundState.toParams); // {a:1, b:2}
	       *     console.log(unfoundState.options); // {inherit:false} + default options
	       * })
	       * </pre>
	       */
	      var evt = $rootScope.$broadcast('$stateNotFound', redirect, state, params);

	      if (evt.defaultPrevented) {
	        $urlRouter.update();
	        return TransitionAborted;
	      }

	      if (!evt.retry) {
	        return null;
	      }

	      // Allow the handler to return a promise to defer state lookup retry
	      if (options.$retry) {
	        $urlRouter.update();
	        return TransitionFailed;
	      }
	      var retryTransition = $state.transition = $q.when(evt.retry);

	      retryTransition.then(function() {
	        if (retryTransition !== $state.transition) return TransitionSuperseded;
	        redirect.options.$retry = true;
	        return $state.transitionTo(redirect.to, redirect.toParams, redirect.options);
	      }, function() {
	        return TransitionAborted;
	      });
	      $urlRouter.update();

	      return retryTransition;
	    }

	    root.locals = { resolve: null, globals: { $stateParams: {} } };

	    $state = {
	      params: {},
	      current: root.self,
	      $current: root,
	      transition: null
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#reload
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method that force reloads the current state. All resolves are re-resolved, events are not re-fired, 
	     * and controllers reinstantiated (bug with controllers reinstantiating right now, fixing soon).
	     *
	     * @example
	     * <pre>
	     * var app angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.reload = function(){
	     *     $state.reload();
	     *   }
	     * });
	     * </pre>
	     *
	     * `reload()` is just an alias for:
	     * <pre>
	     * $state.transitionTo($state.current, $stateParams, { 
	     *   reload: true, inherit: false, notify: true
	     * });
	     * </pre>
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.reload = function reload() {
	      return $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: true });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#go
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Convenience method for transitioning to a new state. `$state.go` calls 
	     * `$state.transitionTo` internally but automatically sets options to 
	     * `{ location: true, inherit: true, relative: $state.$current, notify: true }`. 
	     * This allows you to easily use an absolute or relative to path and specify 
	     * only the parameters you'd like to update (while letting unspecified parameters 
	     * inherit from the currently active ancestor states).
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.go('contact.detail');
	     *   };
	     * });
	     * </pre>
	     * <img src='../ngdoc_assets/StateGoExamples.png'/>
	     *
	     * @param {string} to Absolute state name or relative state path. Some examples:
	     *
	     * - `$state.go('contact.detail')` - will go to the `contact.detail` state
	     * - `$state.go('^')` - will go to a parent state
	     * - `$state.go('^.sibling')` - will go to a sibling state
	     * - `$state.go('.child.grandchild')` - will go to grandchild state
	     *
	     * @param {object=} params A map of the parameters that will be sent to the state, 
	     * will populate $stateParams. Any parameters that are not specified will be inherited from currently 
	     * defined parameters. This allows, for example, going to a sibling state that shares parameters
	     * specified in a parent state. Parameter inheritance only works between common ancestor states, I.e.
	     * transitioning to a sibling will get you the parameters for all parents, transitioning to a child
	     * will get you all current parameters, etc.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition.
	     *
	     * Possible success values:
	     *
	     * - $state.current
	     *
	     * <br/>Possible rejection values:
	     *
	     * - 'transition superseded' - when a newer transition has been started after this one
	     * - 'transition prevented' - when `event.preventDefault()` has been called in a `$stateChangeStart` listener
	     * - 'transition aborted' - when `event.preventDefault()` has been called in a `$stateNotFound` listener or
	     *   when a `$stateNotFound` `event.retry` promise errors.
	     * - 'transition failed' - when a state has been unsuccessfully found after 2 tries.
	     * - *resolve error* - when an error has occurred with a `resolve`
	     *
	     */
	    $state.go = function go(to, params, options) {
	      return $state.transitionTo(to, params, extend({ inherit: true, relative: $state.$current }, options));
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#transitionTo
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Low-level method for transitioning to a new state. {@link ui.router.state.$state#methods_go $state.go}
	     * uses `transitionTo` internally. `$state.go` is recommended in most situations.
	     *
	     * @example
	     * <pre>
	     * var app = angular.module('app', ['ui.router']);
	     *
	     * app.controller('ctrl', function ($scope, $state) {
	     *   $scope.changeState = function () {
	     *     $state.transitionTo('contact.detail');
	     *   };
	     * });
	     * </pre>
	     *
	     * @param {string} to State name.
	     * @param {object=} toParams A map of the parameters that will be sent to the state,
	     * will populate $stateParams.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`location`** - {boolean=true|string=} - If `true` will update the url in the location bar, if `false`
	     *    will not. If string, must be `"replace"`, which will update url and also replace last history record.
	     * - **`inherit`** - {boolean=false}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`notify`** - {boolean=true}, If `true` will broadcast $stateChangeStart and $stateChangeSuccess events.
	     * - **`reload`** (v0.2.5) - {boolean=false}, If `true` will force transition even if the state or params 
	     *    have not changed, aka a reload of the same state. It differs from reloadOnSearch because you'd
	     *    use this when you want to force a reload when *everything* is the same, including search params.
	     *
	     * @returns {promise} A promise representing the state of the new transition. See
	     * {@link ui.router.state.$state#methods_go $state.go}.
	     */
	    $state.transitionTo = function transitionTo(to, toParams, options) {
	      toParams = toParams || {};
	      options = extend({
	        location: true, inherit: false, relative: null, notify: true, reload: false, $retry: false
	      }, options || {});

	      var from = $state.$current, fromParams = $state.params, fromPath = from.path;
	      var evt, toState = findState(to, options.relative);

	      if (!isDefined(toState)) {
	        var redirect = { to: to, toParams: toParams, options: options };
	        var redirectResult = handleRedirect(redirect, from.self, fromParams, options);

	        if (redirectResult) {
	          return redirectResult;
	        }

	        // Always retry once if the $stateNotFound was not prevented
	        // (handles either redirect changed or state lazy-definition)
	        to = redirect.to;
	        toParams = redirect.toParams;
	        options = redirect.options;
	        toState = findState(to, options.relative);

	        if (!isDefined(toState)) {
	          if (!options.relative) throw new Error("No such state '" + to + "'");
	          throw new Error("Could not resolve '" + to + "' from state '" + options.relative + "'");
	        }
	      }
	      if (toState[abstractKey]) throw new Error("Cannot transition to abstract state '" + to + "'");
	      if (options.inherit) toParams = inheritParams($stateParams, toParams || {}, $state.$current, toState);
	      if (!toState.params.$$validates(toParams)) return TransitionFailed;

	      toParams = toState.params.$$values(toParams);
	      to = toState;

	      var toPath = to.path;

	      // Starting from the root of the path, keep all levels that haven't changed
	      var keep = 0, state = toPath[keep], locals = root.locals, toLocals = [];

	      if (!options.reload) {
	        while (state && state === fromPath[keep] && state.ownParams.$$equals(toParams, fromParams)) {
	          locals = toLocals[keep] = state.locals;
	          keep++;
	          state = toPath[keep];
	        }
	      }

	      // If we're going to the same state and all locals are kept, we've got nothing to do.
	      // But clear 'transition', as we still want to cancel any other pending transitions.
	      // TODO: We may not want to bump 'transition' if we're called from a location change
	      // that we've initiated ourselves, because we might accidentally abort a legitimate
	      // transition initiated from code?
	      if (shouldTriggerReload(to, from, locals, options)) {
	        if (to.self.reloadOnSearch !== false) $urlRouter.update();
	        $state.transition = null;
	        return $q.when($state.current);
	      }

	      // Filter parameters before we pass them to event handlers etc.
	      toParams = filterByKeys(to.params.$$keys(), toParams || {});

	      // Broadcast start event and cancel the transition if requested
	      if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeStart
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when the state transition **begins**. You can use `event.preventDefault()`
	         * to prevent the transition from happening and then the transition promise will be
	         * rejected with a `'transition prevented'` value.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         *
	         * @example
	         *
	         * <pre>
	         * $rootScope.$on('$stateChangeStart',
	         * function(event, toState, toParams, fromState, fromParams){
	         *     event.preventDefault();
	         *     // transitionTo() promise will be rejected with
	         *     // a 'transition prevented' error
	         * })
	         * </pre>
	         */
	        if ($rootScope.$broadcast('$stateChangeStart', to.self, toParams, from.self, fromParams).defaultPrevented) {
	          $urlRouter.update();
	          return TransitionPrevented;
	        }
	      }

	      // Resolve locals for the remaining states, but don't update any global state just
	      // yet -- if anything fails to resolve the current state needs to remain untouched.
	      // We also set up an inheritance chain for the locals here. This allows the view directive
	      // to quickly look up the correct definition for each view in the current state. Even
	      // though we create the locals object itself outside resolveState(), it is initially
	      // empty and gets filled asynchronously. We need to keep track of the promise for the
	      // (fully resolved) current locals, and pass this down the chain.
	      var resolved = $q.when(locals);

	      for (var l = keep; l < toPath.length; l++, state = toPath[l]) {
	        locals = toLocals[l] = inherit(locals);
	        resolved = resolveState(state, toParams, state === to, resolved, locals, options);
	      }

	      // Once everything is resolved, we are ready to perform the actual transition
	      // and return a promise for the new state. We also keep track of what the
	      // current promise is, so that we can detect overlapping transitions and
	      // keep only the outcome of the last transition.
	      var transition = $state.transition = resolved.then(function () {
	        var l, entering, exiting;

	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Exit 'from' states not kept
	        for (l = fromPath.length - 1; l >= keep; l--) {
	          exiting = fromPath[l];
	          if (exiting.self.onExit) {
	            $injector.invoke(exiting.self.onExit, exiting.self, exiting.locals.globals);
	          }
	          exiting.locals = null;
	        }

	        // Enter 'to' states not kept
	        for (l = keep; l < toPath.length; l++) {
	          entering = toPath[l];
	          entering.locals = toLocals[l];
	          if (entering.self.onEnter) {
	            $injector.invoke(entering.self.onEnter, entering.self, entering.locals.globals);
	          }
	        }

	        // Run it again, to catch any transitions in callbacks
	        if ($state.transition !== transition) return TransitionSuperseded;

	        // Update globals in $state
	        $state.$current = to;
	        $state.current = to.self;
	        $state.params = toParams;
	        copy($state.params, $stateParams);
	        $state.transition = null;

	        if (options.location && to.navigable) {
	          $urlRouter.push(to.navigable.url, to.navigable.locals.globals.$stateParams, {
	            $$avoidResync: true, replace: options.location === 'replace'
	          });
	        }

	        if (options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeSuccess
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired once the state transition is **complete**.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         */
	          $rootScope.$broadcast('$stateChangeSuccess', to.self, toParams, from.self, fromParams);
	        }
	        $urlRouter.update(true);

	        return $state.current;
	      }, function (error) {
	        if ($state.transition !== transition) return TransitionSuperseded;

	        $state.transition = null;
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$stateChangeError
	         * @eventOf ui.router.state.$state
	         * @eventType broadcast on root scope
	         * @description
	         * Fired when an **error occurs** during transition. It's important to note that if you
	         * have any errors in your resolve functions (javascript errors, non-existent services, etc)
	         * they will not throw traditionally. You must listen for this $stateChangeError event to
	         * catch **ALL** errors.
	         *
	         * @param {Object} event Event object.
	         * @param {State} toState The state being transitioned to.
	         * @param {Object} toParams The params supplied to the `toState`.
	         * @param {State} fromState The current state, pre-transition.
	         * @param {Object} fromParams The params supplied to the `fromState`.
	         * @param {Error} error The resolve error object.
	         */
	        evt = $rootScope.$broadcast('$stateChangeError', to.self, toParams, from.self, fromParams, error);

	        if (!evt.defaultPrevented) {
	            $urlRouter.update();
	        }

	        return $q.reject(error);
	      });

	      return transition;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#is
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Similar to {@link ui.router.state.$state#methods_includes $state.includes},
	     * but only checks for the full state name. If params is supplied then it will be
	     * tested for strict equality against the current active params object, so all params
	     * must match with none missing and no extras.
	     *
	     * @example
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // absolute name
	     * $state.is('contact.details.item'); // returns true
	     * $state.is(contactDetailItemStateObject); // returns true
	     *
	     * // relative name (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name (absolute or relative) or state object you'd like to check.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`, that you'd like
	     * to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object} -  If `stateOrName` is a relative state name and `options.relative` is set, .is will
	     * test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it is the state.
	     */
	    $state.is = function is(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) { return undefined; }
	      if ($state.$current !== state) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams) : true;
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#includes
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A method to determine if the current active state is equal to or is the child of the
	     * state stateName. If any params are passed then they will be tested for a match as well.
	     * Not all the parameters need to be passed, just the ones you'd like to test for equality.
	     *
	     * @example
	     * Partial and relative names
	     * <pre>
	     * $state.$current.name = 'contacts.details.item';
	     *
	     * // Using partial names
	     * $state.includes("contacts"); // returns true
	     * $state.includes("contacts.details"); // returns true
	     * $state.includes("contacts.details.item"); // returns true
	     * $state.includes("contacts.list"); // returns false
	     * $state.includes("about"); // returns false
	     *
	     * // Using relative names (. and ^), typically from a template
	     * // E.g. from the 'contacts.details' template
	     * <div ng-class="{highlighted: $state.includes('.item')}">Item</div>
	     * </pre>
	     *
	     * Basic globbing patterns
	     * <pre>
	     * $state.$current.name = 'contacts.details.item.url';
	     *
	     * $state.includes("*.details.*.*"); // returns true
	     * $state.includes("*.details.**"); // returns true
	     * $state.includes("**.item.**"); // returns true
	     * $state.includes("*.details.item.url"); // returns true
	     * $state.includes("*.details.*.url"); // returns true
	     * $state.includes("*.details.*"); // returns false
	     * $state.includes("item.**"); // returns false
	     * </pre>
	     *
	     * @param {string} stateOrName A partial name, relative name, or glob pattern
	     * to be searched for within the current state name.
	     * @param {object=} params A param object, e.g. `{sectionId: section.id}`,
	     * that you'd like to test against the current active state.
	     * @param {object=} options An options object.  The options are:
	     *
	     * - **`relative`** - {string|object=} -  If `stateOrName` is a relative state reference and `options.relative` is set,
	     * .includes will test relative to `options.relative` state (or name).
	     *
	     * @returns {boolean} Returns true if it does include the state
	     */
	    $state.includes = function includes(stateOrName, params, options) {
	      options = extend({ relative: $state.$current }, options || {});
	      if (isString(stateOrName) && isGlob(stateOrName)) {
	        if (!doesStateMatchGlob(stateOrName)) {
	          return false;
	        }
	        stateOrName = $state.$current.name;
	      }

	      var state = findState(stateOrName, options.relative);
	      if (!isDefined(state)) { return undefined; }
	      if (!isDefined($state.$current.includes[state.name])) { return false; }
	      return params ? equalForKeys(state.params.$$values(params), $stateParams, objectKeys(params)) : true;
	    };


	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#href
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * A url generation method that returns the compiled url for the given state populated with the given params.
	     *
	     * @example
	     * <pre>
	     * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
	     * </pre>
	     *
	     * @param {string|object} stateOrName The state name or state object you'd like to generate a url from.
	     * @param {object=} params An object of parameter values to fill the state's required parameters.
	     * @param {object=} options Options object. The options are:
	     *
	     * - **`lossy`** - {boolean=true} -  If true, and if there is no url associated with the state provided in the
	     *    first parameter, then the constructed href url will be built from the first navigable ancestor (aka
	     *    ancestor with a valid url).
	     * - **`inherit`** - {boolean=true}, If `true` will inherit url parameters from current url.
	     * - **`relative`** - {object=$state.$current}, When transitioning with relative path (e.g '^'), 
	     *    defines which state to be relative from.
	     * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
	     * 
	     * @returns {string} compiled state url
	     */
	    $state.href = function href(stateOrName, params, options) {
	      options = extend({
	        lossy:    true,
	        inherit:  true,
	        absolute: false,
	        relative: $state.$current
	      }, options || {});

	      var state = findState(stateOrName, options.relative);

	      if (!isDefined(state)) return null;
	      if (options.inherit) params = inheritParams($stateParams, params || {}, $state.$current, state);
	      
	      var nav = (state && options.lossy) ? state.navigable : state;

	      if (!nav || nav.url === undefined || nav.url === null) {
	        return null;
	      }
	      return $urlRouter.href(nav.url, filterByKeys(state.params.$$keys(), params || {}), {
	        absolute: options.absolute
	      });
	    };

	    /**
	     * @ngdoc function
	     * @name ui.router.state.$state#get
	     * @methodOf ui.router.state.$state
	     *
	     * @description
	     * Returns the state configuration object for any specific state or all states.
	     *
	     * @param {string|object=} stateOrName (absolute or relative) If provided, will only get the config for
	     * the requested state. If not provided, returns an array of ALL state configs.
	     * @param {string|object=} context When stateOrName is a relative state reference, the state will be retrieved relative to context.
	     * @returns {Object|Array} State configuration object or array of all objects.
	     */
	    $state.get = function (stateOrName, context) {
	      if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
	      var state = findState(stateOrName, context || $state.$current);
	      return (state && state.self) ? state.self : null;
	    };

	    function resolveState(state, params, paramsAreFiltered, inherited, dst, options) {
	      // Make a restricted $stateParams with only the parameters that apply to this state if
	      // necessary. In addition to being available to the controller and onEnter/onExit callbacks,
	      // we also need $stateParams to be available for any $injector calls we make during the
	      // dependency resolution process.
	      var $stateParams = (paramsAreFiltered) ? params : filterByKeys(state.params.$$keys(), params);
	      var locals = { $stateParams: $stateParams };

	      // Resolve 'global' dependencies for the state, i.e. those not specific to a view.
	      // We're also including $stateParams in this; that way the parameters are restricted
	      // to the set that should be visible to the state, and are independent of when we update
	      // the global $state and $stateParams values.
	      dst.resolve = $resolve.resolve(state.resolve, locals, dst.resolve, state);
	      var promises = [dst.resolve.then(function (globals) {
	        dst.globals = globals;
	      })];
	      if (inherited) promises.push(inherited);

	      // Resolve template and dependencies for all views.
	      forEach(state.views, function (view, name) {
	        var injectables = (view.resolve && view.resolve !== state.resolve ? view.resolve : {});
	        injectables.$template = [ function () {
	          return $view.load(name, { view: view, locals: locals, params: $stateParams, notify: options.notify }) || '';
	        }];

	        promises.push($resolve.resolve(injectables, locals, dst.resolve, state).then(function (result) {
	          // References to the controller (only instantiated at link time)
	          if (isFunction(view.controllerProvider) || isArray(view.controllerProvider)) {
	            var injectLocals = angular.extend({}, injectables, locals);
	            result.$$controller = $injector.invoke(view.controllerProvider, null, injectLocals);
	          } else {
	            result.$$controller = view.controller;
	          }
	          // Provide access to the state itself for internal use
	          result.$$state = state;
	          result.$$controllerAs = view.controllerAs;
	          dst[name] = result;
	        }));
	      });

	      // Wait for all the promises and then return the activation object
	      return $q.all(promises).then(function (values) {
	        return dst;
	      });
	    }

	    return $state;
	  }

	  function shouldTriggerReload(to, from, locals, options) {
	    if (to === from && ((locals === from.locals && !options.reload) || (to.self.reloadOnSearch === false))) {
	      return true;
	    }
	  }
	}

	angular.module('ui.router.state')
	  .value('$stateParams', {})
	  .provider('$state', $StateProvider);


	$ViewProvider.$inject = [];
	function $ViewProvider() {

	  this.$get = $get;
	  /**
	   * @ngdoc object
	   * @name ui.router.state.$view
	   *
	   * @requires ui.router.util.$templateFactory
	   * @requires $rootScope
	   *
	   * @description
	   *
	   */
	  $get.$inject = ['$rootScope', '$templateFactory'];
	  function $get(   $rootScope,   $templateFactory) {
	    return {
	      // $view.load('full.viewName', { template: ..., controller: ..., resolve: ..., async: false, params: ... })
	      /**
	       * @ngdoc function
	       * @name ui.router.state.$view#load
	       * @methodOf ui.router.state.$view
	       *
	       * @description
	       *
	       * @param {string} name name
	       * @param {object} options option object.
	       */
	      load: function load(name, options) {
	        var result, defaults = {
	          template: null, controller: null, view: null, locals: null, notify: true, async: true, params: {}
	        };
	        options = extend(defaults, options);

	        if (options.view) {
	          result = $templateFactory.fromConfig(options.view, options.params, options.locals);
	        }
	        if (result && options.notify) {
	        /**
	         * @ngdoc event
	         * @name ui.router.state.$state#$viewContentLoading
	         * @eventOf ui.router.state.$view
	         * @eventType broadcast on root scope
	         * @description
	         *
	         * Fired once the view **begins loading**, *before* the DOM is rendered.
	         *
	         * @param {Object} event Event object.
	         * @param {Object} viewConfig The view config properties (template, controller, etc).
	         *
	         * @example
	         *
	         * <pre>
	         * $scope.$on('$viewContentLoading',
	         * function(event, viewConfig){
	         *     // Access to all the view config properties.
	         *     // and one special property 'targetView'
	         *     // viewConfig.targetView
	         * });
	         * </pre>
	         */
	          $rootScope.$broadcast('$viewContentLoading', options);
	        }
	        return result;
	      }
	    };
	  }
	}

	angular.module('ui.router.state').provider('$view', $ViewProvider);

	/**
	 * @ngdoc object
	 * @name ui.router.state.$uiViewScrollProvider
	 *
	 * @description
	 * Provider that returns the {@link ui.router.state.$uiViewScroll} service function.
	 */
	function $ViewScrollProvider() {

	  var useAnchorScroll = false;

	  /**
	   * @ngdoc function
	   * @name ui.router.state.$uiViewScrollProvider#useAnchorScroll
	   * @methodOf ui.router.state.$uiViewScrollProvider
	   *
	   * @description
	   * Reverts back to using the core [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll) service for
	   * scrolling based on the url anchor.
	   */
	  this.useAnchorScroll = function () {
	    useAnchorScroll = true;
	  };

	  /**
	   * @ngdoc object
	   * @name ui.router.state.$uiViewScroll
	   *
	   * @requires $anchorScroll
	   * @requires $timeout
	   *
	   * @description
	   * When called with a jqLite element, it scrolls the element into view (after a
	   * `$timeout` so the DOM has time to refresh).
	   *
	   * If you prefer to rely on `$anchorScroll` to scroll the view to the anchor,
	   * this can be enabled by calling {@link ui.router.state.$uiViewScrollProvider#methods_useAnchorScroll `$uiViewScrollProvider.useAnchorScroll()`}.
	   */
	  this.$get = ['$anchorScroll', '$timeout', function ($anchorScroll, $timeout) {
	    if (useAnchorScroll) {
	      return $anchorScroll;
	    }

	    return function ($element) {
	      $timeout(function () {
	        $element[0].scrollIntoView();
	      }, 0, false);
	    };
	  }];
	}

	angular.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-view
	 *
	 * @requires ui.router.state.$state
	 * @requires $compile
	 * @requires $controller
	 * @requires $injector
	 * @requires ui.router.state.$uiViewScroll
	 * @requires $document
	 *
	 * @restrict ECA
	 *
	 * @description
	 * The ui-view directive tells $state where to place your templates.
	 *
	 * @param {string=} name A view name. The name should be unique amongst the other views in the
	 * same state. You can have views of the same name that live in different states.
	 *
	 * @param {string=} autoscroll It allows you to set the scroll behavior of the browser window
	 * when a view is populated. By default, $anchorScroll is overridden by ui-router's custom scroll
	 * service, {@link ui.router.state.$uiViewScroll}. This custom service let's you
	 * scroll ui-view elements into view when they are populated during a state activation.
	 *
	 * *Note: To revert back to old [`$anchorScroll`](http://docs.angularjs.org/api/ng.$anchorScroll)
	 * functionality, call `$uiViewScrollProvider.useAnchorScroll()`.*
	 *
	 * @param {string=} onload Expression to evaluate whenever the view updates.
	 * 
	 * @example
	 * A view can be unnamed or named. 
	 * <pre>
	 * <!-- Unnamed -->
	 * <div ui-view></div> 
	 * 
	 * <!-- Named -->
	 * <div ui-view="viewName"></div>
	 * </pre>
	 *
	 * You can only have one unnamed view within any template (or root html). If you are only using a 
	 * single view and it is unnamed then you can populate it like so:
	 * <pre>
	 * <div ui-view></div> 
	 * $stateProvider.state("home", {
	 *   template: "<h1>HELLO!</h1>"
	 * })
	 * </pre>
	 * 
	 * The above is a convenient shortcut equivalent to specifying your view explicitly with the {@link ui.router.state.$stateProvider#views `views`}
	 * config property, by name, in this case an empty name:
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * But typically you'll only use the views property if you name your view or have more than one view 
	 * in the same template. There's not really a compelling reason to name a view if its the only one, 
	 * but you could if you wanted, like so:
	 * <pre>
	 * <div ui-view="main"></div>
	 * </pre> 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "main": {
	 *       template: "<h1>HELLO!</h1>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 * 
	 * Really though, you'll use views to set up multiple views:
	 * <pre>
	 * <div ui-view></div>
	 * <div ui-view="chart"></div> 
	 * <div ui-view="data"></div> 
	 * </pre>
	 * 
	 * <pre>
	 * $stateProvider.state("home", {
	 *   views: {
	 *     "": {
	 *       template: "<h1>HELLO!</h1>"
	 *     },
	 *     "chart": {
	 *       template: "<chart_thing/>"
	 *     },
	 *     "data": {
	 *       template: "<data_thing/>"
	 *     }
	 *   }    
	 * })
	 * </pre>
	 *
	 * Examples for `autoscroll`:
	 *
	 * <pre>
	 * <!-- If autoscroll present with no expression,
	 *      then scroll ui-view into view -->
	 * <ui-view autoscroll/>
	 *
	 * <!-- If autoscroll present with valid expression,
	 *      then scroll ui-view into view if expression evaluates to true -->
	 * <ui-view autoscroll='true'/>
	 * <ui-view autoscroll='false'/>
	 * <ui-view autoscroll='scopeVariable'/>
	 * </pre>
	 */
	$ViewDirective.$inject = ['$state', '$injector', '$uiViewScroll', '$interpolate'];
	function $ViewDirective(   $state,   $injector,   $uiViewScroll,   $interpolate) {

	  function getService() {
	    return ($injector.has) ? function(service) {
	      return $injector.has(service) ? $injector.get(service) : null;
	    } : function(service) {
	      try {
	        return $injector.get(service);
	      } catch (e) {
	        return null;
	      }
	    };
	  }

	  var service = getService(),
	      $animator = service('$animator'),
	      $animate = service('$animate');

	  // Returns a set of DOM manipulation functions based on which Angular version
	  // it should use
	  function getRenderer(attrs, scope) {
	    var statics = function() {
	      return {
	        enter: function (element, target, cb) { target.after(element); cb(); },
	        leave: function (element, cb) { element.remove(); cb(); }
	      };
	    };

	    if ($animate) {
	      return {
	        enter: function(element, target, cb) {
	          var promise = $animate.enter(element, null, target, cb);
	          if (promise && promise.then) promise.then(cb);
	        },
	        leave: function(element, cb) {
	          var promise = $animate.leave(element, cb);
	          if (promise && promise.then) promise.then(cb);
	        }
	      };
	    }

	    if ($animator) {
	      var animate = $animator && $animator(scope, attrs);

	      return {
	        enter: function(element, target, cb) {animate.enter(element, null, target); cb(); },
	        leave: function(element, cb) { animate.leave(element); cb(); }
	      };
	    }

	    return statics();
	  }

	  var directive = {
	    restrict: 'ECA',
	    terminal: true,
	    priority: 400,
	    transclude: 'element',
	    compile: function (tElement, tAttrs, $transclude) {
	      return function (scope, $element, attrs) {
	        var previousEl, currentEl, currentScope, latestLocals,
	            onloadExp     = attrs.onload || '',
	            autoScrollExp = attrs.autoscroll,
	            renderer      = getRenderer(attrs, scope);

	        scope.$on('$stateChangeSuccess', function() {
	          updateView(false);
	        });
	        scope.$on('$viewContentLoading', function() {
	          updateView(false);
	        });

	        updateView(true);

	        function cleanupLastView() {
	          if (previousEl) {
	            previousEl.remove();
	            previousEl = null;
	          }

	          if (currentScope) {
	            currentScope.$destroy();
	            currentScope = null;
	          }

	          if (currentEl) {
	            renderer.leave(currentEl, function() {
	              previousEl = null;
	            });

	            previousEl = currentEl;
	            currentEl = null;
	          }
	        }

	        function updateView(firstTime) {
	          var newScope,
	              name            = getUiViewName(scope, attrs, $element, $interpolate),
	              previousLocals  = name && $state.$current && $state.$current.locals[name];

	          if (!firstTime && previousLocals === latestLocals) return; // nothing to do
	          newScope = scope.$new();
	          latestLocals = $state.$current.locals[name];

	          var clone = $transclude(newScope, function(clone) {
	            renderer.enter(clone, $element, function onUiViewEnter() {
	              if(currentScope) {
	                currentScope.$emit('$viewContentAnimationEnded');
	              }

	              if (angular.isDefined(autoScrollExp) && !autoScrollExp || scope.$eval(autoScrollExp)) {
	                $uiViewScroll(clone);
	              }
	            });
	            cleanupLastView();
	          });

	          currentEl = clone;
	          currentScope = newScope;
	          /**
	           * @ngdoc event
	           * @name ui.router.state.directive:ui-view#$viewContentLoaded
	           * @eventOf ui.router.state.directive:ui-view
	           * @eventType emits on ui-view directive scope
	           * @description           *
	           * Fired once the view is **loaded**, *after* the DOM is rendered.
	           *
	           * @param {Object} event Event object.
	           */
	          currentScope.$emit('$viewContentLoaded');
	          currentScope.$eval(onloadExp);
	        }
	      };
	    }
	  };

	  return directive;
	}

	$ViewDirectiveFill.$inject = ['$compile', '$controller', '$state', '$interpolate'];
	function $ViewDirectiveFill (  $compile,   $controller,   $state,   $interpolate) {
	  return {
	    restrict: 'ECA',
	    priority: -400,
	    compile: function (tElement) {
	      var initial = tElement.html();
	      return function (scope, $element, attrs) {
	        var current = $state.$current,
	            name = getUiViewName(scope, attrs, $element, $interpolate),
	            locals  = current && current.locals[name];

	        if (! locals) {
	          return;
	        }

	        $element.data('$uiView', { name: name, state: locals.$$state });
	        $element.html(locals.$template ? locals.$template : initial);

	        var link = $compile($element.contents());

	        if (locals.$$controller) {
	          locals.$scope = scope;
	          var controller = $controller(locals.$$controller, locals);
	          if (locals.$$controllerAs) {
	            scope[locals.$$controllerAs] = controller;
	          }
	          $element.data('$ngControllerController', controller);
	          $element.children().data('$ngControllerController', controller);
	        }

	        link(scope);
	      };
	    }
	  };
	}

	/**
	 * Shared ui-view code for both directives:
	 * Given scope, element, and its attributes, return the view's name
	 */
	function getUiViewName(scope, attrs, element, $interpolate) {
	  var name = $interpolate(attrs.uiView || attrs.name || '')(scope);
	  var inherited = element.inheritedData('$uiView');
	  return name.indexOf('@') >= 0 ?  name :  (name + '@' + (inherited ? inherited.state.name : ''));
	}

	angular.module('ui.router.state').directive('uiView', $ViewDirective);
	angular.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

	function parseStateRef(ref, current) {
	  var preparsed = ref.match(/^\s*({[^}]*})\s*$/), parsed;
	  if (preparsed) ref = current + '(' + preparsed[1] + ')';
	  parsed = ref.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
	  if (!parsed || parsed.length !== 4) throw new Error("Invalid state ref '" + ref + "'");
	  return { state: parsed[1], paramExpr: parsed[3] || null };
	}

	function stateContext(el) {
	  var stateData = el.parent().inheritedData('$uiView');

	  if (stateData && stateData.state && stateData.state.name) {
	    return stateData.state;
	  }
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref
	 *
	 * @requires ui.router.state.$state
	 * @requires $timeout
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive that binds a link (`<a>` tag) to a state. If the state has an associated 
	 * URL, the directive will automatically generate & update the `href` attribute via 
	 * the {@link ui.router.state.$state#methods_href $state.href()} method. Clicking 
	 * the link will trigger a state transition with optional parameters. 
	 *
	 * Also middle-clicking, right-clicking, and ctrl-clicking on the link will be 
	 * handled natively by the browser.
	 *
	 * You can also use relative state paths within ui-sref, just like the relative 
	 * paths passed to `$state.go()`. You just need to be aware that the path is relative
	 * to the state that the link lives in, in other words the state that loaded the 
	 * template containing the link.
	 *
	 * You can specify options to pass to {@link ui.router.state.$state#go $state.go()}
	 * using the `ui-sref-opts` attribute. Options are restricted to `location`, `inherit`,
	 * and `reload`.
	 *
	 * @example
	 * Here's an example of how you'd use ui-sref and how it would compile. If you have the 
	 * following template:
	 * <pre>
	 * <a ui-sref="home">Home</a> | <a ui-sref="about">About</a> | <a ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
	 *     </li>
	 * </ul>
	 * </pre>
	 * 
	 * Then the compiled html would be (assuming Html5Mode is off and current state is contacts):
	 * <pre>
	 * <a href="#/home" ui-sref="home">Home</a> | <a href="#/about" ui-sref="about">About</a> | <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
	 * 
	 * <ul>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
	 *     </li>
	 *     <li ng-repeat="contact in contacts">
	 *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
	 *     </li>
	 * </ul>
	 *
	 * <a ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
	 * </pre>
	 *
	 * @param {string} ui-sref 'stateName' can be any valid absolute or relative state
	 * @param {Object} ui-sref-opts options to pass to {@link ui.router.state.$state#go $state.go()}
	 */
	$StateRefDirective.$inject = ['$state', '$timeout'];
	function $StateRefDirective($state, $timeout) {
	  var allowedOptions = ['location', 'inherit', 'reload'];

	  return {
	    restrict: 'A',
	    require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
	    link: function(scope, element, attrs, uiSrefActive) {
	      var ref = parseStateRef(attrs.uiSref, $state.current.name);
	      var params = null, url = null, base = stateContext(element) || $state.$current;
	      var newHref = null, isAnchor = element.prop("tagName") === "A";
	      var isForm = element[0].nodeName === "FORM";
	      var attr = isForm ? "action" : "href", nav = true;

	      var options = { relative: base, inherit: true };
	      var optionsOverride = scope.$eval(attrs.uiSrefOpts) || {};

	      angular.forEach(allowedOptions, function(option) {
	        if (option in optionsOverride) {
	          options[option] = optionsOverride[option];
	        }
	      });

	      var update = function(newVal) {
	        if (newVal) params = angular.copy(newVal);
	        if (!nav) return;

	        newHref = $state.href(ref.state, params, options);

	        var activeDirective = uiSrefActive[1] || uiSrefActive[0];
	        if (activeDirective) {
	          activeDirective.$$setStateInfo(ref.state, params);
	        }
	        if (newHref === null) {
	          nav = false;
	          return false;
	        }
	        attrs.$set(attr, newHref);
	      };

	      if (ref.paramExpr) {
	        scope.$watch(ref.paramExpr, function(newVal, oldVal) {
	          if (newVal !== params) update(newVal);
	        }, true);
	        params = angular.copy(scope.$eval(ref.paramExpr));
	      }
	      update();

	      if (isForm) return;

	      element.bind("click", function(e) {
	        var button = e.which || e.button;
	        if ( !(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || element.attr('target')) ) {
	          // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
	          var transition = $timeout(function() {
	            $state.go(ref.state, params, options);
	          });
	          e.preventDefault();

	          // if the state has no URL, ignore one preventDefault from the <a> directive.
	          var ignorePreventDefaultCount = isAnchor && !newHref ? 1: 0;
	          e.preventDefault = function() {
	            if (ignorePreventDefaultCount-- <= 0)
	              $timeout.cancel(transition);
	          };
	        }
	      });
	    }
	  };
	}

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * A directive working alongside ui-sref to add classes to an element when the
	 * related ui-sref directive's state is active, and removing them when it is inactive.
	 * The primary use-case is to simplify the special appearance of navigation menus
	 * relying on `ui-sref`, by having the "active" state's menu button appear different,
	 * distinguishing it from the inactive menu items.
	 *
	 * ui-sref-active can live on the same element as ui-sref or on a parent element. The first
	 * ui-sref-active found at the same level or above the ui-sref will be used.
	 *
	 * Will activate when the ui-sref's target state or any child state is active. If you
	 * need to activate only when the ui-sref target state is active and *not* any of
	 * it's children, then you will use
	 * {@link ui.router.state.directive:ui-sref-active-eq ui-sref-active-eq}
	 *
	 * @example
	 * Given the following template:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item">
	 *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 *
	 * When the app state is "app.user" (or any children states), and contains the state parameter "user" with value "bilbobaggins",
	 * the resulting HTML will appear as (note the 'active' class):
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active="active" class="item active">
	 *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 *
	 * The class name is interpolated **once** during the directives link time (any further changes to the
	 * interpolated value are ignored).
	 *
	 * Multiple classes may be specified in a space-separated format:
	 * <pre>
	 * <ul>
	 *   <li ui-sref-active='class1 class2 class3'>
	 *     <a ui-sref="app.user">link</a>
	 *   </li>
	 * </ul>
	 * </pre>
	 */

	/**
	 * @ngdoc directive
	 * @name ui.router.state.directive:ui-sref-active-eq
	 *
	 * @requires ui.router.state.$state
	 * @requires ui.router.state.$stateParams
	 * @requires $interpolate
	 *
	 * @restrict A
	 *
	 * @description
	 * The same as {@link ui.router.state.directive:ui-sref-active ui-sref-active} but will only activate
	 * when the exact target state used in the `ui-sref` is active; no child states.
	 *
	 */
	$StateRefActiveDirective.$inject = ['$state', '$stateParams', '$interpolate'];
	function $StateRefActiveDirective($state, $stateParams, $interpolate) {
	  return  {
	    restrict: "A",
	    controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {
	      var state, params, activeClass;

	      // There probably isn't much point in $observing this
	      // uiSrefActive and uiSrefActiveEq share the same directive object with some
	      // slight difference in logic routing
	      activeClass = $interpolate($attrs.uiSrefActiveEq || $attrs.uiSrefActive || '', false)($scope);

	      // Allow uiSref to communicate with uiSrefActive[Equals]
	      this.$$setStateInfo = function (newState, newParams) {
	        state = $state.get(newState, stateContext($element));
	        params = newParams;
	        update();
	      };

	      $scope.$on('$stateChangeSuccess', update);

	      // Update route state
	      function update() {
	        if (isMatch()) {
	          $element.addClass(activeClass);
	        } else {
	          $element.removeClass(activeClass);
	        }
	      }

	      function isMatch() {
	        if (typeof $attrs.uiSrefActiveEq !== 'undefined') {
	          return state && $state.is(state.name, params);
	        } else {
	          return state && $state.includes(state.name, params);
	        }
	      }
	    }]
	  };
	}

	angular.module('ui.router.state')
	  .directive('uiSref', $StateRefDirective)
	  .directive('uiSrefActive', $StateRefActiveDirective)
	  .directive('uiSrefActiveEq', $StateRefActiveDirective);

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:isState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_is $state.is("stateName")}.
	 */
	$IsStateFilter.$inject = ['$state'];
	function $IsStateFilter($state) {
	  var isFilter = function (state) {
	    return $state.is(state);
	  };
	  isFilter.$stateful = true;
	  return isFilter;
	}

	/**
	 * @ngdoc filter
	 * @name ui.router.state.filter:includedByState
	 *
	 * @requires ui.router.state.$state
	 *
	 * @description
	 * Translates to {@link ui.router.state.$state#methods_includes $state.includes('fullOrPartialStateName')}.
	 */
	$IncludedByStateFilter.$inject = ['$state'];
	function $IncludedByStateFilter($state) {
	  var includesFilter = function (state) {
	    return $state.includes(state);
	  };
	  includesFilter.$stateful = true;
	  return  includesFilter;
	}

	angular.module('ui.router.state')
	  .filter('isState', $IsStateFilter)
	  .filter('includedByState', $IncludedByStateFilter);
	})(window, window.angular);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/css-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/sass-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/app/pages/pages.scss", function() {
			var newContent = require("!!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/css-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/sass-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/app/pages/pages.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, "/* Select2 theme */\n/* Mark invalid Select2 */\n.ng-dirty.ng-invalid > a.select2-choice {\n  border-color: #D44950; }\n\n.select2-result-single {\n  padding-left: 0; }\n\n.select2-locked > .select2-search-choice-close {\n  display: none; }\n\n.select-locked > .ui-select-match-close {\n  display: none; }\n\nbody > .select2-container.open {\n  z-index: 9999;\n  /* The z-index Select2 applies to the select2-drop */ }\n\n/* Selectize theme */\n/* Helper class to show styles when focus */\n.selectize-input.selectize-focus {\n  border-color: #007FBB !important; }\n\n/* Fix input width for Selectize theme */\n.selectize-control > .selectize-input > input {\n  width: 100%; }\n\n/* Fix dropdown width for Selectize theme */\n.selectize-control > .selectize-dropdown {\n  width: 100%; }\n\n/* Mark invalid Selectize */\n.ng-dirty.ng-invalid > div.selectize-input {\n  border-color: #D44950; }\n\n.select2 > .select2-choice.ui-select-match {\n  /* Because of the inclusion of Bootstrap */\n  height: 29px; }\n\n.selectize-control > .selectize-dropdown {\n  top: 36px; }\n\n.fade {\n  height: 100vh;\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-image: url(https://ununsplash.imgix.net/photo-1416339134316-0e91dc9ded92?q=75&fm=jpg&s=883a422e10fc4149893984019f63c818); }\n\n.hero {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 3;\n  color: #fff;\n  text-align: center;\n  text-transform: uppercase;\n  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.75);\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  -moz-transform: translate3d(-50%, -50%, 0);\n  -ms-transform: translate3d(-50%, -50%, 0);\n  -o-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0); }\n\n.hero h1 {\n  font-size: 6em;\n  font-weight: bold;\n  margin: 0;\n  padding: 0; }\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  background-color: #080d15;\n  opacity: .7; }\n\n.btn.btn-lg {\n  padding: 10px 40px; }\n\n.btn.btn-hero, .btn.btn-hero:hover, .btn.btn-hero:focus {\n  color: #f5f5f5;\n  background-color: #1abc9c;\n  border-color: #1abc9c;\n  outline: none;\n  margin: 20px auto; }\n\n@media screen and (min-width: 980px) {\n  .hero {\n    width: 980px; } }\n\n@media screen and (max-width: 640px) {\n  .hero h1 {\n    font-size: 4em; } }\n", ""]);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license AngularJS v1.3.15
	 * (c) 2010-2014 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular, undefined) {'use strict';

	/* jshint maxlen: false */

	/**
	 * @ngdoc module
	 * @name ngAnimate
	 * @description
	 *
	 * The `ngAnimate` module provides support for JavaScript, CSS3 transition and CSS3 keyframe animation hooks within existing core and custom directives.
	 *
	 * <div doc-module-components="ngAnimate"></div>
	 *
	 * # Usage
	 *
	 * To see animations in action, all that is required is to define the appropriate CSS classes
	 * or to register a JavaScript animation via the `myModule.animation()` function. The directives that support animation automatically are:
	 * `ngRepeat`, `ngInclude`, `ngIf`, `ngSwitch`, `ngShow`, `ngHide`, `ngView` and `ngClass`. Custom directives can take advantage of animation
	 * by using the `$animate` service.
	 *
	 * Below is a more detailed breakdown of the supported animation events provided by pre-existing ng directives:
	 *
	 * | Directive                                                                                                | Supported Animations                                                     |
	 * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
	 * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
	 * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
	 * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
	 * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
	 * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
	 * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
	 * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
	 * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
	 * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
	 * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
	 *
	 * You can find out more information about animations upon visiting each directive page.
	 *
	 * Below is an example of how to apply animations to a directive that supports animation hooks:
	 *
	 * ```html
	 * <style type="text/css">
	 * .slide.ng-enter, .slide.ng-leave {
	 *   -webkit-transition:0.5s linear all;
	 *   transition:0.5s linear all;
	 * }
	 *
	 * .slide.ng-enter { }        /&#42; starting animations for enter &#42;/
	 * .slide.ng-enter.ng-enter-active { } /&#42; terminal animations for enter &#42;/
	 * .slide.ng-leave { }        /&#42; starting animations for leave &#42;/
	 * .slide.ng-leave.ng-leave-active { } /&#42; terminal animations for leave &#42;/
	 * </style>
	 *
	 * <!--
	 * the animate service will automatically add .ng-enter and .ng-leave to the element
	 * to trigger the CSS transition/animations
	 * -->
	 * <ANY class="slide" ng-include="..."></ANY>
	 * ```
	 *
	 * Keep in mind that, by default, if an animation is running, any child elements cannot be animated
	 * until the parent element's animation has completed. This blocking feature can be overridden by
	 * placing the `ng-animate-children` attribute on a parent container tag.
	 *
	 * ```html
	 * <div class="slide-animation" ng-if="on" ng-animate-children>
	 *   <div class="fade-animation" ng-if="on">
	 *     <div class="explode-animation" ng-if="on">
	 *        ...
	 *     </div>
	 *   </div>
	 * </div>
	 * ```
	 *
	 * When the `on` expression value changes and an animation is triggered then each of the elements within
	 * will all animate without the block being applied to child elements.
	 *
	 * ## Are animations run when the application starts?
	 * No they are not. When an application is bootstrapped Angular will disable animations from running to avoid
	 * a frenzy of animations from being triggered as soon as the browser has rendered the screen. For this to work,
	 * Angular will wait for two digest cycles until enabling animations. From there on, any animation-triggering
	 * layout changes in the application will trigger animations as normal.
	 *
	 * In addition, upon bootstrap, if the routing system or any directives or load remote data (via $http) then Angular
	 * will automatically extend the wait time to enable animations once **all** of the outbound HTTP requests
	 * are complete.
	 *
	 * ## CSS-defined Animations
	 * The animate service will automatically apply two CSS classes to the animated element and these two CSS classes
	 * are designed to contain the start and end CSS styling. Both CSS transitions and keyframe animations are supported
	 * and can be used to play along with this naming structure.
	 *
	 * The following code below demonstrates how to perform animations using **CSS transitions** with Angular:
	 *
	 * ```html
	 * <style type="text/css">
	 * /&#42;
	 *  The animate class is apart of the element and the ng-enter class
	 *  is attached to the element once the enter animation event is triggered
	 * &#42;/
	 * .reveal-animation.ng-enter {
	 *  -webkit-transition: 1s linear all; /&#42; Safari/Chrome &#42;/
	 *  transition: 1s linear all; /&#42; All other modern browsers and IE10+ &#42;/
	 *
	 *  /&#42; The animation preparation code &#42;/
	 *  opacity: 0;
	 * }
	 *
	 * /&#42;
	 *  Keep in mind that you want to combine both CSS
	 *  classes together to avoid any CSS-specificity
	 *  conflicts
	 * &#42;/
	 * .reveal-animation.ng-enter.ng-enter-active {
	 *  /&#42; The animation code itself &#42;/
	 *  opacity: 1;
	 * }
	 * </style>
	 *
	 * <div class="view-container">
	 *   <div ng-view class="reveal-animation"></div>
	 * </div>
	 * ```
	 *
	 * The following code below demonstrates how to perform animations using **CSS animations** with Angular:
	 *
	 * ```html
	 * <style type="text/css">
	 * .reveal-animation.ng-enter {
	 *   -webkit-animation: enter_sequence 1s linear; /&#42; Safari/Chrome &#42;/
	 *   animation: enter_sequence 1s linear; /&#42; IE10+ and Future Browsers &#42;/
	 * }
	 * @-webkit-keyframes enter_sequence {
	 *   from { opacity:0; }
	 *   to { opacity:1; }
	 * }
	 * @keyframes enter_sequence {
	 *   from { opacity:0; }
	 *   to { opacity:1; }
	 * }
	 * </style>
	 *
	 * <div class="view-container">
	 *   <div ng-view class="reveal-animation"></div>
	 * </div>
	 * ```
	 *
	 * Both CSS3 animations and transitions can be used together and the animate service will figure out the correct duration and delay timing.
	 *
	 * Upon DOM mutation, the event class is added first (something like `ng-enter`), then the browser prepares itself to add
	 * the active class (in this case `ng-enter-active`) which then triggers the animation. The animation module will automatically
	 * detect the CSS code to determine when the animation ends. Once the animation is over then both CSS classes will be
	 * removed from the DOM. If a browser does not support CSS transitions or CSS animations then the animation will start and end
	 * immediately resulting in a DOM element that is at its final state. This final state is when the DOM element
	 * has no CSS transition/animation classes applied to it.
	 *
	 * ### Structural transition animations
	 *
	 * Structural transitions (such as enter, leave and move) will always apply a `0s none` transition
	 * value to force the browser into rendering the styles defined in the setup (`.ng-enter`, `.ng-leave`
	 * or `.ng-move`) class. This means that any active transition animations operating on the element
	 * will be cut off to make way for the enter, leave or move animation.
	 *
	 * ### Class-based transition animations
	 *
	 * Class-based transitions refer to transition animations that are triggered when a CSS class is
	 * added to or removed from the element (via `$animate.addClass`, `$animate.removeClass`,
	 * `$animate.setClass`, or by directives such as `ngClass`, `ngModel` and `form`).
	 * They are different when compared to structural animations since they **do not cancel existing
	 * animations** nor do they **block successive transitions** from rendering on the same element.
	 * This distinction allows for **multiple class-based transitions** to be performed on the same element.
	 *
	 * In addition to ngAnimate supporting the default (natural) functionality of class-based transition
	 * animations, ngAnimate also decorates the element with starting and ending CSS classes to aid the
	 * developer in further styling the element throughout the transition animation. Earlier versions
	 * of ngAnimate may have caused natural CSS transitions to break and not render properly due to
	 * $animate temporarily blocking transitions using `0s none` in order to allow the setup CSS class
	 * (the `-add` or `-remove` class) to be applied without triggering an animation. However, as of
	 * **version 1.3**, this workaround has been removed with ngAnimate and all non-ngAnimate CSS
	 * class transitions are compatible with ngAnimate.
	 *
	 * There is, however, one special case when dealing with class-based transitions in ngAnimate.
	 * When rendering class-based transitions that make use of the setup and active CSS classes
	 * (e.g. `.fade-add` and `.fade-add-active` for when `.fade` is added) be sure to define
	 * the transition value **on the active CSS class** and not the setup class.
	 *
	 * ```css
	 * .fade-add {
	 *   /&#42; remember to place a 0s transition here
	 *      to ensure that the styles are applied instantly
	 *      even if the element already has a transition style &#42;/
	 *   transition:0s linear all;
	 *
	 *   /&#42; starting CSS styles &#42;/
	 *   opacity:1;
	 * }
	 * .fade-add.fade-add-active {
	 *   /&#42; this will be the length of the animation &#42;/
	 *   transition:1s linear all;
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * The setup CSS class (in this case `.fade-add`) also has a transition style property, however, it
	 * has a duration of zero. This may not be required, however, incase the browser is unable to render
	 * the styling present in this CSS class instantly then it could be that the browser is attempting
	 * to perform an unnecessary transition.
	 *
	 * This workaround, however, does not apply to  standard class-based transitions that are rendered
	 * when a CSS class containing a transition is applied to an element:
	 *
	 * ```css
	 * /&#42; this works as expected &#42;/
	 * .fade {
	 *   transition:1s linear all;
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * Please keep this in mind when coding the CSS markup that will be used within class-based transitions.
	 * Also, try not to mix the two class-based animation flavors together since the CSS code may become
	 * overly complex.
	 *
	 *
	 * ### Preventing Collisions With Third Party Libraries
	 *
	 * Some third-party frameworks place animation duration defaults across many element or className
	 * selectors in order to make their code small and reuseable. This can lead to issues with ngAnimate, which
	 * is expecting actual animations on these elements and has to wait for their completion.
	 *
	 * You can prevent this unwanted behavior by using a prefix on all your animation classes:
	 *
	 * ```css
	 * /&#42; prefixed with animate- &#42;/
	 * .animate-fade-add.animate-fade-add-active {
	 *   transition:1s linear all;
	 *   opacity:0;
	 * }
	 * ```
	 *
	 * You then configure `$animate` to enforce this prefix:
	 *
	 * ```js
	 * $animateProvider.classNameFilter(/animate-/);
	 * ```
	 * </div>
	 *
	 * ### CSS Staggering Animations
	 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
	 * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
	 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
	 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
	 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
	 *
	 * ```css
	 * .my-animation.ng-enter {
	 *   /&#42; standard transition code &#42;/
	 *   -webkit-transition: 1s linear all;
	 *   transition: 1s linear all;
	 *   opacity:0;
	 * }
	 * .my-animation.ng-enter-stagger {
	 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
	 *   -webkit-transition-delay: 0.1s;
	 *   transition-delay: 0.1s;
	 *
	 *   /&#42; in case the stagger doesn't work then these two values
	 *    must be set to 0 to avoid an accidental CSS inheritance &#42;/
	 *   -webkit-transition-duration: 0s;
	 *   transition-duration: 0s;
	 * }
	 * .my-animation.ng-enter.ng-enter-active {
	 *   /&#42; standard transition styles &#42;/
	 *   opacity:1;
	 * }
	 * ```
	 *
	 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
	 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
	 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
	 * will also be reset if more than 10ms has passed after the last animation has been fired.
	 *
	 * The following code will issue the **ng-leave-stagger** event on the element provided:
	 *
	 * ```js
	 * var kids = parent.children();
	 *
	 * $animate.leave(kids[0]); //stagger index=0
	 * $animate.leave(kids[1]); //stagger index=1
	 * $animate.leave(kids[2]); //stagger index=2
	 * $animate.leave(kids[3]); //stagger index=3
	 * $animate.leave(kids[4]); //stagger index=4
	 *
	 * $timeout(function() {
	 *   //stagger has reset itself
	 *   $animate.leave(kids[5]); //stagger index=0
	 *   $animate.leave(kids[6]); //stagger index=1
	 * }, 100, false);
	 * ```
	 *
	 * Stagger animations are currently only supported within CSS-defined animations.
	 *
	 * ## JavaScript-defined Animations
	 * In the event that you do not want to use CSS3 transitions or CSS3 animations or if you wish to offer animations on browsers that do not
	 * yet support CSS transitions/animations, then you can make use of JavaScript animations defined inside of your AngularJS module.
	 *
	 * ```js
	 * //!annotate="YourApp" Your AngularJS Module|Replace this or ngModule with the module that you used to define your application.
	 * var ngModule = angular.module('YourApp', ['ngAnimate']);
	 * ngModule.animation('.my-crazy-animation', function() {
	 *   return {
	 *     enter: function(element, done) {
	 *       //run the animation here and call done when the animation is complete
	 *       return function(cancelled) {
	 *         //this (optional) function will be called when the animation
	 *         //completes or when the animation is cancelled (the cancelled
	 *         //flag will be set to true if cancelled).
	 *       };
	 *     },
	 *     leave: function(element, done) { },
	 *     move: function(element, done) { },
	 *
	 *     //animation that can be triggered before the class is added
	 *     beforeAddClass: function(element, className, done) { },
	 *
	 *     //animation that can be triggered after the class is added
	 *     addClass: function(element, className, done) { },
	 *
	 *     //animation that can be triggered before the class is removed
	 *     beforeRemoveClass: function(element, className, done) { },
	 *
	 *     //animation that can be triggered after the class is removed
	 *     removeClass: function(element, className, done) { }
	 *   };
	 * });
	 * ```
	 *
	 * JavaScript-defined animations are created with a CSS-like class selector and a collection of events which are set to run
	 * a javascript callback function. When an animation is triggered, $animate will look for a matching animation which fits
	 * the element's CSS class attribute value and then run the matching animation event function (if found).
	 * In other words, if the CSS classes present on the animated element match any of the JavaScript animations then the callback function will
	 * be executed. It should be also noted that only simple, single class selectors are allowed (compound class selectors are not supported).
	 *
	 * Within a JavaScript animation, an object containing various event callback animation functions is expected to be returned.
	 * As explained above, these callbacks are triggered based on the animation event. Therefore if an enter animation is run,
	 * and the JavaScript animation is found, then the enter callback will handle that animation (in addition to the CSS keyframe animation
	 * or transition code that is defined via a stylesheet).
	 *
	 *
	 * ### Applying Directive-specific Styles to an Animation
	 * In some cases a directive or service may want to provide `$animate` with extra details that the animation will
	 * include into its animation. Let's say for example we wanted to render an animation that animates an element
	 * towards the mouse coordinates as to where the user clicked last. By collecting the X/Y coordinates of the click
	 * (via the event parameter) we can set the `top` and `left` styles into an object and pass that into our function
	 * call to `$animate.addClass`.
	 *
	 * ```js
	 * canvas.on('click', function(e) {
	 *   $animate.addClass(element, 'on', {
	 *     to: {
	 *       left : e.client.x + 'px',
	 *       top : e.client.y + 'px'
	 *     }
	 *   }):
	 * });
	 * ```
	 *
	 * Now when the animation runs, and a transition or keyframe animation is picked up, then the animation itself will
	 * also include and transition the styling of the `left` and `top` properties into its running animation. If we want
	 * to provide some starting animation values then we can do so by placing the starting animations styles into an object
	 * called `from` in the same object as the `to` animations.
	 *
	 * ```js
	 * canvas.on('click', function(e) {
	 *   $animate.addClass(element, 'on', {
	 *     from: {
	 *        position: 'absolute',
	 *        left: '0px',
	 *        top: '0px'
	 *     },
	 *     to: {
	 *       left : e.client.x + 'px',
	 *       top : e.client.y + 'px'
	 *     }
	 *   }):
	 * });
	 * ```
	 *
	 * Once the animation is complete or cancelled then the union of both the before and after styles are applied to the
	 * element. If `ngAnimate` is not present then the styles will be applied immediately.
	 *
	 */

	angular.module('ngAnimate', ['ng'])

	  /**
	   * @ngdoc provider
	   * @name $animateProvider
	   * @description
	   *
	   * The `$animateProvider` allows developers to register JavaScript animation event handlers directly inside of a module.
	   * When an animation is triggered, the $animate service will query the $animate service to find any animations that match
	   * the provided name value.
	   *
	   * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
	   *
	   * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
	   *
	   */
	  .directive('ngAnimateChildren', function() {
	    var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
	    return function(scope, element, attrs) {
	      var val = attrs.ngAnimateChildren;
	      if (angular.isString(val) && val.length === 0) { //empty attribute
	        element.data(NG_ANIMATE_CHILDREN, true);
	      } else {
	        scope.$watch(val, function(value) {
	          element.data(NG_ANIMATE_CHILDREN, !!value);
	        });
	      }
	    };
	  })

	  //this private service is only used within CSS-enabled animations
	  //IE8 + IE9 do not support rAF natively, but that is fine since they
	  //also don't support transitions and keyframes which means that the code
	  //below will never be used by the two browsers.
	  .factory('$$animateReflow', ['$$rAF', '$document', function($$rAF, $document) {
	    var bod = $document[0].body;
	    return function(fn) {
	      //the returned function acts as the cancellation function
	      return $$rAF(function() {
	        //the line below will force the browser to perform a repaint
	        //so that all the animated elements within the animation frame
	        //will be properly updated and drawn on screen. This is
	        //required to perform multi-class CSS based animations with
	        //Firefox. DO NOT REMOVE THIS LINE.
	        var a = bod.offsetWidth + 1;
	        fn();
	      });
	    };
	  }])

	  .config(['$provide', '$animateProvider', function($provide, $animateProvider) {
	    var noop = angular.noop;
	    var forEach = angular.forEach;
	    var selectors = $animateProvider.$$selectors;
	    var isArray = angular.isArray;
	    var isString = angular.isString;
	    var isObject = angular.isObject;

	    var ELEMENT_NODE = 1;
	    var NG_ANIMATE_STATE = '$$ngAnimateState';
	    var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
	    var NG_ANIMATE_CLASS_NAME = 'ng-animate';
	    var rootAnimateState = {running: true};

	    function extractElementNode(element) {
	      for (var i = 0; i < element.length; i++) {
	        var elm = element[i];
	        if (elm.nodeType == ELEMENT_NODE) {
	          return elm;
	        }
	      }
	    }

	    function prepareElement(element) {
	      return element && angular.element(element);
	    }

	    function stripCommentsFromElement(element) {
	      return angular.element(extractElementNode(element));
	    }

	    function isMatchingElement(elm1, elm2) {
	      return extractElementNode(elm1) == extractElementNode(elm2);
	    }
	    var $$jqLite;
	    $provide.decorator('$animate',
	        ['$delegate', '$$q', '$injector', '$sniffer', '$rootElement', '$$asyncCallback', '$rootScope', '$document', '$templateRequest', '$$jqLite',
	 function($delegate,   $$q,   $injector,   $sniffer,   $rootElement,   $$asyncCallback,   $rootScope,   $document,   $templateRequest,   $$$jqLite) {

	      $$jqLite = $$$jqLite;
	      $rootElement.data(NG_ANIMATE_STATE, rootAnimateState);

	      // Wait until all directive and route-related templates are downloaded and
	      // compiled. The $templateRequest.totalPendingRequests variable keeps track of
	      // all of the remote templates being currently downloaded. If there are no
	      // templates currently downloading then the watcher will still fire anyway.
	      var deregisterWatch = $rootScope.$watch(
	        function() { return $templateRequest.totalPendingRequests; },
	        function(val, oldVal) {
	          if (val !== 0) return;
	          deregisterWatch();

	          // Now that all templates have been downloaded, $animate will wait until
	          // the post digest queue is empty before enabling animations. By having two
	          // calls to $postDigest calls we can ensure that the flag is enabled at the
	          // very end of the post digest queue. Since all of the animations in $animate
	          // use $postDigest, it's important that the code below executes at the end.
	          // This basically means that the page is fully downloaded and compiled before
	          // any animations are triggered.
	          $rootScope.$$postDigest(function() {
	            $rootScope.$$postDigest(function() {
	              rootAnimateState.running = false;
	            });
	          });
	        }
	      );

	      var globalAnimationCounter = 0;
	      var classNameFilter = $animateProvider.classNameFilter();
	      var isAnimatableClassName = !classNameFilter
	              ? function() { return true; }
	              : function(className) {
	                return classNameFilter.test(className);
	              };

	      function classBasedAnimationsBlocked(element, setter) {
	        var data = element.data(NG_ANIMATE_STATE) || {};
	        if (setter) {
	          data.running = true;
	          data.structural = true;
	          element.data(NG_ANIMATE_STATE, data);
	        }
	        return data.disabled || (data.running && data.structural);
	      }

	      function runAnimationPostDigest(fn) {
	        var cancelFn, defer = $$q.defer();
	        defer.promise.$$cancelFn = function() {
	          cancelFn && cancelFn();
	        };
	        $rootScope.$$postDigest(function() {
	          cancelFn = fn(function() {
	            defer.resolve();
	          });
	        });
	        return defer.promise;
	      }

	      function parseAnimateOptions(options) {
	        // some plugin code may still be passing in the callback
	        // function as the last param for the $animate methods so
	        // it's best to only allow string or array values for now
	        if (isObject(options)) {
	          if (options.tempClasses && isString(options.tempClasses)) {
	            options.tempClasses = options.tempClasses.split(/\s+/);
	          }
	          return options;
	        }
	      }

	      function resolveElementClasses(element, cache, runningAnimations) {
	        runningAnimations = runningAnimations || {};

	        var lookup = {};
	        forEach(runningAnimations, function(data, selector) {
	          forEach(selector.split(' '), function(s) {
	            lookup[s]=data;
	          });
	        });

	        var hasClasses = Object.create(null);
	        forEach((element.attr('class') || '').split(/\s+/), function(className) {
	          hasClasses[className] = true;
	        });

	        var toAdd = [], toRemove = [];
	        forEach((cache && cache.classes) || [], function(status, className) {
	          var hasClass = hasClasses[className];
	          var matchingAnimation = lookup[className] || {};

	          // When addClass and removeClass is called then $animate will check to
	          // see if addClass and removeClass cancel each other out. When there are
	          // more calls to removeClass than addClass then the count falls below 0
	          // and then the removeClass animation will be allowed. Otherwise if the
	          // count is above 0 then that means an addClass animation will commence.
	          // Once an animation is allowed then the code will also check to see if
	          // there exists any on-going animation that is already adding or remvoing
	          // the matching CSS class.
	          if (status === false) {
	            //does it have the class or will it have the class
	            if (hasClass || matchingAnimation.event == 'addClass') {
	              toRemove.push(className);
	            }
	          } else if (status === true) {
	            //is the class missing or will it be removed?
	            if (!hasClass || matchingAnimation.event == 'removeClass') {
	              toAdd.push(className);
	            }
	          }
	        });

	        return (toAdd.length + toRemove.length) > 0 && [toAdd.join(' '), toRemove.join(' ')];
	      }

	      function lookup(name) {
	        if (name) {
	          var matches = [],
	              flagMap = {},
	              classes = name.substr(1).split('.');

	          //the empty string value is the default animation
	          //operation which performs CSS transition and keyframe
	          //animations sniffing. This is always included for each
	          //element animation procedure if the browser supports
	          //transitions and/or keyframe animations. The default
	          //animation is added to the top of the list to prevent
	          //any previous animations from affecting the element styling
	          //prior to the element being animated.
	          if ($sniffer.transitions || $sniffer.animations) {
	            matches.push($injector.get(selectors['']));
	          }

	          for (var i=0; i < classes.length; i++) {
	            var klass = classes[i],
	                selectorFactoryName = selectors[klass];
	            if (selectorFactoryName && !flagMap[klass]) {
	              matches.push($injector.get(selectorFactoryName));
	              flagMap[klass] = true;
	            }
	          }
	          return matches;
	        }
	      }

	      function animationRunner(element, animationEvent, className, options) {
	        //transcluded directives may sometimes fire an animation using only comment nodes
	        //best to catch this early on to prevent any animation operations from occurring
	        var node = element[0];
	        if (!node) {
	          return;
	        }

	        if (options) {
	          options.to = options.to || {};
	          options.from = options.from || {};
	        }

	        var classNameAdd;
	        var classNameRemove;
	        if (isArray(className)) {
	          classNameAdd = className[0];
	          classNameRemove = className[1];
	          if (!classNameAdd) {
	            className = classNameRemove;
	            animationEvent = 'removeClass';
	          } else if (!classNameRemove) {
	            className = classNameAdd;
	            animationEvent = 'addClass';
	          } else {
	            className = classNameAdd + ' ' + classNameRemove;
	          }
	        }

	        var isSetClassOperation = animationEvent == 'setClass';
	        var isClassBased = isSetClassOperation
	                           || animationEvent == 'addClass'
	                           || animationEvent == 'removeClass'
	                           || animationEvent == 'animate';

	        var currentClassName = element.attr('class');
	        var classes = currentClassName + ' ' + className;
	        if (!isAnimatableClassName(classes)) {
	          return;
	        }

	        var beforeComplete = noop,
	            beforeCancel = [],
	            before = [],
	            afterComplete = noop,
	            afterCancel = [],
	            after = [];

	        var animationLookup = (' ' + classes).replace(/\s+/g,'.');
	        forEach(lookup(animationLookup), function(animationFactory) {
	          var created = registerAnimation(animationFactory, animationEvent);
	          if (!created && isSetClassOperation) {
	            registerAnimation(animationFactory, 'addClass');
	            registerAnimation(animationFactory, 'removeClass');
	          }
	        });

	        function registerAnimation(animationFactory, event) {
	          var afterFn = animationFactory[event];
	          var beforeFn = animationFactory['before' + event.charAt(0).toUpperCase() + event.substr(1)];
	          if (afterFn || beforeFn) {
	            if (event == 'leave') {
	              beforeFn = afterFn;
	              //when set as null then animation knows to skip this phase
	              afterFn = null;
	            }
	            after.push({
	              event: event, fn: afterFn
	            });
	            before.push({
	              event: event, fn: beforeFn
	            });
	            return true;
	          }
	        }

	        function run(fns, cancellations, allCompleteFn) {
	          var animations = [];
	          forEach(fns, function(animation) {
	            animation.fn && animations.push(animation);
	          });

	          var count = 0;
	          function afterAnimationComplete(index) {
	            if (cancellations) {
	              (cancellations[index] || noop)();
	              if (++count < animations.length) return;
	              cancellations = null;
	            }
	            allCompleteFn();
	          }

	          //The code below adds directly to the array in order to work with
	          //both sync and async animations. Sync animations are when the done()
	          //operation is called right away. DO NOT REFACTOR!
	          forEach(animations, function(animation, index) {
	            var progress = function() {
	              afterAnimationComplete(index);
	            };
	            switch (animation.event) {
	              case 'setClass':
	                cancellations.push(animation.fn(element, classNameAdd, classNameRemove, progress, options));
	                break;
	              case 'animate':
	                cancellations.push(animation.fn(element, className, options.from, options.to, progress));
	                break;
	              case 'addClass':
	                cancellations.push(animation.fn(element, classNameAdd || className,     progress, options));
	                break;
	              case 'removeClass':
	                cancellations.push(animation.fn(element, classNameRemove || className,  progress, options));
	                break;
	              default:
	                cancellations.push(animation.fn(element, progress, options));
	                break;
	            }
	          });

	          if (cancellations && cancellations.length === 0) {
	            allCompleteFn();
	          }
	        }

	        return {
	          node: node,
	          event: animationEvent,
	          className: className,
	          isClassBased: isClassBased,
	          isSetClassOperation: isSetClassOperation,
	          applyStyles: function() {
	            if (options) {
	              element.css(angular.extend(options.from || {}, options.to || {}));
	            }
	          },
	          before: function(allCompleteFn) {
	            beforeComplete = allCompleteFn;
	            run(before, beforeCancel, function() {
	              beforeComplete = noop;
	              allCompleteFn();
	            });
	          },
	          after: function(allCompleteFn) {
	            afterComplete = allCompleteFn;
	            run(after, afterCancel, function() {
	              afterComplete = noop;
	              allCompleteFn();
	            });
	          },
	          cancel: function() {
	            if (beforeCancel) {
	              forEach(beforeCancel, function(cancelFn) {
	                (cancelFn || noop)(true);
	              });
	              beforeComplete(true);
	            }
	            if (afterCancel) {
	              forEach(afterCancel, function(cancelFn) {
	                (cancelFn || noop)(true);
	              });
	              afterComplete(true);
	            }
	          }
	        };
	      }

	      /**
	       * @ngdoc service
	       * @name $animate
	       * @kind object
	       *
	       * @description
	       * The `$animate` service provides animation detection support while performing DOM operations (enter, leave and move) as well as during addClass and removeClass operations.
	       * When any of these operations are run, the $animate service
	       * will examine any JavaScript-defined animations (which are defined by using the $animateProvider provider object)
	       * as well as any CSS-defined animations against the CSS classes present on the element once the DOM operation is run.
	       *
	       * The `$animate` service is used behind the scenes with pre-existing directives and animation with these directives
	       * will work out of the box without any extra configuration.
	       *
	       * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
	       *
	       * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
	       * ## Callback Promises
	       * With AngularJS 1.3, each of the animation methods, on the `$animate` service, return a promise when called. The
	       * promise itself is then resolved once the animation has completed itself, has been cancelled or has been
	       * skipped due to animations being disabled. (Note that even if the animation is cancelled it will still
	       * call the resolve function of the animation.)
	       *
	       * ```js
	       * $animate.enter(element, container).then(function() {
	       *   //...this is called once the animation is complete...
	       * });
	       * ```
	       *
	       * Also note that, due to the nature of the callback promise, if any Angular-specific code (like changing the scope,
	       * location of the page, etc...) is executed within the callback promise then be sure to wrap the code using
	       * `$scope.$apply(...)`;
	       *
	       * ```js
	       * $animate.leave(element).then(function() {
	       *   $scope.$apply(function() {
	       *     $location.path('/new-page');
	       *   });
	       * });
	       * ```
	       *
	       * An animation can also be cancelled by calling the `$animate.cancel(promise)` method with the provided
	       * promise that was returned when the animation was started.
	       *
	       * ```js
	       * var promise = $animate.addClass(element, 'super-long-animation');
	       * promise.then(function() {
	       *   //this will still be called even if cancelled
	       * });
	       *
	       * element.on('click', function() {
	       *   //tooo lazy to wait for the animation to end
	       *   $animate.cancel(promise);
	       * });
	       * ```
	       *
	       * (Keep in mind that the promise cancellation is unique to `$animate` since promises in
	       * general cannot be cancelled.)
	       *
	       */
	      return {
	        /**
	         * @ngdoc method
	         * @name $animate#animate
	         * @kind function
	         *
	         * @description
	         * Performs an inline animation on the element which applies the provided `to` and `from` CSS styles to the element.
	         * If any detected CSS transition, keyframe or JavaScript matches the provided `className` value then the animation
	         * will take on the provided styles. For example, if a transition animation is set for the given className then the
	         * provided `from` and `to` styles will be applied alongside the given transition. If a JavaScript animation is
	         * detected then the provided styles will be given in as function paramters.
	         *
	         * ```js
	         * ngModule.animation('.my-inline-animation', function() {
	         *   return {
	         *     animate : function(element, className, from, to, done) {
	         *       //styles
	         *     }
	         *   }
	         * });
	         * ```
	         *
	         * Below is a breakdown of each step that occurs during the `animate` animation:
	         *
	         * | Animation Step                                                                                                        | What the element class attribute looks like                  |
	         * |-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
	         * | 1. `$animate.animate(...)` is called                                                                                  | `class="my-animation"`                                       |
	         * | 2. `$animate` waits for the next digest to start the animation                                                        | `class="my-animation ng-animate"`                            |
	         * | 3. `$animate` runs the JavaScript-defined animations detected on the element                                          | `class="my-animation ng-animate"`                            |
	         * | 4. the `className` class value is added to the element                                                                | `class="my-animation ng-animate className"`                  |
	         * | 5. `$animate` scans the element styles to get the CSS transition/animation duration and delay                         | `class="my-animation ng-animate className"`                  |
	         * | 6. `$animate` blocks all CSS transitions on the element to ensure the `.className` class styling is applied right away| `class="my-animation ng-animate className"`                  |
	         * | 7. `$animate` applies the provided collection of `from` CSS styles to the element                                     | `class="my-animation ng-animate className"`                  |
	         * | 8. `$animate` waits for a single animation frame (this performs a reflow)                                             | `class="my-animation ng-animate className"`                  |
	         * | 9. `$animate` removes the CSS transition block placed on the element                                                  | `class="my-animation ng-animate className"`                  |
	         * | 10. the `className-active` class is added (this triggers the CSS transition/animation)                                | `class="my-animation ng-animate className className-active"` |
	         * | 11. `$animate` applies the collection of `to` CSS styles to the element which are then handled by the transition      | `class="my-animation ng-animate className className-active"` |
	         * | 12. `$animate` waits for the animation to complete (via events and timeout)                                           | `class="my-animation ng-animate className className-active"` |
	         * | 13. The animation ends and all generated CSS classes are removed from the element                                     | `class="my-animation"`                                       |
	         * | 14. The returned promise is resolved.                                                                                 | `class="my-animation"`                                       |
	         *
	         * @param {DOMElement} element the element that will be the focus of the enter animation
	         * @param {object} from a collection of CSS styles that will be applied to the element at the start of the animation
	         * @param {object} to a collection of CSS styles that the element will animate towards
	         * @param {string=} className an optional CSS class that will be added to the element for the duration of the animation (the default class is `ng-inline-animate`)
	         * @param {object=} options an optional collection of options that will be picked up by the CSS transition/animation
	         * @return {Promise} the animation callback promise
	        */
	        animate: function(element, from, to, className, options) {
	          className = className || 'ng-inline-animate';
	          options = parseAnimateOptions(options) || {};
	          options.from = to ? from : null;
	          options.to   = to ? to : from;

	          return runAnimationPostDigest(function(done) {
	            return performAnimation('animate', className, stripCommentsFromElement(element), null, null, noop, options, done);
	          });
	        },

	        /**
	         * @ngdoc method
	         * @name $animate#enter
	         * @kind function
	         *
	         * @description
	         * Appends the element to the parentElement element that resides in the document and then runs the enter animation. Once
	         * the animation is started, the following CSS classes will be present on the element for the duration of the animation:
	         *
	         * Below is a breakdown of each step that occurs during enter animation:
	         *
	         * | Animation Step                                                                                                        | What the element class attribute looks like                |
	         * |-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
	         * | 1. `$animate.enter(...)` is called                                                                                    | `class="my-animation"`                                     |
	         * | 2. element is inserted into the `parentElement` element or beside the `afterElement` element                          | `class="my-animation"`                                     |
	         * | 3. `$animate` waits for the next digest to start the animation                                                        | `class="my-animation ng-animate"`                          |
	         * | 4. `$animate` runs the JavaScript-defined animations detected on the element                                          | `class="my-animation ng-animate"`                          |
	         * | 5. the `.ng-enter` class is added to the element                                                                      | `class="my-animation ng-animate ng-enter"`                 |
	         * | 6. `$animate` scans the element styles to get the CSS transition/animation duration and delay                         | `class="my-animation ng-animate ng-enter"`                 |
	         * | 7. `$animate` blocks all CSS transitions on the element to ensure the `.ng-enter` class styling is applied right away | `class="my-animation ng-animate ng-enter"`                 |
	         * | 8. `$animate` waits for a single animation frame (this performs a reflow)                                             | `class="my-animation ng-animate ng-enter"`                 |
	         * | 9. `$animate` removes the CSS transition block placed on the element                                                  | `class="my-animation ng-animate ng-enter"`                 |
	         * | 10. the `.ng-enter-active` class is added (this triggers the CSS transition/animation)                                | `class="my-animation ng-animate ng-enter ng-enter-active"` |
	         * | 11. `$animate` waits for the animation to complete (via events and timeout)                                           | `class="my-animation ng-animate ng-enter ng-enter-active"` |
	         * | 12. The animation ends and all generated CSS classes are removed from the element                                     | `class="my-animation"`                                     |
	         * | 13. The returned promise is resolved.                                                                                 | `class="my-animation"`                                     |
	         *
	         * @param {DOMElement} element the element that will be the focus of the enter animation
	         * @param {DOMElement} parentElement the parent element of the element that will be the focus of the enter animation
	         * @param {DOMElement} afterElement the sibling element (which is the previous element) of the element that will be the focus of the enter animation
	         * @param {object=} options an optional collection of options that will be picked up by the CSS transition/animation
	         * @return {Promise} the animation callback promise
	        */
	        enter: function(element, parentElement, afterElement, options) {
	          options = parseAnimateOptions(options);
	          element = angular.element(element);
	          parentElement = prepareElement(parentElement);
	          afterElement = prepareElement(afterElement);

	          classBasedAnimationsBlocked(element, true);
	          $delegate.enter(element, parentElement, afterElement);
	          return runAnimationPostDigest(function(done) {
	            return performAnimation('enter', 'ng-enter', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
	          });
	        },

	        /**
	         * @ngdoc method
	         * @name $animate#leave
	         * @kind function
	         *
	         * @description
	         * Runs the leave animation operation and, upon completion, removes the element from the DOM. Once
	         * the animation is started, the following CSS classes will be added for the duration of the animation:
	         *
	         * Below is a breakdown of each step that occurs during leave animation:
	         *
	         * | Animation Step                                                                                                        | What the element class attribute looks like                |
	         * |-----------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
	         * | 1. `$animate.leave(...)` is called                                                                                    | `class="my-animation"`                                     |
	         * | 2. `$animate` runs the JavaScript-defined animations detected on the element                                          | `class="my-animation ng-animate"`                          |
	         * | 3. `$animate` waits for the next digest to start the animation                                                        | `class="my-animation ng-animate"`                          |
	         * | 4. the `.ng-leave` class is added to the element                                                                      | `class="my-animation ng-animate ng-leave"`                 |
	         * | 5. `$animate` scans the element styles to get the CSS transition/animation duration and delay                         | `class="my-animation ng-animate ng-leave"`                 |
	         * | 6. `$animate` blocks all CSS transitions on the element to ensure the `.ng-leave` class styling is applied right away | `class="my-animation ng-animate ng-leave"`                 |
	         * | 7. `$animate` waits for a single animation frame (this performs a reflow)                                             | `class="my-animation ng-animate ng-leave"`                 |
	         * | 8. `$animate` removes the CSS transition block placed on the element                                                  | `class="my-animation ng-animate ng-leave"`                 |
	         * | 9. the `.ng-leave-active` class is added (this triggers the CSS transition/animation)                                 | `class="my-animation ng-animate ng-leave ng-leave-active"` |
	         * | 10. `$animate` waits for the animation to complete (via events and timeout)                                           | `class="my-animation ng-animate ng-leave ng-leave-active"` |
	         * | 11. The animation ends and all generated CSS classes are removed from the element                                     | `class="my-animation"`                                     |
	         * | 12. The element is removed from the DOM                                                                               | ...                                                        |
	         * | 13. The returned promise is resolved.                                                                                 | ...                                                        |
	         *
	         * @param {DOMElement} element the element that will be the focus of the leave animation
	         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
	         * @return {Promise} the animation callback promise
	        */
	        leave: function(element, options) {
	          options = parseAnimateOptions(options);
	          element = angular.element(element);

	          cancelChildAnimations(element);
	          classBasedAnimationsBlocked(element, true);
	          return runAnimationPostDigest(function(done) {
	            return performAnimation('leave', 'ng-leave', stripCommentsFromElement(element), null, null, function() {
	              $delegate.leave(element);
	            }, options, done);
	          });
	        },

	        /**
	         * @ngdoc method
	         * @name $animate#move
	         * @kind function
	         *
	         * @description
	         * Fires the move DOM operation. Just before the animation starts, the animate service will either append it into the parentElement container or
	         * add the element directly after the afterElement element if present. Then the move animation will be run. Once
	         * the animation is started, the following CSS classes will be added for the duration of the animation:
	         *
	         * Below is a breakdown of each step that occurs during move animation:
	         *
	         * | Animation Step                                                                                                       | What the element class attribute looks like              |
	         * |----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
	         * | 1. `$animate.move(...)` is called                                                                                    | `class="my-animation"`                                   |
	         * | 2. element is moved into the parentElement element or beside the afterElement element                                | `class="my-animation"`                                   |
	         * | 3. `$animate` waits for the next digest to start the animation                                                       | `class="my-animation ng-animate"`                        |
	         * | 4. `$animate` runs the JavaScript-defined animations detected on the element                                         | `class="my-animation ng-animate"`                        |
	         * | 5. the `.ng-move` class is added to the element                                                                      | `class="my-animation ng-animate ng-move"`                |
	         * | 6. `$animate` scans the element styles to get the CSS transition/animation duration and delay                        | `class="my-animation ng-animate ng-move"`                |
	         * | 7. `$animate` blocks all CSS transitions on the element to ensure the `.ng-move` class styling is applied right away | `class="my-animation ng-animate ng-move"`                |
	         * | 8. `$animate` waits for a single animation frame (this performs a reflow)                                            | `class="my-animation ng-animate ng-move"`                |
	         * | 9. `$animate` removes the CSS transition block placed on the element                                                 | `class="my-animation ng-animate ng-move"`                |
	         * | 10. the `.ng-move-active` class is added (this triggers the CSS transition/animation)                                | `class="my-animation ng-animate ng-move ng-move-active"` |
	         * | 11. `$animate` waits for the animation to complete (via events and timeout)                                          | `class="my-animation ng-animate ng-move ng-move-active"` |
	         * | 12. The animation ends and all generated CSS classes are removed from the element                                    | `class="my-animation"`                                   |
	         * | 13. The returned promise is resolved.                                                                                | `class="my-animation"`                                   |
	         *
	         * @param {DOMElement} element the element that will be the focus of the move animation
	         * @param {DOMElement} parentElement the parentElement element of the element that will be the focus of the move animation
	         * @param {DOMElement} afterElement the sibling element (which is the previous element) of the element that will be the focus of the move animation
	         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
	         * @return {Promise} the animation callback promise
	        */
	        move: function(element, parentElement, afterElement, options) {
	          options = parseAnimateOptions(options);
	          element = angular.element(element);
	          parentElement = prepareElement(parentElement);
	          afterElement = prepareElement(afterElement);

	          cancelChildAnimations(element);
	          classBasedAnimationsBlocked(element, true);
	          $delegate.move(element, parentElement, afterElement);
	          return runAnimationPostDigest(function(done) {
	            return performAnimation('move', 'ng-move', stripCommentsFromElement(element), parentElement, afterElement, noop, options, done);
	          });
	        },

	        /**
	         * @ngdoc method
	         * @name $animate#addClass
	         *
	         * @description
	         * Triggers a custom animation event based off the className variable and then attaches the className value to the element as a CSS class.
	         * Unlike the other animation methods, the animate service will suffix the className value with {@type -add} in order to provide
	         * the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if no CSS transitions
	         * or keyframes are defined on the -add-active or base CSS class).
	         *
	         * Below is a breakdown of each step that occurs during addClass animation:
	         *
	         * | Animation Step                                                                                         | What the element class attribute looks like                        |
	         * |--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
	         * | 1. `$animate.addClass(element, 'super')` is called                                                     | `class="my-animation"`                                             |
	         * | 2. `$animate` runs the JavaScript-defined animations detected on the element                           | `class="my-animation ng-animate"`                                  |
	         * | 3. the `.super-add` class is added to the element                                                      | `class="my-animation ng-animate super-add"`                        |
	         * | 4. `$animate` waits for a single animation frame (this performs a reflow)                              | `class="my-animation ng-animate super-add"`                        |
	         * | 5. the `.super` and `.super-add-active` classes are added (this triggers the CSS transition/animation) | `class="my-animation ng-animate super super-add super-add-active"` |
	         * | 6. `$animate` scans the element styles to get the CSS transition/animation duration and delay          | `class="my-animation ng-animate super super-add super-add-active"` |
	         * | 7. `$animate` waits for the animation to complete (via events and timeout)                             | `class="my-animation ng-animate super super-add super-add-active"` |
	         * | 8. The animation ends and all generated CSS classes are removed from the element                       | `class="my-animation super"`                                       |
	         * | 9. The super class is kept on the element                                                              | `class="my-animation super"`                                       |
	         * | 10. The returned promise is resolved.                                                                  | `class="my-animation super"`                                       |
	         *
	         * @param {DOMElement} element the element that will be animated
	         * @param {string} className the CSS class that will be added to the element and then animated
	         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
	         * @return {Promise} the animation callback promise
	        */
	        addClass: function(element, className, options) {
	          return this.setClass(element, className, [], options);
	        },

	        /**
	         * @ngdoc method
	         * @name $animate#removeClass
	         *
	         * @description
	         * Triggers a custom animation event based off the className variable and then removes the CSS class provided by the className value
	         * from the element. Unlike the other animation methods, the animate service will suffix the className value with {@type -remove} in
	         * order to provide the animate service the setup and active CSS classes in order to trigger the animation (this will be skipped if
	         * no CSS transitions or keyframes are defined on the -remove or base CSS classes).
	         *
	         * Below is a breakdown of each step that occurs during removeClass animation:
	         *
	         * | Animation Step                                                                                                       | What the element class attribute looks like                        |
	         * |----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|
	         * | 1. `$animate.removeClass(element, 'super')` is called                                                                | `class="my-animation super"`                                       |
	         * | 2. `$animate` runs the JavaScript-defined animations detected on the element                                         | `class="my-animation super ng-animate"`                            |
	         * | 3. the `.super-remove` class is added to the element                                                                 | `class="my-animation super ng-animate super-remove"`               |
	         * | 4. `$animate` waits for a single animation frame (this performs a reflow)                                            | `class="my-animation super ng-animate super-remove"`               |
	         * | 5. the `.super-remove-active` classes are added and `.super` is removed (this triggers the CSS transition/animation) | `class="my-animation ng-animate super-remove super-remove-active"` |
	         * | 6. `$animate` scans the element styles to get the CSS transition/animation duration and delay                        | `class="my-animation ng-animate super-remove super-remove-active"` |
	         * | 7. `$animate` waits for the animation to complete (via events and timeout)                                           | `class="my-animation ng-animate super-remove super-remove-active"` |
	         * | 8. The animation ends and all generated CSS classes are removed from the element                                     | `class="my-animation"`                                             |
	         * | 9. The returned promise is resolved.                                                                                 | `class="my-animation"`                                             |
	         *
	         *
	         * @param {DOMElement} element the element that will be animated
	         * @param {string} className the CSS class that will be animated and then removed from the element
	         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
	         * @return {Promise} the animation callback promise
	        */
	        removeClass: function(element, className, options) {
	          return this.setClass(element, [], className, options);
	        },

	        /**
	         *
	         * @ngdoc method
	         * @name $animate#setClass
	         *
	         * @description Adds and/or removes the given CSS classes to and from the element.
	         * Once complete, the `done()` callback will be fired (if provided).
	         *
	         * | Animation Step                                                                                                                               | What the element class attribute looks like                                            |
	         * |----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|
	         * | 1. `$animate.setClass(element, 'on', 'off')` is called                                                                                       | `class="my-animation off"`                                                             |
	         * | 2. `$animate` runs the JavaScript-defined animations detected on the element                                                                 | `class="my-animation ng-animate off"`                                                  |
	         * | 3. the `.on-add` and `.off-remove` classes are added to the element                                                                          | `class="my-animation ng-animate on-add off-remove off"`                                |
	         * | 4. `$animate` waits for a single animation frame (this performs a reflow)                                                                    | `class="my-animation ng-animate on-add off-remove off"`                                |
	         * | 5. the `.on`, `.on-add-active` and `.off-remove-active` classes are added and `.off` is removed (this triggers the CSS transition/animation) | `class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active"` |
	         * | 6. `$animate` scans the element styles to get the CSS transition/animation duration and delay                                                | `class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active"` |
	         * | 7. `$animate` waits for the animation to complete (via events and timeout)                                                                   | `class="my-animation ng-animate on on-add on-add-active off-remove off-remove-active"` |
	         * | 8. The animation ends and all generated CSS classes are removed from the element                                                             | `class="my-animation on"`                                                              |
	         * | 9. The returned promise is resolved.                                                                                                         | `class="my-animation on"`                                                              |
	         *
	         * @param {DOMElement} element the element which will have its CSS classes changed
	         *   removed from it
	         * @param {string} add the CSS classes which will be added to the element
	         * @param {string} remove the CSS class which will be removed from the element
	         *   CSS classes have been set on the element
	         * @param {object=} options an optional collection of styles that will be picked up by the CSS transition/animation
	         * @return {Promise} the animation callback promise
	         */
	        setClass: function(element, add, remove, options) {
	          options = parseAnimateOptions(options);

	          var STORAGE_KEY = '$$animateClasses';
	          element = angular.element(element);
	          element = stripCommentsFromElement(element);

	          if (classBasedAnimationsBlocked(element)) {
	            return $delegate.$$setClassImmediately(element, add, remove, options);
	          }

	          // we're using a combined array for both the add and remove
	          // operations since the ORDER OF addClass and removeClass matters
	          var classes, cache = element.data(STORAGE_KEY);
	          var hasCache = !!cache;
	          if (!cache) {
	            cache = {};
	            cache.classes = {};
	          }
	          classes = cache.classes;

	          add = isArray(add) ? add : add.split(' ');
	          forEach(add, function(c) {
	            if (c && c.length) {
	              classes[c] = true;
	            }
	          });

	          remove = isArray(remove) ? remove : remove.split(' ');
	          forEach(remove, function(c) {
	            if (c && c.length) {
	              classes[c] = false;
	            }
	          });

	          if (hasCache) {
	            if (options && cache.options) {
	              cache.options = angular.extend(cache.options || {}, options);
	            }

	            //the digest cycle will combine all the animations into one function
	            return cache.promise;
	          } else {
	            element.data(STORAGE_KEY, cache = {
	              classes: classes,
	              options: options
	            });
	          }

	          return cache.promise = runAnimationPostDigest(function(done) {
	            var parentElement = element.parent();
	            var elementNode = extractElementNode(element);
	            var parentNode = elementNode.parentNode;
	            // TODO(matsko): move this code into the animationsDisabled() function once #8092 is fixed
	            if (!parentNode || parentNode['$$NG_REMOVED'] || elementNode['$$NG_REMOVED']) {
	              done();
	              return;
	            }

	            var cache = element.data(STORAGE_KEY);
	            element.removeData(STORAGE_KEY);

	            var state = element.data(NG_ANIMATE_STATE) || {};
	            var classes = resolveElementClasses(element, cache, state.active);
	            return !classes
	              ? done()
	              : performAnimation('setClass', classes, element, parentElement, null, function() {
	                  if (classes[0]) $delegate.$$addClassImmediately(element, classes[0]);
	                  if (classes[1]) $delegate.$$removeClassImmediately(element, classes[1]);
	                }, cache.options, done);
	          });
	        },

	        /**
	         * @ngdoc method
	         * @name $animate#cancel
	         * @kind function
	         *
	         * @param {Promise} animationPromise The animation promise that is returned when an animation is started.
	         *
	         * @description
	         * Cancels the provided animation.
	        */
	        cancel: function(promise) {
	          promise.$$cancelFn();
	        },

	        /**
	         * @ngdoc method
	         * @name $animate#enabled
	         * @kind function
	         *
	         * @param {boolean=} value If provided then set the animation on or off.
	         * @param {DOMElement=} element If provided then the element will be used to represent the enable/disable operation
	         * @return {boolean} Current animation state.
	         *
	         * @description
	         * Globally enables/disables animations.
	         *
	        */
	        enabled: function(value, element) {
	          switch (arguments.length) {
	            case 2:
	              if (value) {
	                cleanup(element);
	              } else {
	                var data = element.data(NG_ANIMATE_STATE) || {};
	                data.disabled = true;
	                element.data(NG_ANIMATE_STATE, data);
	              }
	            break;

	            case 1:
	              rootAnimateState.disabled = !value;
	            break;

	            default:
	              value = !rootAnimateState.disabled;
	            break;
	          }
	          return !!value;
	         }
	      };

	      /*
	        all animations call this shared animation triggering function internally.
	        The animationEvent variable refers to the JavaScript animation event that will be triggered
	        and the className value is the name of the animation that will be applied within the
	        CSS code. Element, `parentElement` and `afterElement` are provided DOM elements for the animation
	        and the onComplete callback will be fired once the animation is fully complete.
	      */
	      function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, options, doneCallback) {
	        var noopCancel = noop;
	        var runner = animationRunner(element, animationEvent, className, options);
	        if (!runner) {
	          fireDOMOperation();
	          fireBeforeCallbackAsync();
	          fireAfterCallbackAsync();
	          closeAnimation();
	          return noopCancel;
	        }

	        animationEvent = runner.event;
	        className = runner.className;
	        var elementEvents = angular.element._data(runner.node);
	        elementEvents = elementEvents && elementEvents.events;

	        if (!parentElement) {
	          parentElement = afterElement ? afterElement.parent() : element.parent();
	        }

	        //skip the animation if animations are disabled, a parent is already being animated,
	        //the element is not currently attached to the document body or then completely close
	        //the animation if any matching animations are not found at all.
	        //NOTE: IE8 + IE9 should close properly (run closeAnimation()) in case an animation was found.
	        if (animationsDisabled(element, parentElement)) {
	          fireDOMOperation();
	          fireBeforeCallbackAsync();
	          fireAfterCallbackAsync();
	          closeAnimation();
	          return noopCancel;
	        }

	        var ngAnimateState  = element.data(NG_ANIMATE_STATE) || {};
	        var runningAnimations     = ngAnimateState.active || {};
	        var totalActiveAnimations = ngAnimateState.totalActive || 0;
	        var lastAnimation         = ngAnimateState.last;
	        var skipAnimation = false;

	        if (totalActiveAnimations > 0) {
	          var animationsToCancel = [];
	          if (!runner.isClassBased) {
	            if (animationEvent == 'leave' && runningAnimations['ng-leave']) {
	              skipAnimation = true;
	            } else {
	              //cancel all animations when a structural animation takes place
	              for (var klass in runningAnimations) {
	                animationsToCancel.push(runningAnimations[klass]);
	              }
	              ngAnimateState = {};
	              cleanup(element, true);
	            }
	          } else if (lastAnimation.event == 'setClass') {
	            animationsToCancel.push(lastAnimation);
	            cleanup(element, className);
	          } else if (runningAnimations[className]) {
	            var current = runningAnimations[className];
	            if (current.event == animationEvent) {
	              skipAnimation = true;
	            } else {
	              animationsToCancel.push(current);
	              cleanup(element, className);
	            }
	          }

	          if (animationsToCancel.length > 0) {
	            forEach(animationsToCancel, function(operation) {
	              operation.cancel();
	            });
	          }
	        }

	        if (runner.isClassBased
	            && !runner.isSetClassOperation
	            && animationEvent != 'animate'
	            && !skipAnimation) {
	          skipAnimation = (animationEvent == 'addClass') == element.hasClass(className); //opposite of XOR
	        }

	        if (skipAnimation) {
	          fireDOMOperation();
	          fireBeforeCallbackAsync();
	          fireAfterCallbackAsync();
	          fireDoneCallbackAsync();
	          return noopCancel;
	        }

	        runningAnimations     = ngAnimateState.active || {};
	        totalActiveAnimations = ngAnimateState.totalActive || 0;

	        if (animationEvent == 'leave') {
	          //there's no need to ever remove the listener since the element
	          //will be removed (destroyed) after the leave animation ends or
	          //is cancelled midway
	          element.one('$destroy', function(e) {
	            var element = angular.element(this);
	            var state = element.data(NG_ANIMATE_STATE);
	            if (state) {
	              var activeLeaveAnimation = state.active['ng-leave'];
	              if (activeLeaveAnimation) {
	                activeLeaveAnimation.cancel();
	                cleanup(element, 'ng-leave');
	              }
	            }
	          });
	        }

	        //the ng-animate class does nothing, but it's here to allow for
	        //parent animations to find and cancel child animations when needed
	        $$jqLite.addClass(element, NG_ANIMATE_CLASS_NAME);
	        if (options && options.tempClasses) {
	          forEach(options.tempClasses, function(className) {
	            $$jqLite.addClass(element, className);
	          });
	        }

	        var localAnimationCount = globalAnimationCounter++;
	        totalActiveAnimations++;
	        runningAnimations[className] = runner;

	        element.data(NG_ANIMATE_STATE, {
	          last: runner,
	          active: runningAnimations,
	          index: localAnimationCount,
	          totalActive: totalActiveAnimations
	        });

	        //first we run the before animations and when all of those are complete
	        //then we perform the DOM operation and run the next set of animations
	        fireBeforeCallbackAsync();
	        runner.before(function(cancelled) {
	          var data = element.data(NG_ANIMATE_STATE);
	          cancelled = cancelled ||
	                        !data || !data.active[className] ||
	                        (runner.isClassBased && data.active[className].event != animationEvent);

	          fireDOMOperation();
	          if (cancelled === true) {
	            closeAnimation();
	          } else {
	            fireAfterCallbackAsync();
	            runner.after(closeAnimation);
	          }
	        });

	        return runner.cancel;

	        function fireDOMCallback(animationPhase) {
	          var eventName = '$animate:' + animationPhase;
	          if (elementEvents && elementEvents[eventName] && elementEvents[eventName].length > 0) {
	            $$asyncCallback(function() {
	              element.triggerHandler(eventName, {
	                event: animationEvent,
	                className: className
	              });
	            });
	          }
	        }

	        function fireBeforeCallbackAsync() {
	          fireDOMCallback('before');
	        }

	        function fireAfterCallbackAsync() {
	          fireDOMCallback('after');
	        }

	        function fireDoneCallbackAsync() {
	          fireDOMCallback('close');
	          doneCallback();
	        }

	        //it is less complicated to use a flag than managing and canceling
	        //timeouts containing multiple callbacks.
	        function fireDOMOperation() {
	          if (!fireDOMOperation.hasBeenRun) {
	            fireDOMOperation.hasBeenRun = true;
	            domOperation();
	          }
	        }

	        function closeAnimation() {
	          if (!closeAnimation.hasBeenRun) {
	            if (runner) { //the runner doesn't exist if it fails to instantiate
	              runner.applyStyles();
	            }

	            closeAnimation.hasBeenRun = true;
	            if (options && options.tempClasses) {
	              forEach(options.tempClasses, function(className) {
	                $$jqLite.removeClass(element, className);
	              });
	            }

	            var data = element.data(NG_ANIMATE_STATE);
	            if (data) {

	              /* only structural animations wait for reflow before removing an
	                 animation, but class-based animations don't. An example of this
	                 failing would be when a parent HTML tag has a ng-class attribute
	                 causing ALL directives below to skip animations during the digest */
	              if (runner && runner.isClassBased) {
	                cleanup(element, className);
	              } else {
	                $$asyncCallback(function() {
	                  var data = element.data(NG_ANIMATE_STATE) || {};
	                  if (localAnimationCount == data.index) {
	                    cleanup(element, className, animationEvent);
	                  }
	                });
	                element.data(NG_ANIMATE_STATE, data);
	              }
	            }
	            fireDoneCallbackAsync();
	          }
	        }
	      }

	      function cancelChildAnimations(element) {
	        var node = extractElementNode(element);
	        if (node) {
	          var nodes = angular.isFunction(node.getElementsByClassName) ?
	            node.getElementsByClassName(NG_ANIMATE_CLASS_NAME) :
	            node.querySelectorAll('.' + NG_ANIMATE_CLASS_NAME);
	          forEach(nodes, function(element) {
	            element = angular.element(element);
	            var data = element.data(NG_ANIMATE_STATE);
	            if (data && data.active) {
	              forEach(data.active, function(runner) {
	                runner.cancel();
	              });
	            }
	          });
	        }
	      }

	      function cleanup(element, className) {
	        if (isMatchingElement(element, $rootElement)) {
	          if (!rootAnimateState.disabled) {
	            rootAnimateState.running = false;
	            rootAnimateState.structural = false;
	          }
	        } else if (className) {
	          var data = element.data(NG_ANIMATE_STATE) || {};

	          var removeAnimations = className === true;
	          if (!removeAnimations && data.active && data.active[className]) {
	            data.totalActive--;
	            delete data.active[className];
	          }

	          if (removeAnimations || !data.totalActive) {
	            $$jqLite.removeClass(element, NG_ANIMATE_CLASS_NAME);
	            element.removeData(NG_ANIMATE_STATE);
	          }
	        }
	      }

	      function animationsDisabled(element, parentElement) {
	        if (rootAnimateState.disabled) {
	          return true;
	        }

	        if (isMatchingElement(element, $rootElement)) {
	          return rootAnimateState.running;
	        }

	        var allowChildAnimations, parentRunningAnimation, hasParent;
	        do {
	          //the element did not reach the root element which means that it
	          //is not apart of the DOM. Therefore there is no reason to do
	          //any animations on it
	          if (parentElement.length === 0) break;

	          var isRoot = isMatchingElement(parentElement, $rootElement);
	          var state = isRoot ? rootAnimateState : (parentElement.data(NG_ANIMATE_STATE) || {});
	          if (state.disabled) {
	            return true;
	          }

	          //no matter what, for an animation to work it must reach the root element
	          //this implies that the element is attached to the DOM when the animation is run
	          if (isRoot) {
	            hasParent = true;
	          }

	          //once a flag is found that is strictly false then everything before
	          //it will be discarded and all child animations will be restricted
	          if (allowChildAnimations !== false) {
	            var animateChildrenFlag = parentElement.data(NG_ANIMATE_CHILDREN);
	            if (angular.isDefined(animateChildrenFlag)) {
	              allowChildAnimations = animateChildrenFlag;
	            }
	          }

	          parentRunningAnimation = parentRunningAnimation ||
	                                   state.running ||
	                                   (state.last && !state.last.isClassBased);
	        }
	        while (parentElement = parentElement.parent());

	        return !hasParent || (!allowChildAnimations && parentRunningAnimation);
	      }
	    }]);

	    $animateProvider.register('', ['$window', '$sniffer', '$timeout', '$$animateReflow',
	                           function($window,   $sniffer,   $timeout,   $$animateReflow) {
	      // Detect proper transitionend/animationend event names.
	      var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;

	      // If unprefixed events are not supported but webkit-prefixed are, use the latter.
	      // Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
	      // Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
	      // but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
	      // Register both events in case `window.onanimationend` is not supported because of that,
	      // do the same for `transitionend` as Safari is likely to exhibit similar behavior.
	      // Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
	      // therefore there is no reason to test anymore for other vendor prefixes: http://caniuse.com/#search=transition
	      if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
	        CSS_PREFIX = '-webkit-';
	        TRANSITION_PROP = 'WebkitTransition';
	        TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
	      } else {
	        TRANSITION_PROP = 'transition';
	        TRANSITIONEND_EVENT = 'transitionend';
	      }

	      if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
	        CSS_PREFIX = '-webkit-';
	        ANIMATION_PROP = 'WebkitAnimation';
	        ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
	      } else {
	        ANIMATION_PROP = 'animation';
	        ANIMATIONEND_EVENT = 'animationend';
	      }

	      var DURATION_KEY = 'Duration';
	      var PROPERTY_KEY = 'Property';
	      var DELAY_KEY = 'Delay';
	      var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
	      var ANIMATION_PLAYSTATE_KEY = 'PlayState';
	      var NG_ANIMATE_PARENT_KEY = '$$ngAnimateKey';
	      var NG_ANIMATE_CSS_DATA_KEY = '$$ngAnimateCSS3Data';
	      var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
	      var CLOSING_TIME_BUFFER = 1.5;
	      var ONE_SECOND = 1000;

	      var lookupCache = {};
	      var parentCounter = 0;
	      var animationReflowQueue = [];
	      var cancelAnimationReflow;
	      function clearCacheAfterReflow() {
	        if (!cancelAnimationReflow) {
	          cancelAnimationReflow = $$animateReflow(function() {
	            animationReflowQueue = [];
	            cancelAnimationReflow = null;
	            lookupCache = {};
	          });
	        }
	      }

	      function afterReflow(element, callback) {
	        if (cancelAnimationReflow) {
	          cancelAnimationReflow();
	        }
	        animationReflowQueue.push(callback);
	        cancelAnimationReflow = $$animateReflow(function() {
	          forEach(animationReflowQueue, function(fn) {
	            fn();
	          });

	          animationReflowQueue = [];
	          cancelAnimationReflow = null;
	          lookupCache = {};
	        });
	      }

	      var closingTimer = null;
	      var closingTimestamp = 0;
	      var animationElementQueue = [];
	      function animationCloseHandler(element, totalTime) {
	        var node = extractElementNode(element);
	        element = angular.element(node);

	        //this item will be garbage collected by the closing
	        //animation timeout
	        animationElementQueue.push(element);

	        //but it may not need to cancel out the existing timeout
	        //if the timestamp is less than the previous one
	        var futureTimestamp = Date.now() + totalTime;
	        if (futureTimestamp <= closingTimestamp) {
	          return;
	        }

	        $timeout.cancel(closingTimer);

	        closingTimestamp = futureTimestamp;
	        closingTimer = $timeout(function() {
	          closeAllAnimations(animationElementQueue);
	          animationElementQueue = [];
	        }, totalTime, false);
	      }

	      function closeAllAnimations(elements) {
	        forEach(elements, function(element) {
	          var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
	          if (elementData) {
	            forEach(elementData.closeAnimationFns, function(fn) {
	              fn();
	            });
	          }
	        });
	      }

	      function getElementAnimationDetails(element, cacheKey) {
	        var data = cacheKey ? lookupCache[cacheKey] : null;
	        if (!data) {
	          var transitionDuration = 0;
	          var transitionDelay = 0;
	          var animationDuration = 0;
	          var animationDelay = 0;

	          //we want all the styles defined before and after
	          forEach(element, function(element) {
	            if (element.nodeType == ELEMENT_NODE) {
	              var elementStyles = $window.getComputedStyle(element) || {};

	              var transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY];
	              transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration);

	              var transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY];
	              transitionDelay  = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay);

	              var animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY];
	              animationDelay   = Math.max(parseMaxTime(elementStyles[ANIMATION_PROP + DELAY_KEY]), animationDelay);

	              var aDuration  = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);

	              if (aDuration > 0) {
	                aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1;
	              }
	              animationDuration = Math.max(aDuration, animationDuration);
	            }
	          });
	          data = {
	            total: 0,
	            transitionDelay: transitionDelay,
	            transitionDuration: transitionDuration,
	            animationDelay: animationDelay,
	            animationDuration: animationDuration
	          };
	          if (cacheKey) {
	            lookupCache[cacheKey] = data;
	          }
	        }
	        return data;
	      }

	      function parseMaxTime(str) {
	        var maxValue = 0;
	        var values = isString(str) ?
	          str.split(/\s*,\s*/) :
	          [];
	        forEach(values, function(value) {
	          maxValue = Math.max(parseFloat(value) || 0, maxValue);
	        });
	        return maxValue;
	      }

	      function getCacheKey(element) {
	        var parentElement = element.parent();
	        var parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
	        if (!parentID) {
	          parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
	          parentID = parentCounter;
	        }
	        return parentID + '-' + extractElementNode(element).getAttribute('class');
	      }

	      function animateSetup(animationEvent, element, className, styles) {
	        var structural = ['ng-enter','ng-leave','ng-move'].indexOf(className) >= 0;

	        var cacheKey = getCacheKey(element);
	        var eventCacheKey = cacheKey + ' ' + className;
	        var itemIndex = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0;

	        var stagger = {};
	        if (itemIndex > 0) {
	          var staggerClassName = className + '-stagger';
	          var staggerCacheKey = cacheKey + ' ' + staggerClassName;
	          var applyClasses = !lookupCache[staggerCacheKey];

	          applyClasses && $$jqLite.addClass(element, staggerClassName);

	          stagger = getElementAnimationDetails(element, staggerCacheKey);

	          applyClasses && $$jqLite.removeClass(element, staggerClassName);
	        }

	        $$jqLite.addClass(element, className);

	        var formerData = element.data(NG_ANIMATE_CSS_DATA_KEY) || {};
	        var timings = getElementAnimationDetails(element, eventCacheKey);
	        var transitionDuration = timings.transitionDuration;
	        var animationDuration = timings.animationDuration;

	        if (structural && transitionDuration === 0 && animationDuration === 0) {
	          $$jqLite.removeClass(element, className);
	          return false;
	        }

	        var blockTransition = styles || (structural && transitionDuration > 0);
	        var blockAnimation = animationDuration > 0 &&
	                             stagger.animationDelay > 0 &&
	                             stagger.animationDuration === 0;

	        var closeAnimationFns = formerData.closeAnimationFns || [];
	        element.data(NG_ANIMATE_CSS_DATA_KEY, {
	          stagger: stagger,
	          cacheKey: eventCacheKey,
	          running: formerData.running || 0,
	          itemIndex: itemIndex,
	          blockTransition: blockTransition,
	          closeAnimationFns: closeAnimationFns
	        });

	        var node = extractElementNode(element);

	        if (blockTransition) {
	          blockTransitions(node, true);
	          if (styles) {
	            element.css(styles);
	          }
	        }

	        if (blockAnimation) {
	          blockAnimations(node, true);
	        }

	        return true;
	      }

	      function animateRun(animationEvent, element, className, activeAnimationComplete, styles) {
	        var node = extractElementNode(element);
	        var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
	        if (node.getAttribute('class').indexOf(className) == -1 || !elementData) {
	          activeAnimationComplete();
	          return;
	        }

	        var activeClassName = '';
	        var pendingClassName = '';
	        forEach(className.split(' '), function(klass, i) {
	          var prefix = (i > 0 ? ' ' : '') + klass;
	          activeClassName += prefix + '-active';
	          pendingClassName += prefix + '-pending';
	        });

	        var style = '';
	        var appliedStyles = [];
	        var itemIndex = elementData.itemIndex;
	        var stagger = elementData.stagger;
	        var staggerTime = 0;
	        if (itemIndex > 0) {
	          var transitionStaggerDelay = 0;
	          if (stagger.transitionDelay > 0 && stagger.transitionDuration === 0) {
	            transitionStaggerDelay = stagger.transitionDelay * itemIndex;
	          }

	          var animationStaggerDelay = 0;
	          if (stagger.animationDelay > 0 && stagger.animationDuration === 0) {
	            animationStaggerDelay = stagger.animationDelay * itemIndex;
	            appliedStyles.push(CSS_PREFIX + 'animation-play-state');
	          }

	          staggerTime = Math.round(Math.max(transitionStaggerDelay, animationStaggerDelay) * 100) / 100;
	        }

	        if (!staggerTime) {
	          $$jqLite.addClass(element, activeClassName);
	          if (elementData.blockTransition) {
	            blockTransitions(node, false);
	          }
	        }

	        var eventCacheKey = elementData.cacheKey + ' ' + activeClassName;
	        var timings = getElementAnimationDetails(element, eventCacheKey);
	        var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
	        if (maxDuration === 0) {
	          $$jqLite.removeClass(element, activeClassName);
	          animateClose(element, className);
	          activeAnimationComplete();
	          return;
	        }

	        if (!staggerTime && styles && Object.keys(styles).length > 0) {
	          if (!timings.transitionDuration) {
	            element.css('transition', timings.animationDuration + 's linear all');
	            appliedStyles.push('transition');
	          }
	          element.css(styles);
	        }

	        var maxDelay = Math.max(timings.transitionDelay, timings.animationDelay);
	        var maxDelayTime = maxDelay * ONE_SECOND;

	        if (appliedStyles.length > 0) {
	          //the element being animated may sometimes contain comment nodes in
	          //the jqLite object, so we're safe to use a single variable to house
	          //the styles since there is always only one element being animated
	          var oldStyle = node.getAttribute('style') || '';
	          if (oldStyle.charAt(oldStyle.length - 1) !== ';') {
	            oldStyle += ';';
	          }
	          node.setAttribute('style', oldStyle + ' ' + style);
	        }

	        var startTime = Date.now();
	        var css3AnimationEvents = ANIMATIONEND_EVENT + ' ' + TRANSITIONEND_EVENT;
	        var animationTime     = (maxDelay + maxDuration) * CLOSING_TIME_BUFFER;
	        var totalTime         = (staggerTime + animationTime) * ONE_SECOND;

	        var staggerTimeout;
	        if (staggerTime > 0) {
	          $$jqLite.addClass(element, pendingClassName);
	          staggerTimeout = $timeout(function() {
	            staggerTimeout = null;

	            if (timings.transitionDuration > 0) {
	              blockTransitions(node, false);
	            }
	            if (timings.animationDuration > 0) {
	              blockAnimations(node, false);
	            }

	            $$jqLite.addClass(element, activeClassName);
	            $$jqLite.removeClass(element, pendingClassName);

	            if (styles) {
	              if (timings.transitionDuration === 0) {
	                element.css('transition', timings.animationDuration + 's linear all');
	              }
	              element.css(styles);
	              appliedStyles.push('transition');
	            }
	          }, staggerTime * ONE_SECOND, false);
	        }

	        element.on(css3AnimationEvents, onAnimationProgress);
	        elementData.closeAnimationFns.push(function() {
	          onEnd();
	          activeAnimationComplete();
	        });

	        elementData.running++;
	        animationCloseHandler(element, totalTime);
	        return onEnd;

	        // This will automatically be called by $animate so
	        // there is no need to attach this internally to the
	        // timeout done method.
	        function onEnd() {
	          element.off(css3AnimationEvents, onAnimationProgress);
	          $$jqLite.removeClass(element, activeClassName);
	          $$jqLite.removeClass(element, pendingClassName);
	          if (staggerTimeout) {
	            $timeout.cancel(staggerTimeout);
	          }
	          animateClose(element, className);
	          var node = extractElementNode(element);
	          for (var i in appliedStyles) {
	            node.style.removeProperty(appliedStyles[i]);
	          }
	        }

	        function onAnimationProgress(event) {
	          event.stopPropagation();
	          var ev = event.originalEvent || event;
	          var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();

	          /* Firefox (or possibly just Gecko) likes to not round values up
	           * when a ms measurement is used for the animation */
	          var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));

	          /* $manualTimeStamp is a mocked timeStamp value which is set
	           * within browserTrigger(). This is only here so that tests can
	           * mock animations properly. Real events fallback to event.timeStamp,
	           * or, if they don't, then a timeStamp is automatically created for them.
	           * We're checking to see if the timeStamp surpasses the expected delay,
	           * but we're using elapsedTime instead of the timeStamp on the 2nd
	           * pre-condition since animations sometimes close off early */
	          if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
	            activeAnimationComplete();
	          }
	        }
	      }

	      function blockTransitions(node, bool) {
	        node.style[TRANSITION_PROP + PROPERTY_KEY] = bool ? 'none' : '';
	      }

	      function blockAnimations(node, bool) {
	        node.style[ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY] = bool ? 'paused' : '';
	      }

	      function animateBefore(animationEvent, element, className, styles) {
	        if (animateSetup(animationEvent, element, className, styles)) {
	          return function(cancelled) {
	            cancelled && animateClose(element, className);
	          };
	        }
	      }

	      function animateAfter(animationEvent, element, className, afterAnimationComplete, styles) {
	        if (element.data(NG_ANIMATE_CSS_DATA_KEY)) {
	          return animateRun(animationEvent, element, className, afterAnimationComplete, styles);
	        } else {
	          animateClose(element, className);
	          afterAnimationComplete();
	        }
	      }

	      function animate(animationEvent, element, className, animationComplete, options) {
	        //If the animateSetup function doesn't bother returning a
	        //cancellation function then it means that there is no animation
	        //to perform at all
	        var preReflowCancellation = animateBefore(animationEvent, element, className, options.from);
	        if (!preReflowCancellation) {
	          clearCacheAfterReflow();
	          animationComplete();
	          return;
	        }

	        //There are two cancellation functions: one is before the first
	        //reflow animation and the second is during the active state
	        //animation. The first function will take care of removing the
	        //data from the element which will not make the 2nd animation
	        //happen in the first place
	        var cancel = preReflowCancellation;
	        afterReflow(element, function() {
	          //once the reflow is complete then we point cancel to
	          //the new cancellation function which will remove all of the
	          //animation properties from the active animation
	          cancel = animateAfter(animationEvent, element, className, animationComplete, options.to);
	        });

	        return function(cancelled) {
	          (cancel || noop)(cancelled);
	        };
	      }

	      function animateClose(element, className) {
	        $$jqLite.removeClass(element, className);
	        var data = element.data(NG_ANIMATE_CSS_DATA_KEY);
	        if (data) {
	          if (data.running) {
	            data.running--;
	          }
	          if (!data.running || data.running === 0) {
	            element.removeData(NG_ANIMATE_CSS_DATA_KEY);
	          }
	        }
	      }

	      return {
	        animate: function(element, className, from, to, animationCompleted, options) {
	          options = options || {};
	          options.from = from;
	          options.to = to;
	          return animate('animate', element, className, animationCompleted, options);
	        },

	        enter: function(element, animationCompleted, options) {
	          options = options || {};
	          return animate('enter', element, 'ng-enter', animationCompleted, options);
	        },

	        leave: function(element, animationCompleted, options) {
	          options = options || {};
	          return animate('leave', element, 'ng-leave', animationCompleted, options);
	        },

	        move: function(element, animationCompleted, options) {
	          options = options || {};
	          return animate('move', element, 'ng-move', animationCompleted, options);
	        },

	        beforeSetClass: function(element, add, remove, animationCompleted, options) {
	          options = options || {};
	          var className = suffixClasses(remove, '-remove') + ' ' +
	                          suffixClasses(add, '-add');
	          var cancellationMethod = animateBefore('setClass', element, className, options.from);
	          if (cancellationMethod) {
	            afterReflow(element, animationCompleted);
	            return cancellationMethod;
	          }
	          clearCacheAfterReflow();
	          animationCompleted();
	        },

	        beforeAddClass: function(element, className, animationCompleted, options) {
	          options = options || {};
	          var cancellationMethod = animateBefore('addClass', element, suffixClasses(className, '-add'), options.from);
	          if (cancellationMethod) {
	            afterReflow(element, animationCompleted);
	            return cancellationMethod;
	          }
	          clearCacheAfterReflow();
	          animationCompleted();
	        },

	        beforeRemoveClass: function(element, className, animationCompleted, options) {
	          options = options || {};
	          var cancellationMethod = animateBefore('removeClass', element, suffixClasses(className, '-remove'), options.from);
	          if (cancellationMethod) {
	            afterReflow(element, animationCompleted);
	            return cancellationMethod;
	          }
	          clearCacheAfterReflow();
	          animationCompleted();
	        },

	        setClass: function(element, add, remove, animationCompleted, options) {
	          options = options || {};
	          remove = suffixClasses(remove, '-remove');
	          add = suffixClasses(add, '-add');
	          var className = remove + ' ' + add;
	          return animateAfter('setClass', element, className, animationCompleted, options.to);
	        },

	        addClass: function(element, className, animationCompleted, options) {
	          options = options || {};
	          return animateAfter('addClass', element, suffixClasses(className, '-add'), animationCompleted, options.to);
	        },

	        removeClass: function(element, className, animationCompleted, options) {
	          options = options || {};
	          return animateAfter('removeClass', element, suffixClasses(className, '-remove'), animationCompleted, options.to);
	        }
	      };

	      function suffixClasses(classes, suffix) {
	        var className = '';
	        classes = isArray(classes) ? classes : classes.split(/\s+/);
	        forEach(classes, function(klass, i) {
	          if (klass && klass.length > 0) {
	            className += (i > 0 ? ' ' : '') + klass + suffix;
	          }
	        });
	        return className;
	      }
	    }]);
	  }]);


	})(window, window.angular);


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license AngularJS v1.3.15
	 * (c) 2010-2014 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular, undefined) {'use strict';

	/**
	 * @ngdoc module
	 * @name ngMessages
	 * @description
	 *
	 * The `ngMessages` module provides enhanced support for displaying messages within templates
	 * (typically within forms or when rendering message objects that return key/value data).
	 * Instead of relying on JavaScript code and/or complex ng-if statements within your form template to
	 * show and hide error messages specific to the state of an input field, the `ngMessages` and
	 * `ngMessage` directives are designed to handle the complexity, inheritance and priority
	 * sequencing based on the order of how the messages are defined in the template.
	 *
	 * Currently, the ngMessages module only contains the code for the `ngMessages`
	 * and `ngMessage` directives.
	 *
	 * # Usage
	 * The `ngMessages` directive listens on a key/value collection which is set on the ngMessages attribute.
	 * Since the {@link ngModel ngModel} directive exposes an `$error` object, this error object can be
	 * used with `ngMessages` to display control error messages in an easier way than with just regular angular
	 * template directives.
	 *
	 * ```html
	 * <form name="myForm">
	 *   <input type="text" ng-model="field" name="myField" required minlength="5" />
	 *   <div ng-messages="myForm.myField.$error">
	 *     <div ng-message="required">You did not enter a field</div>
	 *     <div ng-message="minlength">The value entered is too short</div>
	 *   </div>
	 * </form>
	 * ```
	 *
	 * Now whatever key/value entries are present within the provided object (in this case `$error`) then
	 * the ngMessages directive will render the inner first ngMessage directive (depending if the key values
	 * match the attribute value present on each ngMessage directive). In other words, if your errors
	 * object contains the following data:
	 *
	 * ```javascript
	 * <!-- keep in mind that ngModel automatically sets these error flags -->
	 * myField.$error = { minlength : true, required : false };
	 * ```
	 *
	 * Then the `required` message will be displayed first. When required is false then the `minlength` message
	 * will be displayed right after (since these messages are ordered this way in the template HTML code).
	 * The prioritization of each message is determined by what order they're present in the DOM.
	 * Therefore, instead of having custom JavaScript code determine the priority of what errors are
	 * present before others, the presentation of the errors are handled within the template.
	 *
	 * By default, ngMessages will only display one error at a time. However, if you wish to display all
	 * messages then the `ng-messages-multiple` attribute flag can be used on the element containing the
	 * ngMessages directive to make this happen.
	 *
	 * ```html
	 * <div ng-messages="myForm.myField.$error" ng-messages-multiple>...</div>
	 * ```
	 *
	 * ## Reusing and Overriding Messages
	 * In addition to prioritization, ngMessages also allows for including messages from a remote or an inline
	 * template. This allows for generic collection of messages to be reused across multiple parts of an
	 * application.
	 *
	 * ```html
	 * <script type="text/ng-template" id="error-messages">
	 *   <div ng-message="required">This field is required</div>
	 *   <div ng-message="minlength">This field is too short</div>
	 * </script>
	 * <div ng-messages="myForm.myField.$error" ng-messages-include="error-messages"></div>
	 * ```
	 *
	 * However, including generic messages may not be useful enough to match all input fields, therefore,
	 * `ngMessages` provides the ability to override messages defined in the remote template by redefining
	 * then within the directive container.
	 *
	 * ```html
	 * <!-- a generic template of error messages known as "my-custom-messages" -->
	 * <script type="text/ng-template" id="my-custom-messages">
	 *   <div ng-message="required">This field is required</div>
	 *   <div ng-message="minlength">This field is too short</div>
	 * </script>
	 *
	 * <form name="myForm">
	 *   <input type="email"
	 *          id="email"
	 *          name="myEmail"
	 *          ng-model="email"
	 *          minlength="5"
	 *          required />
	 *
	 *   <div ng-messages="myForm.myEmail.$error" ng-messages-include="my-custom-messages">
	 *     <!-- this required message has overridden the template message -->
	 *     <div ng-message="required">You did not enter your email address</div>
	 *
	 *     <!-- this is a brand new message and will appear last in the prioritization -->
	 *     <div ng-message="email">Your email address is invalid</div>
	 *   </div>
	 * </form>
	 * ```
	 *
	 * In the example HTML code above the message that is set on required will override the corresponding
	 * required message defined within the remote template. Therefore, with particular input fields (such
	 * email addresses, date fields, autocomplete inputs, etc...), specialized error messages can be applied
	 * while more generic messages can be used to handle other, more general input errors.
	 *
	 * ## Animations
	 * If the `ngAnimate` module is active within the application then both the `ngMessages` and
	 * `ngMessage` directives will trigger animations whenever any messages are added and removed
	 * from the DOM by the `ngMessages` directive.
	 *
	 * Whenever the `ngMessages` directive contains one or more visible messages then the `.ng-active` CSS
	 * class will be added to the element. The `.ng-inactive` CSS class will be applied when there are no
	 * animations present. Therefore, CSS transitions and keyframes as well as JavaScript animations can
	 * hook into the animations whenever these classes are added/removed.
	 *
	 * Let's say that our HTML code for our messages container looks like so:
	 *
	 * ```html
	 * <div ng-messages="myMessages" class="my-messages">
	 *   <div ng-message="alert" class="some-message">...</div>
	 *   <div ng-message="fail" class="some-message">...</div>
	 * </div>
	 * ```
	 *
	 * Then the CSS animation code for the message container looks like so:
	 *
	 * ```css
	 * .my-messages {
	 *   transition:1s linear all;
	 * }
	 * .my-messages.ng-active {
	 *   // messages are visible
	 * }
	 * .my-messages.ng-inactive {
	 *   // messages are hidden
	 * }
	 * ```
	 *
	 * Whenever an inner message is attached (becomes visible) or removed (becomes hidden) then the enter
	 * and leave animation is triggered for each particular element bound to the `ngMessage` directive.
	 *
	 * Therefore, the CSS code for the inner messages looks like so:
	 *
	 * ```css
	 * .some-message {
	 *   transition:1s linear all;
	 * }
	 *
	 * .some-message.ng-enter {}
	 * .some-message.ng-enter.ng-enter-active {}
	 *
	 * .some-message.ng-leave {}
	 * .some-message.ng-leave.ng-leave-active {}
	 * ```
	 *
	 * {@link ngAnimate Click here} to learn how to use JavaScript animations or to learn more about ngAnimate.
	 */
	angular.module('ngMessages', [])

	   /**
	    * @ngdoc directive
	    * @module ngMessages
	    * @name ngMessages
	    * @restrict AE
	    *
	    * @description
	    * `ngMessages` is a directive that is designed to show and hide messages based on the state
	    * of a key/value object that it listens on. The directive itself compliments error message
	    * reporting with the `ngModel` $error object (which stores a key/value state of validation errors).
	    *
	    * `ngMessages` manages the state of internal messages within its container element. The internal
	    * messages use the `ngMessage` directive and will be inserted/removed from the page depending
	    * on if they're present within the key/value object. By default, only one message will be displayed
	    * at a time and this depends on the prioritization of the messages within the template. (This can
	    * be changed by using the ng-messages-multiple on the directive container.)
	    *
	    * A remote template can also be used to promote message reusability and messages can also be
	    * overridden.
	    *
	    * {@link module:ngMessages Click here} to learn more about `ngMessages` and `ngMessage`.
	    *
	    * @usage
	    * ```html
	    * <!-- using attribute directives -->
	    * <ANY ng-messages="expression">
	    *   <ANY ng-message="keyValue1">...</ANY>
	    *   <ANY ng-message="keyValue2">...</ANY>
	    *   <ANY ng-message="keyValue3">...</ANY>
	    * </ANY>
	    *
	    * <!-- or by using element directives -->
	    * <ng-messages for="expression">
	    *   <ng-message when="keyValue1">...</ng-message>
	    *   <ng-message when="keyValue2">...</ng-message>
	    *   <ng-message when="keyValue3">...</ng-message>
	    * </ng-messages>
	    * ```
	    *
	    * @param {string} ngMessages an angular expression evaluating to a key/value object
	    *                 (this is typically the $error object on an ngModel instance).
	    * @param {string=} ngMessagesMultiple|multiple when set, all messages will be displayed with true
	    * @param {string=} ngMessagesInclude|include when set, the specified template will be included into the ng-messages container
	    *
	    * @example
	    * <example name="ngMessages-directive" module="ngMessagesExample"
	    *          deps="angular-messages.js"
	    *          animations="true" fixBase="true">
	    *   <file name="index.html">
	    *     <form name="myForm">
	    *       <label>Enter your name:</label>
	    *       <input type="text"
	    *              name="myName"
	    *              ng-model="name"
	    *              ng-minlength="5"
	    *              ng-maxlength="20"
	    *              required />
	    *
	    *       <pre>myForm.myName.$error = {{ myForm.myName.$error | json }}</pre>
	    *
	    *       <div ng-messages="myForm.myName.$error" style="color:maroon">
	    *         <div ng-message="required">You did not enter a field</div>
	    *         <div ng-message="minlength">Your field is too short</div>
	    *         <div ng-message="maxlength">Your field is too long</div>
	    *       </div>
	    *     </form>
	    *   </file>
	    *   <file name="script.js">
	    *     angular.module('ngMessagesExample', ['ngMessages']);
	    *   </file>
	    * </example>
	    */
	  .directive('ngMessages', ['$compile', '$animate', '$templateRequest',
	                   function($compile,    $animate,   $templateRequest) {
	    var ACTIVE_CLASS = 'ng-active';
	    var INACTIVE_CLASS = 'ng-inactive';

	    return {
	      restrict: 'AE',
	      controller: function() {
	        this.$renderNgMessageClasses = angular.noop;

	        var messages = [];
	        this.registerMessage = function(index, message) {
	          for (var i = 0; i < messages.length; i++) {
	            if (messages[i].type == message.type) {
	              if (index != i) {
	                var temp = messages[index];
	                messages[index] = messages[i];
	                if (index < messages.length) {
	                  messages[i] = temp;
	                } else {
	                  messages.splice(0, i); //remove the old one (and shift left)
	                }
	              }
	              return;
	            }
	          }
	          messages.splice(index, 0, message); //add the new one (and shift right)
	        };

	        this.renderMessages = function(values, multiple) {
	          values = values || {};

	          var found;
	          angular.forEach(messages, function(message) {
	            if ((!found || multiple) && truthyVal(values[message.type])) {
	              message.attach();
	              found = true;
	            } else {
	              message.detach();
	            }
	          });

	          this.renderElementClasses(found);

	          function truthyVal(value) {
	            return value !== null && value !== false && value;
	          }
	        };
	      },
	      require: 'ngMessages',
	      link: function($scope, element, $attrs, ctrl) {
	        ctrl.renderElementClasses = function(bool) {
	          bool ? $animate.setClass(element, ACTIVE_CLASS, INACTIVE_CLASS)
	               : $animate.setClass(element, INACTIVE_CLASS, ACTIVE_CLASS);
	        };

	        //JavaScript treats empty strings as false, but ng-message-multiple by itself is an empty string
	        var multiple = angular.isString($attrs.ngMessagesMultiple) ||
	                       angular.isString($attrs.multiple);

	        var cachedValues, watchAttr = $attrs.ngMessages || $attrs['for']; //for is a reserved keyword
	        $scope.$watchCollection(watchAttr, function(values) {
	          cachedValues = values;
	          ctrl.renderMessages(values, multiple);
	        });

	        var tpl = $attrs.ngMessagesInclude || $attrs.include;
	        if (tpl) {
	          $templateRequest(tpl)
	            .then(function processTemplate(html) {
	              var after, container = angular.element('<div/>').html(html);
	              angular.forEach(container.children(), function(elm) {
	               elm = angular.element(elm);
	               after ? after.after(elm)
	                     : element.prepend(elm); //start of the container
	               after = elm;
	               $compile(elm)($scope);
	              });
	              ctrl.renderMessages(cachedValues, multiple);
	            });
	        }
	      }
	    };
	  }])


	   /**
	    * @ngdoc directive
	    * @name ngMessage
	    * @restrict AE
	    * @scope
	    *
	    * @description
	    * `ngMessage` is a directive with the purpose to show and hide a particular message.
	    * For `ngMessage` to operate, a parent `ngMessages` directive on a parent DOM element
	    * must be situated since it determines which messages are visible based on the state
	    * of the provided key/value map that `ngMessages` listens on.
	    *
	    * More information about using `ngMessage` can be found in the
	    * {@link module:ngMessages `ngMessages` module documentation}.
	    *
	    * @usage
	    * ```html
	    * <!-- using attribute directives -->
	    * <ANY ng-messages="expression">
	    *   <ANY ng-message="keyValue1">...</ANY>
	    *   <ANY ng-message="keyValue2">...</ANY>
	    *   <ANY ng-message="keyValue3">...</ANY>
	    * </ANY>
	    *
	    * <!-- or by using element directives -->
	    * <ng-messages for="expression">
	    *   <ng-message when="keyValue1">...</ng-message>
	    *   <ng-message when="keyValue2">...</ng-message>
	    *   <ng-message when="keyValue3">...</ng-message>
	    * </ng-messages>
	    * ```
	    *
	    * @param {string} ngMessage a string value corresponding to the message key.
	    */
	  .directive('ngMessage', ['$animate', function($animate) {
	    var COMMENT_NODE = 8;
	    return {
	      require: '^ngMessages',
	      transclude: 'element',
	      terminal: true,
	      restrict: 'AE',
	      link: function($scope, $element, $attrs, ngMessages, $transclude) {
	        var index, element;

	        var commentNode = $element[0];
	        var parentNode = commentNode.parentNode;
	        for (var i = 0, j = 0; i < parentNode.childNodes.length; i++) {
	          var node = parentNode.childNodes[i];
	          if (node.nodeType == COMMENT_NODE && node.nodeValue.indexOf('ngMessage') >= 0) {
	            if (node === commentNode) {
	              index = j;
	              break;
	            }
	            j++;
	          }
	        }

	        ngMessages.registerMessage(index, {
	          type: $attrs.ngMessage || $attrs.when,
	          attach: function() {
	            if (!element) {
	              $transclude($scope, function(clone) {
	                $animate.enter(clone, null, $element);
	                element = clone;
	              });
	            }
	          },
	          detach: function(now) {
	            if (element) {
	              $animate.leave(element);
	              element = null;
	            }
	          }
	        });
	      }
	    };
	  }]);


	})(window, window.angular);


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license AngularJS v1.3.15
	 * (c) 2010-2014 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular, undefined) {'use strict';

	/**
	 * @ngdoc module
	 * @name ngTouch
	 * @description
	 *
	 * # ngTouch
	 *
	 * The `ngTouch` module provides touch events and other helpers for touch-enabled devices.
	 * The implementation is based on jQuery Mobile touch event handling
	 * ([jquerymobile.com](http://jquerymobile.com/)).
	 *
	 *
	 * See {@link ngTouch.$swipe `$swipe`} for usage.
	 *
	 * <div doc-module-components="ngTouch"></div>
	 *
	 */

	// define ngTouch module
	/* global -ngTouch */
	var ngTouch = angular.module('ngTouch', []);

	/* global ngTouch: false */

	    /**
	     * @ngdoc service
	     * @name $swipe
	     *
	     * @description
	     * The `$swipe` service is a service that abstracts the messier details of hold-and-drag swipe
	     * behavior, to make implementing swipe-related directives more convenient.
	     *
	     * Requires the {@link ngTouch `ngTouch`} module to be installed.
	     *
	     * `$swipe` is used by the `ngSwipeLeft` and `ngSwipeRight` directives in `ngTouch`, and by
	     * `ngCarousel` in a separate component.
	     *
	     * # Usage
	     * The `$swipe` service is an object with a single method: `bind`. `bind` takes an element
	     * which is to be watched for swipes, and an object with four handler functions. See the
	     * documentation for `bind` below.
	     */

	ngTouch.factory('$swipe', [function() {
	  // The total distance in any direction before we make the call on swipe vs. scroll.
	  var MOVE_BUFFER_RADIUS = 10;

	  var POINTER_EVENTS = {
	    'mouse': {
	      start: 'mousedown',
	      move: 'mousemove',
	      end: 'mouseup'
	    },
	    'touch': {
	      start: 'touchstart',
	      move: 'touchmove',
	      end: 'touchend',
	      cancel: 'touchcancel'
	    }
	  };

	  function getCoordinates(event) {
	    var touches = event.touches && event.touches.length ? event.touches : [event];
	    var e = (event.changedTouches && event.changedTouches[0]) ||
	        (event.originalEvent && event.originalEvent.changedTouches &&
	            event.originalEvent.changedTouches[0]) ||
	        touches[0].originalEvent || touches[0];

	    return {
	      x: e.clientX,
	      y: e.clientY
	    };
	  }

	  function getEvents(pointerTypes, eventType) {
	    var res = [];
	    angular.forEach(pointerTypes, function(pointerType) {
	      var eventName = POINTER_EVENTS[pointerType][eventType];
	      if (eventName) {
	        res.push(eventName);
	      }
	    });
	    return res.join(' ');
	  }

	  return {
	    /**
	     * @ngdoc method
	     * @name $swipe#bind
	     *
	     * @description
	     * The main method of `$swipe`. It takes an element to be watched for swipe motions, and an
	     * object containing event handlers.
	     * The pointer types that should be used can be specified via the optional
	     * third argument, which is an array of strings `'mouse'` and `'touch'`. By default,
	     * `$swipe` will listen for `mouse` and `touch` events.
	     *
	     * The four events are `start`, `move`, `end`, and `cancel`. `start`, `move`, and `end`
	     * receive as a parameter a coordinates object of the form `{ x: 150, y: 310 }`.
	     *
	     * `start` is called on either `mousedown` or `touchstart`. After this event, `$swipe` is
	     * watching for `touchmove` or `mousemove` events. These events are ignored until the total
	     * distance moved in either dimension exceeds a small threshold.
	     *
	     * Once this threshold is exceeded, either the horizontal or vertical delta is greater.
	     * - If the horizontal distance is greater, this is a swipe and `move` and `end` events follow.
	     * - If the vertical distance is greater, this is a scroll, and we let the browser take over.
	     *   A `cancel` event is sent.
	     *
	     * `move` is called on `mousemove` and `touchmove` after the above logic has determined that
	     * a swipe is in progress.
	     *
	     * `end` is called when a swipe is successfully completed with a `touchend` or `mouseup`.
	     *
	     * `cancel` is called either on a `touchcancel` from the browser, or when we begin scrolling
	     * as described above.
	     *
	     */
	    bind: function(element, eventHandlers, pointerTypes) {
	      // Absolute total movement, used to control swipe vs. scroll.
	      var totalX, totalY;
	      // Coordinates of the start position.
	      var startCoords;
	      // Last event's position.
	      var lastPos;
	      // Whether a swipe is active.
	      var active = false;

	      pointerTypes = pointerTypes || ['mouse', 'touch'];
	      element.on(getEvents(pointerTypes, 'start'), function(event) {
	        startCoords = getCoordinates(event);
	        active = true;
	        totalX = 0;
	        totalY = 0;
	        lastPos = startCoords;
	        eventHandlers['start'] && eventHandlers['start'](startCoords, event);
	      });
	      var events = getEvents(pointerTypes, 'cancel');
	      if (events) {
	        element.on(events, function(event) {
	          active = false;
	          eventHandlers['cancel'] && eventHandlers['cancel'](event);
	        });
	      }

	      element.on(getEvents(pointerTypes, 'move'), function(event) {
	        if (!active) return;

	        // Android will send a touchcancel if it thinks we're starting to scroll.
	        // So when the total distance (+ or - or both) exceeds 10px in either direction,
	        // we either:
	        // - On totalX > totalY, we send preventDefault() and treat this as a swipe.
	        // - On totalY > totalX, we let the browser handle it as a scroll.

	        if (!startCoords) return;
	        var coords = getCoordinates(event);

	        totalX += Math.abs(coords.x - lastPos.x);
	        totalY += Math.abs(coords.y - lastPos.y);

	        lastPos = coords;

	        if (totalX < MOVE_BUFFER_RADIUS && totalY < MOVE_BUFFER_RADIUS) {
	          return;
	        }

	        // One of totalX or totalY has exceeded the buffer, so decide on swipe vs. scroll.
	        if (totalY > totalX) {
	          // Allow native scrolling to take over.
	          active = false;
	          eventHandlers['cancel'] && eventHandlers['cancel'](event);
	          return;
	        } else {
	          // Prevent the browser from scrolling.
	          event.preventDefault();
	          eventHandlers['move'] && eventHandlers['move'](coords, event);
	        }
	      });

	      element.on(getEvents(pointerTypes, 'end'), function(event) {
	        if (!active) return;
	        active = false;
	        eventHandlers['end'] && eventHandlers['end'](getCoordinates(event), event);
	      });
	    }
	  };
	}]);

	/* global ngTouch: false */

	/**
	 * @ngdoc directive
	 * @name ngClick
	 *
	 * @description
	 * A more powerful replacement for the default ngClick designed to be used on touchscreen
	 * devices. Most mobile browsers wait about 300ms after a tap-and-release before sending
	 * the click event. This version handles them immediately, and then prevents the
	 * following click event from propagating.
	 *
	 * Requires the {@link ngTouch `ngTouch`} module to be installed.
	 *
	 * This directive can fall back to using an ordinary click event, and so works on desktop
	 * browsers as well as mobile.
	 *
	 * This directive also sets the CSS class `ng-click-active` while the element is being held
	 * down (by a mouse click or touch) so you can restyle the depressed element if you wish.
	 *
	 * @element ANY
	 * @param {expression} ngClick {@link guide/expression Expression} to evaluate
	 * upon tap. (Event object is available as `$event`)
	 *
	 * @example
	    <example module="ngClickExample" deps="angular-touch.js">
	      <file name="index.html">
	        <button ng-click="count = count + 1" ng-init="count=0">
	          Increment
	        </button>
	        count: {{ count }}
	      </file>
	      <file name="script.js">
	        angular.module('ngClickExample', ['ngTouch']);
	      </file>
	    </example>
	 */

	ngTouch.config(['$provide', function($provide) {
	  $provide.decorator('ngClickDirective', ['$delegate', function($delegate) {
	    // drop the default ngClick directive
	    $delegate.shift();
	    return $delegate;
	  }]);
	}]);

	ngTouch.directive('ngClick', ['$parse', '$timeout', '$rootElement',
	    function($parse, $timeout, $rootElement) {
	  var TAP_DURATION = 750; // Shorter than 750ms is a tap, longer is a taphold or drag.
	  var MOVE_TOLERANCE = 12; // 12px seems to work in most mobile browsers.
	  var PREVENT_DURATION = 2500; // 2.5 seconds maximum from preventGhostClick call to click
	  var CLICKBUSTER_THRESHOLD = 25; // 25 pixels in any dimension is the limit for busting clicks.

	  var ACTIVE_CLASS_NAME = 'ng-click-active';
	  var lastPreventedTime;
	  var touchCoordinates;
	  var lastLabelClickCoordinates;


	  // TAP EVENTS AND GHOST CLICKS
	  //
	  // Why tap events?
	  // Mobile browsers detect a tap, then wait a moment (usually ~300ms) to see if you're
	  // double-tapping, and then fire a click event.
	  //
	  // This delay sucks and makes mobile apps feel unresponsive.
	  // So we detect touchstart, touchmove, touchcancel and touchend ourselves and determine when
	  // the user has tapped on something.
	  //
	  // What happens when the browser then generates a click event?
	  // The browser, of course, also detects the tap and fires a click after a delay. This results in
	  // tapping/clicking twice. We do "clickbusting" to prevent it.
	  //
	  // How does it work?
	  // We attach global touchstart and click handlers, that run during the capture (early) phase.
	  // So the sequence for a tap is:
	  // - global touchstart: Sets an "allowable region" at the point touched.
	  // - element's touchstart: Starts a touch
	  // (- touchmove or touchcancel ends the touch, no click follows)
	  // - element's touchend: Determines if the tap is valid (didn't move too far away, didn't hold
	  //   too long) and fires the user's tap handler. The touchend also calls preventGhostClick().
	  // - preventGhostClick() removes the allowable region the global touchstart created.
	  // - The browser generates a click event.
	  // - The global click handler catches the click, and checks whether it was in an allowable region.
	  //     - If preventGhostClick was called, the region will have been removed, the click is busted.
	  //     - If the region is still there, the click proceeds normally. Therefore clicks on links and
	  //       other elements without ngTap on them work normally.
	  //
	  // This is an ugly, terrible hack!
	  // Yeah, tell me about it. The alternatives are using the slow click events, or making our users
	  // deal with the ghost clicks, so I consider this the least of evils. Fortunately Angular
	  // encapsulates this ugly logic away from the user.
	  //
	  // Why not just put click handlers on the element?
	  // We do that too, just to be sure. If the tap event caused the DOM to change,
	  // it is possible another element is now in that position. To take account for these possibly
	  // distinct elements, the handlers are global and care only about coordinates.

	  // Checks if the coordinates are close enough to be within the region.
	  function hit(x1, y1, x2, y2) {
	    return Math.abs(x1 - x2) < CLICKBUSTER_THRESHOLD && Math.abs(y1 - y2) < CLICKBUSTER_THRESHOLD;
	  }

	  // Checks a list of allowable regions against a click location.
	  // Returns true if the click should be allowed.
	  // Splices out the allowable region from the list after it has been used.
	  function checkAllowableRegions(touchCoordinates, x, y) {
	    for (var i = 0; i < touchCoordinates.length; i += 2) {
	      if (hit(touchCoordinates[i], touchCoordinates[i + 1], x, y)) {
	        touchCoordinates.splice(i, i + 2);
	        return true; // allowable region
	      }
	    }
	    return false; // No allowable region; bust it.
	  }

	  // Global click handler that prevents the click if it's in a bustable zone and preventGhostClick
	  // was called recently.
	  function onClick(event) {
	    if (Date.now() - lastPreventedTime > PREVENT_DURATION) {
	      return; // Too old.
	    }

	    var touches = event.touches && event.touches.length ? event.touches : [event];
	    var x = touches[0].clientX;
	    var y = touches[0].clientY;
	    // Work around desktop Webkit quirk where clicking a label will fire two clicks (on the label
	    // and on the input element). Depending on the exact browser, this second click we don't want
	    // to bust has either (0,0), negative coordinates, or coordinates equal to triggering label
	    // click event
	    if (x < 1 && y < 1) {
	      return; // offscreen
	    }
	    if (lastLabelClickCoordinates &&
	        lastLabelClickCoordinates[0] === x && lastLabelClickCoordinates[1] === y) {
	      return; // input click triggered by label click
	    }
	    // reset label click coordinates on first subsequent click
	    if (lastLabelClickCoordinates) {
	      lastLabelClickCoordinates = null;
	    }
	    // remember label click coordinates to prevent click busting of trigger click event on input
	    if (event.target.tagName.toLowerCase() === 'label') {
	      lastLabelClickCoordinates = [x, y];
	    }

	    // Look for an allowable region containing this click.
	    // If we find one, that means it was created by touchstart and not removed by
	    // preventGhostClick, so we don't bust it.
	    if (checkAllowableRegions(touchCoordinates, x, y)) {
	      return;
	    }

	    // If we didn't find an allowable region, bust the click.
	    event.stopPropagation();
	    event.preventDefault();

	    // Blur focused form elements
	    event.target && event.target.blur();
	  }


	  // Global touchstart handler that creates an allowable region for a click event.
	  // This allowable region can be removed by preventGhostClick if we want to bust it.
	  function onTouchStart(event) {
	    var touches = event.touches && event.touches.length ? event.touches : [event];
	    var x = touches[0].clientX;
	    var y = touches[0].clientY;
	    touchCoordinates.push(x, y);

	    $timeout(function() {
	      // Remove the allowable region.
	      for (var i = 0; i < touchCoordinates.length; i += 2) {
	        if (touchCoordinates[i] == x && touchCoordinates[i + 1] == y) {
	          touchCoordinates.splice(i, i + 2);
	          return;
	        }
	      }
	    }, PREVENT_DURATION, false);
	  }

	  // On the first call, attaches some event handlers. Then whenever it gets called, it creates a
	  // zone around the touchstart where clicks will get busted.
	  function preventGhostClick(x, y) {
	    if (!touchCoordinates) {
	      $rootElement[0].addEventListener('click', onClick, true);
	      $rootElement[0].addEventListener('touchstart', onTouchStart, true);
	      touchCoordinates = [];
	    }

	    lastPreventedTime = Date.now();

	    checkAllowableRegions(touchCoordinates, x, y);
	  }

	  // Actual linking function.
	  return function(scope, element, attr) {
	    var clickHandler = $parse(attr.ngClick),
	        tapping = false,
	        tapElement,  // Used to blur the element after a tap.
	        startTime,   // Used to check if the tap was held too long.
	        touchStartX,
	        touchStartY;

	    function resetState() {
	      tapping = false;
	      element.removeClass(ACTIVE_CLASS_NAME);
	    }

	    element.on('touchstart', function(event) {
	      tapping = true;
	      tapElement = event.target ? event.target : event.srcElement; // IE uses srcElement.
	      // Hack for Safari, which can target text nodes instead of containers.
	      if (tapElement.nodeType == 3) {
	        tapElement = tapElement.parentNode;
	      }

	      element.addClass(ACTIVE_CLASS_NAME);

	      startTime = Date.now();

	      var touches = event.touches && event.touches.length ? event.touches : [event];
	      var e = touches[0].originalEvent || touches[0];
	      touchStartX = e.clientX;
	      touchStartY = e.clientY;
	    });

	    element.on('touchmove', function(event) {
	      resetState();
	    });

	    element.on('touchcancel', function(event) {
	      resetState();
	    });

	    element.on('touchend', function(event) {
	      var diff = Date.now() - startTime;

	      var touches = (event.changedTouches && event.changedTouches.length) ? event.changedTouches :
	          ((event.touches && event.touches.length) ? event.touches : [event]);
	      var e = touches[0].originalEvent || touches[0];
	      var x = e.clientX;
	      var y = e.clientY;
	      var dist = Math.sqrt(Math.pow(x - touchStartX, 2) + Math.pow(y - touchStartY, 2));

	      if (tapping && diff < TAP_DURATION && dist < MOVE_TOLERANCE) {
	        // Call preventGhostClick so the clickbuster will catch the corresponding click.
	        preventGhostClick(x, y);

	        // Blur the focused element (the button, probably) before firing the callback.
	        // This doesn't work perfectly on Android Chrome, but seems to work elsewhere.
	        // I couldn't get anything to work reliably on Android Chrome.
	        if (tapElement) {
	          tapElement.blur();
	        }

	        if (!angular.isDefined(attr.disabled) || attr.disabled === false) {
	          element.triggerHandler('click', [event]);
	        }
	      }

	      resetState();
	    });

	    // Hack for iOS Safari's benefit. It goes searching for onclick handlers and is liable to click
	    // something else nearby.
	    element.onclick = function(event) { };

	    // Actual click handler.
	    // There are three different kinds of clicks, only two of which reach this point.
	    // - On desktop browsers without touch events, their clicks will always come here.
	    // - On mobile browsers, the simulated "fast" click will call this.
	    // - But the browser's follow-up slow click will be "busted" before it reaches this handler.
	    // Therefore it's safe to use this directive on both mobile and desktop.
	    element.on('click', function(event, touchend) {
	      scope.$apply(function() {
	        clickHandler(scope, {$event: (touchend || event)});
	      });
	    });

	    element.on('mousedown', function(event) {
	      element.addClass(ACTIVE_CLASS_NAME);
	    });

	    element.on('mousemove mouseup', function(event) {
	      element.removeClass(ACTIVE_CLASS_NAME);
	    });

	  };
	}]);

	/* global ngTouch: false */

	/**
	 * @ngdoc directive
	 * @name ngSwipeLeft
	 *
	 * @description
	 * Specify custom behavior when an element is swiped to the left on a touchscreen device.
	 * A leftward swipe is a quick, right-to-left slide of the finger.
	 * Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag
	 * too.
	 *
	 * To disable the mouse click and drag functionality, add `ng-swipe-disable-mouse` to
	 * the `ng-swipe-left` or `ng-swipe-right` DOM Element.
	 *
	 * Requires the {@link ngTouch `ngTouch`} module to be installed.
	 *
	 * @element ANY
	 * @param {expression} ngSwipeLeft {@link guide/expression Expression} to evaluate
	 * upon left swipe. (Event object is available as `$event`)
	 *
	 * @example
	    <example module="ngSwipeLeftExample" deps="angular-touch.js">
	      <file name="index.html">
	        <div ng-show="!showActions" ng-swipe-left="showActions = true">
	          Some list content, like an email in the inbox
	        </div>
	        <div ng-show="showActions" ng-swipe-right="showActions = false">
	          <button ng-click="reply()">Reply</button>
	          <button ng-click="delete()">Delete</button>
	        </div>
	      </file>
	      <file name="script.js">
	        angular.module('ngSwipeLeftExample', ['ngTouch']);
	      </file>
	    </example>
	 */

	/**
	 * @ngdoc directive
	 * @name ngSwipeRight
	 *
	 * @description
	 * Specify custom behavior when an element is swiped to the right on a touchscreen device.
	 * A rightward swipe is a quick, left-to-right slide of the finger.
	 * Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag
	 * too.
	 *
	 * Requires the {@link ngTouch `ngTouch`} module to be installed.
	 *
	 * @element ANY
	 * @param {expression} ngSwipeRight {@link guide/expression Expression} to evaluate
	 * upon right swipe. (Event object is available as `$event`)
	 *
	 * @example
	    <example module="ngSwipeRightExample" deps="angular-touch.js">
	      <file name="index.html">
	        <div ng-show="!showActions" ng-swipe-left="showActions = true">
	          Some list content, like an email in the inbox
	        </div>
	        <div ng-show="showActions" ng-swipe-right="showActions = false">
	          <button ng-click="reply()">Reply</button>
	          <button ng-click="delete()">Delete</button>
	        </div>
	      </file>
	      <file name="script.js">
	        angular.module('ngSwipeRightExample', ['ngTouch']);
	      </file>
	    </example>
	 */

	function makeSwipeDirective(directiveName, direction, eventName) {
	  ngTouch.directive(directiveName, ['$parse', '$swipe', function($parse, $swipe) {
	    // The maximum vertical delta for a swipe should be less than 75px.
	    var MAX_VERTICAL_DISTANCE = 75;
	    // Vertical distance should not be more than a fraction of the horizontal distance.
	    var MAX_VERTICAL_RATIO = 0.3;
	    // At least a 30px lateral motion is necessary for a swipe.
	    var MIN_HORIZONTAL_DISTANCE = 30;

	    return function(scope, element, attr) {
	      var swipeHandler = $parse(attr[directiveName]);

	      var startCoords, valid;

	      function validSwipe(coords) {
	        // Check that it's within the coordinates.
	        // Absolute vertical distance must be within tolerances.
	        // Horizontal distance, we take the current X - the starting X.
	        // This is negative for leftward swipes and positive for rightward swipes.
	        // After multiplying by the direction (-1 for left, +1 for right), legal swipes
	        // (ie. same direction as the directive wants) will have a positive delta and
	        // illegal ones a negative delta.
	        // Therefore this delta must be positive, and larger than the minimum.
	        if (!startCoords) return false;
	        var deltaY = Math.abs(coords.y - startCoords.y);
	        var deltaX = (coords.x - startCoords.x) * direction;
	        return valid && // Short circuit for already-invalidated swipes.
	            deltaY < MAX_VERTICAL_DISTANCE &&
	            deltaX > 0 &&
	            deltaX > MIN_HORIZONTAL_DISTANCE &&
	            deltaY / deltaX < MAX_VERTICAL_RATIO;
	      }

	      var pointerTypes = ['touch'];
	      if (!angular.isDefined(attr['ngSwipeDisableMouse'])) {
	        pointerTypes.push('mouse');
	      }
	      $swipe.bind(element, {
	        'start': function(coords, event) {
	          startCoords = coords;
	          valid = true;
	        },
	        'cancel': function(event) {
	          valid = false;
	        },
	        'end': function(coords, event) {
	          if (validSwipe(coords)) {
	            scope.$apply(function() {
	              element.triggerHandler(eventName);
	              swipeHandler(scope, {$event: event});
	            });
	          }
	        }
	      }, pointerTypes);
	    };
	  }]);
	}

	// Left is negative X-coordinate, right is positive.
	makeSwipeDirective('ngSwipeLeft', -1, 'swipeleft');
	makeSwipeDirective('ngSwipeRight', 1, 'swiperight');



	})(window, window.angular);


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license AngularJS v1.3.15
	 * (c) 2010-2014 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular, undefined) {'use strict';

	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
	 *     Any commits to this file should be reviewed with security in mind.  *
	 *   Changes to this file can potentially create security vulnerabilities. *
	 *          An approval from 2 Core members with history of modifying      *
	 *                         this file is required.                          *
	 *                                                                         *
	 *  Does the change somehow allow for arbitrary javascript to be executed? *
	 *    Or allows for someone to change the prototype of built-in objects?   *
	 *     Or gives undesired access to variables likes document or window?    *
	 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

	var $sanitizeMinErr = angular.$$minErr('$sanitize');

	/**
	 * @ngdoc module
	 * @name ngSanitize
	 * @description
	 *
	 * # ngSanitize
	 *
	 * The `ngSanitize` module provides functionality to sanitize HTML.
	 *
	 *
	 * <div doc-module-components="ngSanitize"></div>
	 *
	 * See {@link ngSanitize.$sanitize `$sanitize`} for usage.
	 */

	/*
	 * HTML Parser By Misko Hevery (misko@hevery.com)
	 * based on:  HTML Parser By John Resig (ejohn.org)
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 *
	 * // Use like so:
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 */


	/**
	 * @ngdoc service
	 * @name $sanitize
	 * @kind function
	 *
	 * @description
	 *   The input is sanitized by parsing the HTML into tokens. All safe tokens (from a whitelist) are
	 *   then serialized back to properly escaped html string. This means that no unsafe input can make
	 *   it into the returned string, however, since our parser is more strict than a typical browser
	 *   parser, it's possible that some obscure input, which would be recognized as valid HTML by a
	 *   browser, won't make it through the sanitizer. The input may also contain SVG markup.
	 *   The whitelist is configured using the functions `aHrefSanitizationWhitelist` and
	 *   `imgSrcSanitizationWhitelist` of {@link ng.$compileProvider `$compileProvider`}.
	 *
	 * @param {string} html HTML input.
	 * @returns {string} Sanitized HTML.
	 *
	 * @example
	   <example module="sanitizeExample" deps="angular-sanitize.js">
	   <file name="index.html">
	     <script>
	         angular.module('sanitizeExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', '$sce', function($scope, $sce) {
	             $scope.snippet =
	               '<p style="color:blue">an html\n' +
	               '<em onmouseover="this.textContent=\'PWN3D!\'">click here</em>\n' +
	               'snippet</p>';
	             $scope.deliberatelyTrustDangerousSnippet = function() {
	               return $sce.trustAsHtml($scope.snippet);
	             };
	           }]);
	     </script>
	     <div ng-controller="ExampleController">
	        Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Directive</td>
	           <td>How</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="bind-html-with-sanitize">
	           <td>ng-bind-html</td>
	           <td>Automatically uses $sanitize</td>
	           <td><pre>&lt;div ng-bind-html="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind-html="snippet"></div></td>
	         </tr>
	         <tr id="bind-html-with-trust">
	           <td>ng-bind-html</td>
	           <td>Bypass $sanitize by explicitly trusting the dangerous value</td>
	           <td>
	           <pre>&lt;div ng-bind-html="deliberatelyTrustDangerousSnippet()"&gt;
	&lt;/div&gt;</pre>
	           </td>
	           <td><div ng-bind-html="deliberatelyTrustDangerousSnippet()"></div></td>
	         </tr>
	         <tr id="bind-default">
	           <td>ng-bind</td>
	           <td>Automatically escapes</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br/>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	       </div>
	   </file>
	   <file name="protractor.js" type="protractor">
	     it('should sanitize the html snippet by default', function() {
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
	     });

	     it('should inline raw snippet if bound to a trusted value', function() {
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).
	         toBe("<p style=\"color:blue\">an html\n" +
	              "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
	              "snippet</p>");
	     });

	     it('should escape snippet without any filter', function() {
	       expect(element(by.css('#bind-default div')).getInnerHtml()).
	         toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
	              "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
	              "snippet&lt;/p&gt;");
	     });

	     it('should update', function() {
	       element(by.model('snippet')).clear();
	       element(by.model('snippet')).sendKeys('new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-html-with-sanitize div')).getInnerHtml()).
	         toBe('new <b>text</b>');
	       expect(element(by.css('#bind-html-with-trust div')).getInnerHtml()).toBe(
	         'new <b onclick="alert(1)">text</b>');
	       expect(element(by.css('#bind-default div')).getInnerHtml()).toBe(
	         "new &lt;b onclick=\"alert(1)\"&gt;text&lt;/b&gt;");
	     });
	   </file>
	   </example>
	 */
	function $SanitizeProvider() {
	  this.$get = ['$$sanitizeUri', function($$sanitizeUri) {
	    return function(html) {
	      var buf = [];
	      htmlParser(html, htmlSanitizeWriter(buf, function(uri, isImage) {
	        return !/^unsafe/.test($$sanitizeUri(uri, isImage));
	      }));
	      return buf.join('');
	    };
	  }];
	}

	function sanitizeText(chars) {
	  var buf = [];
	  var writer = htmlSanitizeWriter(buf, angular.noop);
	  writer.chars(chars);
	  return buf.join('');
	}


	// Regular Expressions for parsing tags and attributes
	var START_TAG_REGEXP =
	       /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
	  END_TAG_REGEXP = /^<\/\s*([\w:-]+)[^>]*>/,
	  ATTR_REGEXP = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
	  BEGIN_TAG_REGEXP = /^</,
	  BEGING_END_TAGE_REGEXP = /^<\//,
	  COMMENT_REGEXP = /<!--(.*?)-->/g,
	  DOCTYPE_REGEXP = /<!DOCTYPE([^>]*?)>/i,
	  CDATA_REGEXP = /<!\[CDATA\[(.*?)]]>/g,
	  SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
	  // Match everything outside of normal chars and " (quote character)
	  NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;


	// Good source of info about elements and attributes
	// http://dev.w3.org/html5/spec/Overview.html#semantics
	// http://simon.html5.org/html-elements

	// Safe Void Elements - HTML5
	// http://dev.w3.org/html5/spec/Overview.html#void-elements
	var voidElements = makeMap("area,br,col,hr,img,wbr");

	// Elements that you can, intentionally, leave open (and which close themselves)
	// http://dev.w3.org/html5/spec/Overview.html#optional-tags
	var optionalEndTagBlockElements = makeMap("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
	    optionalEndTagInlineElements = makeMap("rp,rt"),
	    optionalEndTagElements = angular.extend({},
	                                            optionalEndTagInlineElements,
	                                            optionalEndTagBlockElements);

	// Safe Block Elements - HTML5
	var blockElements = angular.extend({}, optionalEndTagBlockElements, makeMap("address,article," +
	        "aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5," +
	        "h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul"));

	// Inline Elements - HTML5
	var inlineElements = angular.extend({}, optionalEndTagInlineElements, makeMap("a,abbr,acronym,b," +
	        "bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s," +
	        "samp,small,span,strike,strong,sub,sup,time,tt,u,var"));

	// SVG Elements
	// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Elements
	var svgElements = makeMap("animate,animateColor,animateMotion,animateTransform,circle,defs," +
	        "desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient," +
	        "line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set," +
	        "stop,svg,switch,text,title,tspan,use");

	// Special Elements (can contain anything)
	var specialElements = makeMap("script,style");

	var validElements = angular.extend({},
	                                   voidElements,
	                                   blockElements,
	                                   inlineElements,
	                                   optionalEndTagElements,
	                                   svgElements);

	//Attributes that have href and hence need to be sanitized
	var uriAttrs = makeMap("background,cite,href,longdesc,src,usemap,xlink:href");

	var htmlAttrs = makeMap('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' +
	    'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' +
	    'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' +
	    'scope,scrolling,shape,size,span,start,summary,target,title,type,' +
	    'valign,value,vspace,width');

	// SVG attributes (without "id" and "name" attributes)
	// https://wiki.whatwg.org/wiki/Sanitization_rules#svg_Attributes
	var svgAttrs = makeMap('accent-height,accumulate,additive,alphabetic,arabic-form,ascent,' +
	    'attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,' +
	    'color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,' +
	    'font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,' +
	    'gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,' +
	    'keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,' +
	    'markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,' +
	    'overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,' +
	    'repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,' +
	    'stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,' +
	    'stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,' +
	    'stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,' +
	    'underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,' +
	    'viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,' +
	    'xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,' +
	    'zoomAndPan');

	var validAttrs = angular.extend({},
	                                uriAttrs,
	                                svgAttrs,
	                                htmlAttrs);

	function makeMap(str) {
	  var obj = {}, items = str.split(','), i;
	  for (i = 0; i < items.length; i++) obj[items[i]] = true;
	  return obj;
	}


	/**
	 * @example
	 * htmlParser(htmlString, {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * });
	 *
	 * @param {string} html string
	 * @param {object} handler
	 */
	function htmlParser(html, handler) {
	  if (typeof html !== 'string') {
	    if (html === null || typeof html === 'undefined') {
	      html = '';
	    } else {
	      html = '' + html;
	    }
	  }
	  var index, chars, match, stack = [], last = html, text;
	  stack.last = function() { return stack[stack.length - 1]; };

	  while (html) {
	    text = '';
	    chars = true;

	    // Make sure we're not in a script or style element
	    if (!stack.last() || !specialElements[stack.last()]) {

	      // Comment
	      if (html.indexOf("<!--") === 0) {
	        // comments containing -- are not allowed unless they terminate the comment
	        index = html.indexOf("--", 4);

	        if (index >= 0 && html.lastIndexOf("-->", index) === index) {
	          if (handler.comment) handler.comment(html.substring(4, index));
	          html = html.substring(index + 3);
	          chars = false;
	        }
	      // DOCTYPE
	      } else if (DOCTYPE_REGEXP.test(html)) {
	        match = html.match(DOCTYPE_REGEXP);

	        if (match) {
	          html = html.replace(match[0], '');
	          chars = false;
	        }
	      // end tag
	      } else if (BEGING_END_TAGE_REGEXP.test(html)) {
	        match = html.match(END_TAG_REGEXP);

	        if (match) {
	          html = html.substring(match[0].length);
	          match[0].replace(END_TAG_REGEXP, parseEndTag);
	          chars = false;
	        }

	      // start tag
	      } else if (BEGIN_TAG_REGEXP.test(html)) {
	        match = html.match(START_TAG_REGEXP);

	        if (match) {
	          // We only have a valid start-tag if there is a '>'.
	          if (match[4]) {
	            html = html.substring(match[0].length);
	            match[0].replace(START_TAG_REGEXP, parseStartTag);
	          }
	          chars = false;
	        } else {
	          // no ending tag found --- this piece should be encoded as an entity.
	          text += '<';
	          html = html.substring(1);
	        }
	      }

	      if (chars) {
	        index = html.indexOf("<");

	        text += index < 0 ? html : html.substring(0, index);
	        html = index < 0 ? "" : html.substring(index);

	        if (handler.chars) handler.chars(decodeEntities(text));
	      }

	    } else {
	      // IE versions 9 and 10 do not understand the regex '[^]', so using a workaround with [\W\w].
	      html = html.replace(new RegExp("([\\W\\w]*)<\\s*\\/\\s*" + stack.last() + "[^>]*>", 'i'),
	        function(all, text) {
	          text = text.replace(COMMENT_REGEXP, "$1").replace(CDATA_REGEXP, "$1");

	          if (handler.chars) handler.chars(decodeEntities(text));

	          return "";
	      });

	      parseEndTag("", stack.last());
	    }

	    if (html == last) {
	      throw $sanitizeMinErr('badparse', "The sanitizer was unable to parse the following block " +
	                                        "of html: {0}", html);
	    }
	    last = html;
	  }

	  // Clean up any remaining tags
	  parseEndTag();

	  function parseStartTag(tag, tagName, rest, unary) {
	    tagName = angular.lowercase(tagName);
	    if (blockElements[tagName]) {
	      while (stack.last() && inlineElements[stack.last()]) {
	        parseEndTag("", stack.last());
	      }
	    }

	    if (optionalEndTagElements[tagName] && stack.last() == tagName) {
	      parseEndTag("", tagName);
	    }

	    unary = voidElements[tagName] || !!unary;

	    if (!unary)
	      stack.push(tagName);

	    var attrs = {};

	    rest.replace(ATTR_REGEXP,
	      function(match, name, doubleQuotedValue, singleQuotedValue, unquotedValue) {
	        var value = doubleQuotedValue
	          || singleQuotedValue
	          || unquotedValue
	          || '';

	        attrs[name] = decodeEntities(value);
	    });
	    if (handler.start) handler.start(tagName, attrs, unary);
	  }

	  function parseEndTag(tag, tagName) {
	    var pos = 0, i;
	    tagName = angular.lowercase(tagName);
	    if (tagName)
	      // Find the closest opened tag of the same type
	      for (pos = stack.length - 1; pos >= 0; pos--)
	        if (stack[pos] == tagName)
	          break;

	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (i = stack.length - 1; i >= pos; i--)
	        if (handler.end) handler.end(stack[i]);

	      // Remove the open elements from the stack
	      stack.length = pos;
	    }
	  }
	}

	var hiddenPre=document.createElement("pre");
	/**
	 * decodes all entities into regular string
	 * @param value
	 * @returns {string} A string with decoded entities.
	 */
	function decodeEntities(value) {
	  if (!value) { return ''; }

	  hiddenPre.innerHTML = value.replace(/</g,"&lt;");
	  // innerText depends on styling as it doesn't display hidden elements.
	  // Therefore, it's better to use textContent not to cause unnecessary reflows.
	  return hiddenPre.textContent;
	}

	/**
	 * Escapes all potentially dangerous characters, so that the
	 * resulting string can be safely inserted into attribute or
	 * element text.
	 * @param value
	 * @returns {string} escaped text
	 */
	function encodeEntities(value) {
	  return value.
	    replace(/&/g, '&amp;').
	    replace(SURROGATE_PAIR_REGEXP, function(value) {
	      var hi = value.charCodeAt(0);
	      var low = value.charCodeAt(1);
	      return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
	    }).
	    replace(NON_ALPHANUMERIC_REGEXP, function(value) {
	      return '&#' + value.charCodeAt(0) + ';';
	    }).
	    replace(/</g, '&lt;').
	    replace(/>/g, '&gt;');
	}

	/**
	 * create an HTML/XML writer which writes to buffer
	 * @param {Array} buf use buf.jain('') to get out sanitized html string
	 * @returns {object} in the form of {
	 *     start: function(tag, attrs, unary) {},
	 *     end: function(tag) {},
	 *     chars: function(text) {},
	 *     comment: function(text) {}
	 * }
	 */
	function htmlSanitizeWriter(buf, uriValidator) {
	  var ignore = false;
	  var out = angular.bind(buf, buf.push);
	  return {
	    start: function(tag, attrs, unary) {
	      tag = angular.lowercase(tag);
	      if (!ignore && specialElements[tag]) {
	        ignore = tag;
	      }
	      if (!ignore && validElements[tag] === true) {
	        out('<');
	        out(tag);
	        angular.forEach(attrs, function(value, key) {
	          var lkey=angular.lowercase(key);
	          var isImage = (tag === 'img' && lkey === 'src') || (lkey === 'background');
	          if (validAttrs[lkey] === true &&
	            (uriAttrs[lkey] !== true || uriValidator(value, isImage))) {
	            out(' ');
	            out(key);
	            out('="');
	            out(encodeEntities(value));
	            out('"');
	          }
	        });
	        out(unary ? '/>' : '>');
	      }
	    },
	    end: function(tag) {
	        tag = angular.lowercase(tag);
	        if (!ignore && validElements[tag] === true) {
	          out('</');
	          out(tag);
	          out('>');
	        }
	        if (tag == ignore) {
	          ignore = false;
	        }
	      },
	    chars: function(chars) {
	        if (!ignore) {
	          out(encodeEntities(chars));
	        }
	      }
	  };
	}


	// define ngSanitize module and register $sanitize service
	angular.module('ngSanitize', []).provider('$sanitize', $SanitizeProvider);

	/* global sanitizeText: false */

	/**
	 * @ngdoc filter
	 * @name linky
	 * @kind function
	 *
	 * @description
	 * Finds links in text input and turns them into html links. Supports http/https/ftp/mailto and
	 * plain email address links.
	 *
	 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
	 *
	 * @param {string} text Input text.
	 * @param {string} target Window (_blank|_self|_parent|_top) or named frame to open links in.
	 * @returns {string} Html-linkified text.
	 *
	 * @usage
	   <span ng-bind-html="linky_expression | linky"></span>
	 *
	 * @example
	   <example module="linkyExample" deps="angular-sanitize.js">
	     <file name="index.html">
	       <script>
	         angular.module('linkyExample', ['ngSanitize'])
	           .controller('ExampleController', ['$scope', function($scope) {
	             $scope.snippet =
	               'Pretty text with some links:\n'+
	               'http://angularjs.org/,\n'+
	               'mailto:us@somewhere.org,\n'+
	               'another@somewhere.org,\n'+
	               'and one more: ftp://127.0.0.1/.';
	             $scope.snippetWithTarget = 'http://angularjs.org/';
	           }]);
	       </script>
	       <div ng-controller="ExampleController">
	       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
	       <table>
	         <tr>
	           <td>Filter</td>
	           <td>Source</td>
	           <td>Rendered</td>
	         </tr>
	         <tr id="linky-filter">
	           <td>linky filter</td>
	           <td>
	             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
	           </td>
	           <td>
	             <div ng-bind-html="snippet | linky"></div>
	           </td>
	         </tr>
	         <tr id="linky-target">
	          <td>linky target</td>
	          <td>
	            <pre>&lt;div ng-bind-html="snippetWithTarget | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
	          </td>
	          <td>
	            <div ng-bind-html="snippetWithTarget | linky:'_blank'"></div>
	          </td>
	         </tr>
	         <tr id="escaped-html">
	           <td>no filter</td>
	           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
	           <td><div ng-bind="snippet"></div></td>
	         </tr>
	       </table>
	     </file>
	     <file name="protractor.js" type="protractor">
	       it('should linkify the snippet with urls', function() {
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
	       });

	       it('should not linkify snippet without the linky filter', function() {
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
	             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
	                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
	         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
	       });

	       it('should update', function() {
	         element(by.model('snippet')).clear();
	         element(by.model('snippet')).sendKeys('new http://link.');
	         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
	             toBe('new http://link.');
	         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
	         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
	             .toBe('new http://link.');
	       });

	       it('should work with the target property', function() {
	        expect(element(by.id('linky-target')).
	            element(by.binding("snippetWithTarget | linky:'_blank'")).getText()).
	            toBe('http://angularjs.org/');
	        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
	       });
	     </file>
	   </example>
	 */
	angular.module('ngSanitize').filter('linky', ['$sanitize', function($sanitize) {
	  var LINKY_URL_REGEXP =
	        /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,
	      MAILTO_REGEXP = /^mailto:/;

	  return function(text, target) {
	    if (!text) return text;
	    var match;
	    var raw = text;
	    var html = [];
	    var url;
	    var i;
	    while ((match = raw.match(LINKY_URL_REGEXP))) {
	      // We can not end in these as they are sometimes found at the end of the sentence
	      url = match[0];
	      // if we did not match ftp/http/www/mailto then assume mailto
	      if (!match[2] && !match[4]) {
	        url = (match[3] ? 'http://' : 'mailto:') + url;
	      }
	      i = match.index;
	      addText(raw.substr(0, i));
	      addLink(url, match[0].replace(MAILTO_REGEXP, ''));
	      raw = raw.substring(i + match[0].length);
	    }
	    addText(raw);
	    return $sanitize(html.join(''));

	    function addText(text) {
	      if (!text) {
	        return;
	      }
	      html.push(sanitizeText(text));
	    }

	    function addLink(url, text) {
	      html.push('<a ');
	      if (angular.isDefined(target)) {
	        html.push('target="',
	                  target,
	                  '" ');
	      }
	      html.push('href="',
	                url.replace(/"/g, '&quot;'),
	                '">');
	      addText(text);
	      html.push('</a>');
	    }
	  };
	}]);


	})(window, window.angular);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/css-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/sass-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/app/game/game.scss", function() {
			var newContent = require("!!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/css-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/sass-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/app/game/game.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, "#answers {\n  margin-top: 40px; }\n\n.answer {\n  display: block; }\n\n.button {\n  background-color: inherit;\n  color: #DED0F2;\n  float: left;\n  min-width: 150px;\n  max-width: 450px;\n  display: block;\n  margin: 1em;\n  padding: 1em 2em;\n  border: none;\n  vertical-align: middle;\n  position: relative;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale; }\n\n.button:focus {\n  outline: none; }\n\n.button > span {\n  vertical-align: middle; }\n\n.button--ujarak {\n  -webkit-transition: border-color 0.4s, color 0.4s;\n  transition: border-color 0.4s, color 0.4s; }\n\n.button--ujarak::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #007AC3;\n  z-index: -1;\n  opacity: 0;\n  -webkit-transform: scale3d(0.7, 1, 1);\n  transform: scale3d(0.7, 1, 1);\n  -webkit-transition: -webkit-transform 0.4s, opacity 0.4s;\n  transition: transform 0.4s, opacity 0.4s;\n  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); }\n\n.button--ujarak.button--round-s::before {\n  border-radius: 2px; }\n\n.button--ujarak.button--inverted::before {\n  background: #007AC3; }\n\n.button--ujarak, .button--ujarak::before {\n  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); }\n\n.button--ujarak:hover {\n  color: #DED0F2;\n  border-color: #007AC3; }\n\n.button--ujarak.button--inverted:hover {\n  color: #007AC3;\n  border-color: #DED0F2; }\n\n.button--ujarak:hover::before {\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0); }\n\n.button--size-l {\n  font-size: 18px; }\n\n.button--border-thick {\n  border: 3px solid; }\n\n/* Right / Wrong */\n.answer-correct {\n  background-color: #0E8A1B; }\n\n.answer-wrong {\n  background-color: #901F00; }\n\n.slide.ng-enter, .slide.ng-leave {\n  -webkit-transition: 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86) all;\n  -moz-transition: 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86) all;\n  -ms-transition: 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86) all;\n  -o-transition: 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86) all;\n  transition: 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86) all; }\n\n.slide.ng-enter {\n  left: 100%; }\n\n.slide.ng-enter.ng-enter-active {\n  left: 0; }\n\n.slide.ng-leave {\n  left: 0; }\n\n.slide.ng-leave.ng-leave-active {\n  left: -100%; }\n\n#game-board {\n  margin: 0 50px 50px 50px; }\n\n.game-board-content li {\n  color: #007AC3;\n  border-color: #007AC3;\n  width: 700px;\n  font-size: 1.5em;\n  display: block;\n  padding: 0.2em 0.2em;\n  border: 3px solid;\n  background: inherit;\n  letter-spacing: 1px;\n  vertical-align: middle;\n  position: relative;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  -moz-osx-font-smoothing: grayscale; }\n.game-board-content .board-count {\n  float: left;\n  margin-left: 15px;\n  font-weight: 300; }\n.game-board-content .board-value {\n  float: right;\n  margin-right: 80px;\n  font-weight: 600; }\n.game-board-content .answered-wrong {\n  border: 1px solid #007AC3;\n  background-color: #901F00; }\n.game-board-content .animation--wayra {\n  overflow: hidden;\n  width: 245px;\n  -webkit-transition: border-color 0.3s, color 0.3s;\n  transition: border-color 0.3s, color 0.3s;\n  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); }\n.game-board-content .animation--wayra::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 150%;\n  height: 100%;\n  background: #007AC3;\n  z-index: -1;\n  -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n  transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);\n  -webkit-transform-origin: 0% 100%;\n  transform-origin: 0% 100%;\n  -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;\n  transition: transform 0.3s, opacity 0.3s, background-color 0.3s; }\n.game-board-content .animation--wayra-active {\n  color: #DED0F2;\n  border-color: #007AC3; }\n.game-board-content .animation--wayra.animation--inverted-active {\n  color: #007AC3;\n  border-color: #DED0F2; }\n.game-board-content .animation--wayra-active::before {\n  opacity: 1;\n  background-color: #007AC3;\n  -webkit-transform: rotate3d(0, 0, 1, 0deg);\n  transform: rotate3d(0, 0, 1, 0deg);\n  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);\n  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1); }\n.game-board-content .animation--wayra.animation--inverted-active::before {\n  background-color: #DED0F2; }\n\n#question-box {\n  margin: 0 50px;\n  width: 100%;\n  color: #DED0F2; }\n  #question-box .question-number {\n    font-weight: 300; }\n  #question-box .question-list {\n    font-size: 2em;\n    font-weight: 600; }\n  #question-box .question {\n    float: left;\n    clear: both; }\n\n#final-answer {\n  float: right;\n  margin-right: 150px;\n  color: #DED0F2; }\n\nbody {\n  background-image: url("+__webpack_require__(57)+");\n  background-repeat: repeat;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover; }\n\n#game {\n  margin-top: 40px;\n  padding: 40px 20px 0 40px; }\n", ""]);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var GameCtrl = function GameCtrl() {
		_classCallCheck(this, GameCtrl);
	};

	GameCtrl.$inject = [];

	module.exports = GameCtrl;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function ($stateProvider) {
		$stateProvider.state("pages.landing", {
			url: "/start",
			template: __webpack_require__(53)
		});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function ($stateProvider) {
		$stateProvider.state("pages.end", {
			url: "/end",
			//controllerAs: 'vm',
			//controller: require('./end.ctrl.js'),
			template: __webpack_require__(54)
		});
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = function ($stateProvider) {
		$stateProvider.state("pages.settings", {
			url: "/settings",
			template: __webpack_require__(55),
			controllerAs: "vm",
			controller: __webpack_require__(56)
		});
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(41);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/css-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/sass-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/app/core/layout/navbar/navbar.scss", function() {
			var newContent = require("!!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/css-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/sass-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/app/core/layout/navbar/navbar.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, ".navbar {\n  height: 60px;\n  color: white;\n  margin-bottom: 0px; }\n\n.navbar-brand {\n  font-weight: 400;\n  font-size: 2em;\n  text-align: center;\n  margin: 2px auto 0 auto;\n  vertical-align: middle; }\n", ""]);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(28)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/css-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/sass-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/app/core/layout/footer/footer.scss", function() {
			var newContent = require("!!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/css-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/node_modules/sass-loader/index.js!/Users/shmck/Desktop/_current/angularKoreaGame/app/core/layout/footer/footer.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(36)();
	exports.push([module.id, "", ""]);

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var AnswersCtrl = function AnswersCtrl(SettingsService, GameService) {
		_classCallCheck(this, AnswersCtrl);

		this.languages = SettingsService.getLanguage();
		this.Game = GameService;
		this.selectAnswer = function (index) {
			GameService.selected = index;
			GameService.isCorrect(index);
		};
	};

	AnswersCtrl.$inject = ["SettingsService", "GameService"];

	module.exports = AnswersCtrl;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<shmck-navbar></shmck-navbar>\n<section id=\"game\" class=\"row\">\n\t<div class=\"col-md-8\">\n\n\t\t<section class=\"column\">\n\t\t\t<game-question></game-question>\n\t\t\t<game-answers></game-answers>\n\t\t\t<div class=\"col-md-12\">\n\t\t\t\t<!--<ask-audience-lifeline></ask-audience-lifeline>-->\n\t\t\t\t<!--<fifty-fifty-lifeline></fifty-fifty-lifeline>-->\n\t\t\t\t<!--<phone-friend-lifeline></phone-friend-lifeline>-->\n\t\t\t</div>\n\t\t\t<final-answer></final-answer>\n\t\t</section>\n\t</div>\n\n\t<div class=\"col-md-4\">\n\t\t<game-board></game-board>\n\t</div>\n\n</section>\n\n\n"

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"overlay\"></div>\n<header class=\"hero\">\n\t<ui-view></ui-view>\n\t<shmck-footer></shmck-footer>\n</header>\n"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"navbar navbar-inverse navbar-static-top\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<!--<img class=\"navbar-logo brand\" src=\"core/assets/images/angulaire.png\"/>-->\n\t\t\t<a href=\"/\" class=\"navbar-brand\">Who Wants To Be An Angulaire?</a>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<footer>\n\t<div class=\"container-fluid text-center\">\n\t\t<p>Who Wants To Be An Angulaire? |\n\t\t\tCopyright &copy; {{::vm.copyrightDate | date:'yyyy'}} |\n\t\t\t<a href=\"https://twitter.com/Sh_McK\">@Sh_McK</a> |\n\t\t\t<a href=\"https://github.com/AngularJSKorea\">AngularJS Korea</a></p>\n\t</div>\n</footer>\n"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div id=\"game-board\">\n  <ul class=\"game-board-content\">\n    <li ng-repeat=\"point in vm.points track by $index\"\n        class=\"animation--wayra\"\n        ng-class=\"{'animation--wayra-active': vm.Game.current === vm.current($index) - 1,\n         'answered-wrong': vm.Game.trackWrong.indexOf($index + 1) !== -1}\">\n\t    <span class=\"board-count\">{{vm.current($index)}}</span>\n      <span class=\"board-value\">{{point}}</span>\n    </li>\n  </ul>\n</div>\n"

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div id=\"question-box\">\n\t<h4 class=\"question-number\">Question #{{vm.Game.current + 1}}</h4>\n\n\t<div ng-repeat=\"lang in vm.languages\" class=\"question-list\">\n\t\t<h1 class=\"question\">{{vm.Game.currentQuestion[lang]}}</h1>\n\t</div>\n</div>\n\n"

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"container col-md-12 row\" id=\"answers\">\n\t<div ng-repeat=\"answer in vm.Game.currentAnswers track by $index\"\n\t     class=\"col-md-6\">\n\t\t\t<button type=\"button\"\n\t\t\t        class=\"btn btn-block button button--ujarak button--size-l button--border-thick button--wide\"\n\t\t\t        ng-class=\"{'answer-correct': vm.Game.isSelected($index) && vm.Game.correct,\n                      'answer-wrong': vm.Game.isSelected($index) && !vm.Game.correct}\"\n\t\t\t        ng-click=\"vm.selectAnswer($index)\">\n\t\t\t\t<span ng-repeat=\"lang in vm.languages\" class=\"answer slide\">{{answer[lang]}}</span>\n\t\t\t</button>\n\t</div>\n</div>\n"

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div ng-if=\"vm.Game.submitted\" id=\"final-answer\">\n\t<div>\n\t\t<div ng-if=\"vm.Game.correct\">\n\t\t\t<button ng-click=\"vm.Game.nextQuestion()\"\n\t\t\t        class=\"button button--size-l button--border-thick button--ujarak\">\n\t\t\t\tNext Question\n\t\t\t</button>\n\t\t</div>\n\t\t<div ng-if=\"!vm.Game.correct\">\n\t\t\t<h3>Try Again!</h3>\n\t\t</div>\n\t</div>\n\n</div>\n\n\n"

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>\n\t<h1>Who Wants to be an Angulaire?</h1>\n\n\t<h3>An Intro to AngularJS</h3>\n\n\t<button class=\"btn btn-hero btn-lg\" ui-sref=\"pages.settings\">Start</button>\n\n</div>\n"

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h1>Congratulations!</h1>\n\n<h3>You got {{vm.stats()}} correct!</h3>"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div>\n  <h1>Who Wants to be an Angulaire?</h1>\n\n  <div>\n    <h3>Select a Language</h3>\n\n    <p>Selected: {{vm.language.selected.name || 'none'}}</p>\n    <ui-select ng-model=\"vm.language.selected\" theme=\"select2\" style=\"width: 300px;\">\n      <ui-select-match placeholder=\"Select a language\">{{$select.selected.name}}</ui-select-match>\n      <ui-select-choices repeat=\"lang in vm.languages | filter: $select.search\">\n        <span ng-bind-html=\"lang.name | highlight: $select.search\"></span>\n        <small ng-bind-html=\"lang.sub | highlight: $select.search\"></small>\n      </ui-select-choices>\n    </ui-select>\n\n    <br>\n    <button class=\"btn btn-hero btn-lg\" ng-click=\"vm.submit()\">Start</button>\n\n  </div>\n</div>\n"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var SettingsCtrl = (function () {
		function SettingsCtrl($state, SettingsService) {
			_classCallCheck(this, SettingsCtrl);

			this.$state = $state;
			this.settings = SettingsService;
			this.language = {};
			this.languages = [{ name: "English", sub: "영어", code: ["eng"] }, { name: "한국어", sub: "Korean", code: ["kor"] }, { name: "English & Korean", sub: "한국어 & 영어", code: ["eng", "kor"] }];
		}

		_createClass(SettingsCtrl, {
			submit: {
				value: function submit() {
					this.settings.setLanguage(this.language.selected.code);
					this.$state.go("game");
				}
			}
		});

		return SettingsCtrl;
	})();

	SettingsCtrl.$inject = ["$state", "SettingsService"];

	module.exports = SettingsCtrl;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9a30e6c6c75344e5bd217bbe9720ef3e.png"

/***/ }
/******/ ]);