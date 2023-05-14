const express = require("express");
const router = express.Router();
const path = require("node:path");

router.get("/v1/", (req, res) => {
    res.send({"connection" : "alive"}).status(201);
})

module.exports = router;
