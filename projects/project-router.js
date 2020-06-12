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

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.getProjectById(id)
        .then(project => {
            if (project) {
                res.json(project);
            } else {
                res.status(404).json({ message: 'Could not find project with given id.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get projects' });
        });
});

////////////////////////////stretch

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;
    Projects.getResources(id)
        .then(project => {
            if (project.length) {
                res.json(project);
            } else {
                res.status(404).json({ message: 'Could not find resources for that project.' })
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resources' });
        });
});



module.exports = router;
