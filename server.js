const express = require('express');
const draw = require('./src/index');

const PORT = 3000
const app = express()


app.use('/', function (req, res, next) {
  res.setHeader('Content-Type', 'image/png');
  
  draw().pngStream().pipe(res)
});

app.listen(PORT, () =>{
    console.log("App running on ",PORT)
})
