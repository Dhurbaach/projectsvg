const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db=require('./db');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
