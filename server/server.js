const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/to-do.route')
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/to-do',
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/', routes);
app.listen(3330);
