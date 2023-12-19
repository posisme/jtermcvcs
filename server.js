#!/usr/bin/env node

const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

app.get("*",function (req, res) {
  fs.readFile('./views/pages' + req.originalUrl+".ejs",(err,data)=>{
  if(!err){
    res.render('pages' + req.originalUrl)
  }
  else{
    res.status(404);
    res.render('pages/404')
  }
})
}



//for hosting on my machine

app.listen(3000, () => {
console.log('running on port 3000 for dev...');
});
