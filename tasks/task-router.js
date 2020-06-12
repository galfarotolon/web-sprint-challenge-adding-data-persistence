const express = require('express');

const Tasks = require('./task-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then(tasks => {
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get task list' });
        });
});


router.post('/', (req, res) => {
    const data = req.body;

    Tasks.addTask(data)
        .then(newTask => {
            res.status(201).json(newTask);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add new task' });
        });
});

module.exports = router;
