const express = require('express');
const router = express.Router();
const databaseConnection = require('../model/model');
const mariadb = require('mariadb');


// GET /user/getAccount?username=myusername&password=mypassword
router.get('/getAccount', (req, res) => {
    const { username, password } = req.query;
    // Check credentials against the database

    databaseConnection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Internal server error');
      }
      
      // Check if user with provided username and password exists
      if (results.length === 0) {
        //return res.status(401).send('Unauthorized');
      }
      // If user exists and credentials are correct, you can send some data back
      res.status(201).send("User with provided username and password")
      //res.json({ message: 'User authenticated successfully', user: results[0] });
    });
      console.log('made it to the function');
  });


router.post('/createAccount', (req, res) => {
  const { username, email, password, role} = req.body;
  if (!username || !email || !password || !role) {

    return res.status(400).send('All fields are required');
  }
  console.log(username, email, password, role);
  console.log(req.body);
  // Check if the username already exists
  databaseConnection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send('Internal server error');
    }

    // If username already exists, return error
    if (results.length > 0) {
      return res.status(400).send('Username already exists');
    }

    // Insert the new user into the database
    databaseConnection.query('INSERT INTO users (role, username, password) VALUES (?, ?, ?)', [role, username, password], (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).send('Internal server error');
      }

      // User account created successfully
      res.status(201).send('User account created successfully');
    });
  });
});
module.exports = router;