const express = require("express");
const path = require("node:path");
const app = express();

// Api
const ApiRoutes = require('./api/v1/src/apiRoutes');

// Middlewares
app.use(express.json());
app.use(express.static(__dirname + "/public/"));
app.use("/api/", ApiRoutes);

// ENV's
require('dotenv').config();
const FORUM_PORT = process.env.FORUM_SERVER_PORT;

// Main
app.get("/", (req, res) => {
    // Request to "/"
    res.send("Hello node").status(200);
})

// Listen to port
app.listen(FORUM_PORT, () => {
    console.log("[START]: Server running on PORT: " + FORUM_PORT);
})
