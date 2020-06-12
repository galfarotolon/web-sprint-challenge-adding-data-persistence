
const db = require('../data/db-config.js');


module.exports = {
    getProjects,
    addProject,
    getProjectById,
    getResources,

}


function getProjects() {
    return db('projects');
}


function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        .then(ids => ({ id: ids[0] }));
}



function getProjectById(id) {
    return db('projects').where({ id }).first();
}

////////////////////STRETCH

function getResources(id) {

    return db('projects')
        .join('resources', 'resources.project_id', 'projects.id')
        .where('projects.id', id)
        .select('projects.name as ProjectName', 'resources.name as Resources_for_project')



}

