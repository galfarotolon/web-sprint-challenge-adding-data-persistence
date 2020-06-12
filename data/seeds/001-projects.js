exports.seed = function (knex) {
  // only insert, cleanup.js is in charge of truncating the tables
  // trucating means deleting all records and resetting the primary key
  return knex("projects").insert([
    { name: "Create an Awesome App", description: "An app that will change the world", completed: true, resource_id: 1 },
    { name: "Build a backend server for a company", description: "create all endpoints and backend architecture", completed: false, resource_id: 2 },
  ]);
};
