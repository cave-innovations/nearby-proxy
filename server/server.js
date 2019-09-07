const express = require('express');
const app = express();
app.use(express.static(__dirname +'/../client'));
app.listen(5000, ()=>{
  console.log('Now listening port 5000.')
})
