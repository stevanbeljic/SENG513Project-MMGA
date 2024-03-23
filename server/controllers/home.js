const express = require('express');
const router = express.Router();
const databaseConnection = require('../model/model');
const fetch = require('node-fetch');

//retrieves the feed for the user
router.get('/', async (req, res) => {
  console.log('in here');
  try {
    console.log("fetching news");
    const response = await fetch('http://www.gamespot.com/api/articles/?api_key=8e0b735d55b6853d8c0b99bc69033830d7bc3409');
    const data = await response.json();
    res.json(data.results.slice(0, 4));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching data from the GameSpot API' });
  }
});

module.exports = router;