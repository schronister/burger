var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();


router.get("/", function(req,res){
	burger.showAll(function(data){
		console.log(data);
		res.render("index", {burgers:data})
	})
})


router.post("/burgers/create", function(req,res){
	console.log("in here.");
	burger.add(["burger_name", "devoured"], [req.body.burger_name, false], function(data){
		res.redirect("/");
	})
})

router.put("/burgers/:id", function(req,res){
	burger.update("devoured",req.body.devoured, req.params.id, function(data){
		res.redirect("/");
	})
})

module.exports = router;