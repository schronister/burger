// Import MySQL connection.
var connection = require("../config/connection.js");



// Object for all our SQL statement functions.
var orm = {
	selectAll: function(table, callback){
		var queryString = "SELECT * FROM "+ table;
		connection.query(queryString, function(err,result){
			if (err) throw err;
			console.log(result);
			callback(result);
		})

  	},
  	insertOne: function(table, columns, values, callback){
  		var queryString = "INSERT INTO "+ table + "(" + columns.toString() + ") VALUES(?,?)"
  		console.log(queryString)
  		connection.query(queryString, values, function(err, result){
  			if (err) throw err;
  			console.log(result);
  			callback(result);
  		})
  	},
  	updateOne: function(table, colToModify, newValue, id, callback){
  		var queryString = "UPDATE " + table + " SET " + colToModify + " = " + newValue + " WHERE id  = " + id;
  		console.log(queryString);
  		connection.query(queryString, function(err,result){
  			if (err) throw err;
  			console.log(result);
  			callback(result);
  		})
  	}
};

// Export the orm object for the model.
module.exports = orm;
