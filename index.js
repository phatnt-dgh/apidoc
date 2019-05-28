require('dotenv').config({});
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const validator = require('express-validator');
const compression = require('compression');
const express = require('express');
const path = require('path');
const app = express();

/** Environment */
const port = process.env.PORT || 3000;

/** Middlewares */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(errorHandler());
app.use(compression());
app.use(express.static(path.join(__dirname, 'doc'), { index: '_' }));
app.get('*', (req, res) => { res.sendFile(path.join(__dirname, './doc/index.html')); });

/** Server */
app.listen(port, () => { console.log('Server listening on port ', port); });