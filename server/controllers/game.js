const express = require('express');
const router = express.Router();
const databaseConnection = require('../model/model');

module.exports = router;

router.get('/getAllGames', (req, res) => {
    databaseConnection.query('SELECT * FROM game',(err, results) => {
        if (err) {
          console.error('Error executing query:', err);
          return res.status(500).send('Internal server error');
        }
        else{
            res.json(results);
        }
    })
});