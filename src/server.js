const express = require("express");
const path = require("node:path")
const app = express();

app.use(express.json());

require('dotenv').config()
const FORUM_PORT = process.env.FORUM_SERVER_PORT

app.get("/", (req, res) => {
    // Request to "/"
    res.send("Hello world").status(200)
})

app.listen(FORUM_PORT, () => {
    console.log("[START]: Server running on PORT: " + FORUM_PORT)
})
