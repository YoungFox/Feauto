require("../css/style.css");

var xx = require("./content.js");
xx();
var other = require('./other');

var config1 = require("./config.js");
console.log(config1);

console.log(require('jquery'));
// 
var tom = new other('tom');
tom.sayName();