const express = require('express');
const app = express();
const request = require('request');
const today = new Date();
const mm = today.getMonth() + 1;
app.use(express.static(__dirname +'/../client'));
app.listen(5000, ()=>{
  console.log('Now listening port 5000.')
})

app.get('/api/place', (req, res) => {
  request('http://localhost:3000/api/place', (err, response, body) =>{
    const data = JSON.parse(body)
    res.send(data);
  })
})

app.get('/api/todo', (req, res) => {
  request('http://localhost:3000/api/todo', (err, response, body) =>{
    const data = JSON.parse(body)
    res.send(data);
  })
})

app.get('/api/photos/:id', (req, res) => {
  const num = req.params.id;
  request(`http://localhost:3001/api/photos/${num}`, (err, response, body) =>{
    const data = JSON.parse(body)
    res.send(data);
  })
})
