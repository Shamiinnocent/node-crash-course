const express = require('express');
const fs = require('fs');
//express app
const app = express();// here we've invoked the express  function and stored it in app variable so that we 
//could be able to make an instance from it

//listen for request
app.listen(3000);




 app.get('/mine',(req,res)=>{
   res.sendFile('./oos.html',{root: __dirname}); //her we don't need to set a header because this line of code in express help us to set automatically
 });

   app.get('/about',(req,res)=>{
    res.sendFile('./dark.html',{root: __dirname});


});
 