// packages
const express = require("express");
const mariadb = require("mariadb");
const fs = require("fs");
const cors = require("cors");
require('dotenv').config();
// controllers

const userController = require("./controllers/user");
const gameController = require("./controllers/game");
const homeController = require("./controllers/home");
const editProfileController = require("./controllers/editProfile");
const viewProfileController = require("./controllers/viewProfile");
const discussionController = require("./controllers/discussion");
// Run the server
const app = express();
const PORT = process.env.PORT || 7003;

// Middleware
app.use(express.json()); // This line adds JSON parsing middleware
app.use(cors());
app.use('/uploads', express.static('uploads')); //used to access images stored in server
// Routes
app.use("/user", userController);
app.use("/game", gameController);
app.use("/", homeController);
app.use("/editProfile", editProfileController);
app.use("/viewProfile", viewProfileController);
app.use("/discussion", discussionController)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});