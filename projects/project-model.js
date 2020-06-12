
const db = require('../data/db-config.js');


module.exports = {
    getProjects,
    addProject,

}


function getProjects() {
    return db('projects');
}


function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(ids => ({ id: ids[0] }));
}
