const express = require('express');
const router = express.Router();
const databaseConnection = require('../model/model');

module.exports = router;

router.get('/getDiscussionsByGame', (req, res) => {
    const {id} = req.query;
    databaseConnection.query('SELECT * FROM discussion WHERE game_id = ?', [id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).send('Internal server error');
          }
          else{
              res.json(result);
          } 
    });
});