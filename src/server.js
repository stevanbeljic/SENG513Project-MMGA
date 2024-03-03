const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send("Make Mobile Great Again!");
});

app.listen(3000, function(){
  console.log("open on port 3000");
});