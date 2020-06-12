const express = require('express');

const Resources = require('./resource-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project list' });
        });
});


router.post('/', (req, res) => {
    const data = req.body;

    Resources.addResource(data)
        .then(newResource => {
            res.status(201).json(newResource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add new resource' });
        });
});

module.exports = router;
