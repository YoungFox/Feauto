var $ = require('./lib/jquery.js');
require("../css/style.css");
var headerIns = false;
$(window).on('click',function (){
	require.ensure('./components/header/header.js',function (){
		var header = require('./components/header/header.js');
		if(!headerIns){
			headerIns = new header();
			headerIns.init();
		}
	});
})
var dot = require('./lib/doT.js');
console.log(dot);

