#!/usr/bin/env node
const PORT = XXX;
const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

app.get("/",function(req,res){
	res.render('pages/home');	
});

app.get("*",function (req, res) {
  fs.readFile('./views/pages' + req.originalUrl+".ejs",
	function(err,data){
  		if(!err){
    			res.render('pages' + req.originalUrl)
  		}
  		else{
    			res.status(404);
    			res.render('pages/404')
  		}
	}
  )
});



//for hosting on my machine

app.listen(PORT, () => {
console.log('running on port ' + PORT + ' for dev...');
});
