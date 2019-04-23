const express = require('express');
const app = express();
const db = require('./config/db');
const consign = require('consign');

consign()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api')
  .then('./config/routes.js')
  .into(app);

app.db = db;

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('server running...'));