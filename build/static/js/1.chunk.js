webpackJsonp([1,2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var dot = __webpack_require__(6);
	var css = __webpack_require__(8);
	var tpl = __webpack_require__(10);
	var d = __webpack_require__(11);
	var Header= function (){
		this.title = d.title;
	}

	Header.prototype = {
		constructor: Header,
		init: function (){
			var tplFn = dot.template(tpl);
			var html = tplFn(d);
			$('body').append(html);
		},
		show: function (){

		}
	}

	module.exports = Header;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "*{\n\tmargin: 0;\n\tpadding: 0;\n}\n.header{\n\theight: 40px;\n\tbackground: #19b955;\n\tcolor: #fff;\n\ttext-align: center;\n\tline-height: 40px;\n}", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	var tpl = '<div class="header">{{=it.title}}</div>';

	module.exports = tpl;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var data = {
		title:'组件 #header# 的title'
	}
	module.exports = data;

/***/ }
]);