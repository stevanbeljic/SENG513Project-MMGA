const express = require('express');
const router = express.Router();
const databaseConnection = require('../model/model');

router.post('/', (req, res) => {
    console.log('in edit profile function')
    res.status(201).send("got your message loud and clear");
});

module.exports = router;