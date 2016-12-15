var orm = require("../config/orm.js");

var burger = {
	showAll: function(callback){
		orm.selectAll("burgers", function(res){
			callback(res);
		});
	},

	add: function(columns, values, callback){
		orm.insertOne("burgers", columns, values, function(res){
			callback(res);
		});
	},

	update: function(colToModify, newValue, id, callback){
		orm.updateOne("burgers", colToModify, newValue, id, function(res){
			callback(res);
		})
	}

}


module.exports = burger;