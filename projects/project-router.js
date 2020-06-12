const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project list' });
        });
});


router.post('/', (req, res) => {
    const data = req.body;

    Projects.addProject(data)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add new project' });
        });
});

module.exports = router;