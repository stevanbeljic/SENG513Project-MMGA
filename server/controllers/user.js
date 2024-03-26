const express = require('express');
const router = express.Router();
const databaseConnection = require('../model/model');
const mariadb = require('mariadb');

router.get('/getFriends', (req, res) => {
  const {username} = req.query;

  databaseConnection.query('SELECT id FROM users WHERE username = ?', [username], (err, results) => {
    if(err){
      console.error("Error executing user query: ", err);
      return res.status(500).send('Internal server error');
    }

    if(results.length != 1){
      return res.status(400).send('Could not uniquely identify user');
    }

    let userId = results[0].id;

    databaseConnection.query('SELECT username FROM users WHERE id IN (SELECT user2_id from friends WHERE user1_id = ? ' +
                             'UNION '+
                             'SELECT user1_id from friends WHERE user2_id = ?)', [userId, userId], (error, friendResult) => {
                              if(error){
                                console.error("Unable to perform friends query: ", error);
                                return res.status(500).json({message: 'Internal server error'});
                              }

                              return res.status(200).json(friendResult);
                             });
  });

});

router.get('/getIncomingFriendRequests', (req, res) => {
  const {username} = req.query;
  databaseConnection.query('SELECT id FROM users WHERE username = ?', [username], (err, results) => {
    if(err){
      console.error("Error executing user query: ", err);
      return res.status(500).send('Internal server error');
    }

    if(results.length != 1){
      return res.status(400).send('Could not uniquely identify user');
    }

    let userId = results[0].id;

    databaseConnection.query('SELECT username FROM users WHERE id IN (SELECT requestFrom FROM friendrequests WHERE requestTo = ?)', 
        [userId], (error, incomingResult) => {
          if(error){
            console.error("Error executing incoming friend request query: ", error);
            return res.status(500).send('Internal server error');
          }

          return res.status(200).json(incomingResult);
        });
  });
  
});

router.get('/getOutgoingFriendRequests', (req, res) => {
  const {username} = req.query;
  databaseConnection.query('SELECT id FROM users WHERE username = ?', [username], (err, results) => {
    if(err){
      console.error("Error executing user query: ", err);
      return res.status(500).send('Internal server error');
    }

    if(results.length != 1){
      return res.status(400).send('Could not uniquely identify user');
    }

    let userId = results[0].id;

    databaseConnection.query('SELECT username FROM users WHERE id IN (SELECT requestTo FROM friendrequests WHERE requestFrom = ?)', 
        [userId], (error, outgoingResult) => {
          if(error){
            console.error("Error executing incoming friend request query: ", error);
            return res.status(500).send('Internal server error');
          }

          console.log(outgoingResult);
          return res.status(200).json(outgoingResult);
        });
  });
});

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