
exports.up = function(knex) {
    return knex.schema
        .createTable("users", table => {
            table.increments();
            table.string("username")
                .notNullable()
                .unique()
                .index()
            table.string("password")
                .notNullable()
            table.integer('article_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('articles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
        .createTable("articles", table => {
            table.incremets();
            table.string("title")
                .notNullable()
                .unique()
            table.string("author")
                .notNullable()
            table.string("summary")
                .unique()
            table.string("image")
            table.string("category")
                .notNullable()
            table.integer("rank")
                .notNullable()
            table.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("articles");
};
