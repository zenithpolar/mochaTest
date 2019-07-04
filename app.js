const express = require('express');
const app = express();
const operations = require('./routes/operations');
const messages = require('./routes/messages');

app.use('/api', operations);
app.use('/message', messages);

exports = module.exports = app;