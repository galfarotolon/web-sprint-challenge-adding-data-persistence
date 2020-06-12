
exports.up = function (knex) {

    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments();

            tbl.string("name", 128).notNullable().index();
            tbl.string("description", 255);
            tbl.boolean("completed").defaultTo(false);
            tbl.integer("resource_id").unsigned().references("resources.id").onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })


        .createTable("resources", tbl => {
            tbl.increments();

            tbl.string("name", 128).notNullable().unique();
            tbl.string("description", 255);
            tbl.integer("project_id").unsigned().references("projects.id").onDelete("RESTRICT")
                .onUpdate("CASCADE");

        })


        .createTable("tasks", tbl => {
            tbl.increments();

            tbl.string("description", 255).notNullable();
            tbl.integer("project_id").notNullable().unsigned().references("project.id").onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl.string("notes", 255)
            tbl.boolean("completed").defaultTo(false);


        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};