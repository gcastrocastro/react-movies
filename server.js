// require dependencies
const express = require('express');
const path = require('path'); // pkg from node.js , allows for building dynamic paths
const favicon = require('serve-favicon');
const logger = require('morgan');

//initialize express app
const app = express();

// configure settings
require('dotenv').config();

//mount middleware
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')))

//catch-all route -- used to always serve index.html
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// tell app to listen
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`Express app is running on port: ${port}`);
})