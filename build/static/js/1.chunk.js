webpackJsonp([1,4],{

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var dot = __webpack_require__(8);
	var css = __webpack_require__(19);
	var tpl = __webpack_require__(21);
	var d = __webpack_require__(22);
	// console.log($);
	
	var Header = function () {
		function Header() {
			_classCallCheck(this, Header);
	
			this.title = d.title;
		}
	
		_createClass(Header, [{
			key: 'init',
			value: function init() {
				var tplFn = dot.template(tpl);
				var html = tplFn(d);
				$('body').prepend(html);
			}
		}, {
			key: 'show',
			value: function show() {}
		}]);
	
		return Header;
	}();
	
	module.exports = Header;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./header.css", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./header.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, ".header{\n\theight: 40px;\n\tbackground: #0275d8;\n\tcolor: #fff;\n\ttext-align: center;\n\tline-height: 40px;\n}", ""]);
	
	// exports


/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var tpl = '<div class="header">{{=it.title}}</div>';
	var dot = __webpack_require__(8);
	module.exports = tpl;

/***/ },

/***/ 22:
/***/ function(module, exports) {

	'use strict';
	
	var data = {
		title: '组件 #header# 的title'
	};
	module.exports = data;

/***/ }

});
//# sourceMappingURL=../sourcemap/js/1.chunk.js.map