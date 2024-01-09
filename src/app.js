require('dotenv').config();

const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

// init midlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init db
require('./databases/init.mongodb');
const { checkOverload } = require('./helpers/check.connect');
checkOverload();

// init routers
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello, World!',
    });
});

// handling error

module.exports = app;
