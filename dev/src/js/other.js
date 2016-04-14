var config = require("./config.js");
config.a = 'other';

class People{
	constructor(name){
		this.name = name;
	}
	sayName(){
		console.log(this.name);
	}
}

module.exports = People;
