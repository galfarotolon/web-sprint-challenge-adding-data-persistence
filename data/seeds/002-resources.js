exports.seed = function (knex) {
  // only insert, cleanup.js is in charge of truncating the tables
  // trucating means deleting all records and resetting the primary key
  return knex("resources").insert([
    { name: "Computer", description: "Super fast computer", project_id: 1 },
    { name: "API", description: "World's best API", project_id: 1 },
    { name: "Movie Posters", description: "All Movie Posters", project_id: 3 },
  ]);
};
