const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const initRoutes = require('./routes/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
initRoutes(app);

http.createServer(app).listen(3000, 'localhost', ()=>{
  console.log(`listening on 3000...`)
})