const express = require('express');

//const ProjectRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
//server.use('/api/projects', ProjectRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

module.exports = server;