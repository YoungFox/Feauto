webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	// var $ = require('./lib/jquery.js');
	__webpack_require__(4);
	var dot = __webpack_require__(8);
	var headerIns = false;
	$(window).on('click', function () {
		__webpack_require__.e/* nsure */(1/* duplicate */, function () {
			var header = __webpack_require__(13);
			if (!headerIns) {
				headerIns = new header();
				headerIns.init();
			}
		});
	});
	var Banner = __webpack_require__(9);
	var banner = new Banner('我是banner');
	banner.ini();
	console.log('index/index');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);
//# sourceMappingURL=../../sourcemap/js/index/index.js.map