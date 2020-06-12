exports.seed = function (knex) {
  // only insert, cleanup.js is in charge of truncating the tables
  // trucating means deleting all records and resetting the primary key
  return knex("tasks").insert([
    { description: "Will buy this amazing super fast computer", project_id: 1, notes: "Check specs to see if software is compatible", completed: true },
    { description: "Look for amazing API", project_id: 1, notes: "scan the web for a cool API for this new app", completed: false },
    { description: "Research more backend info", project_id: 2, notes: "Become a backend master", completed: false },
    { description: "Watch many movies so I can add to Movie app", project_id: 3, notes: "Focus on Horror Genre", completed: false }
  ]);
};
