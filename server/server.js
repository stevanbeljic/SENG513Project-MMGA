// packages
const express = require("express");
const mariadb = require("mariadb");
const fs = require("fs");
const cors = require("cors");
require('dotenv').config();
// controllers

const userController = require("./controllers/user");
const gameController = require("./controllers/game");

// Run the server
const app = express();
const PORT = process.env.PORT || 7003;

// Middleware
app.use(express.json()); // This line adds JSON parsing middleware
app.use(cors());
// Routes
app.use("/user", userController);
app.use("/game", gameController);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});