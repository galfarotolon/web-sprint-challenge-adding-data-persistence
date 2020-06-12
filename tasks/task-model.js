
const db = require('../data/db-config.js');


module.exports = {
    getTasks,
    addTask

}


function getTasks() {
    //should include project name and project description

    return db('tasks')

        .join('projects', 'projects.id', 'tasks.project_id')
        .select('tasks.description as Task_Description', 'tasks.notes', 'projects.name as Project_Name', 'projects.description as Project_Description')


}


function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
        .then(ids => ({ id: ids[0] }));
}


