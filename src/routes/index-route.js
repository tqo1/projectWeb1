'use strict'

const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        title: global.PROJECT_NAME,
        version: global.PROJECT_VERSION
    });
});

// //
// Import Body parser
let bodyParser = require('body-parser');
// // Import Mongoose
// let mongoose = require('mongoose');
// // Configure bodyparser to handle post requests
// router.use(bodyParser.urlencoded({
//    extended: true
// }));
router.use(bodyParser.json());
// // Connect to Mongoose and set connection variable
// // Deprecated: mongoose.connect('mongodb://localhost/resthub');
// mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
// var db = mongoose.connection;

// //
// // Add the code below to index.js
// // Import routes
// let apiRoutes = require("./api-route-example")
// // Use Api routes in the App
// router.use('/api', apiRoutes)
module.exports = router;