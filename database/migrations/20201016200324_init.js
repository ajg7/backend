
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
        })
        .createTable("articles", table => {
            table.incremets();
            table.string("title")
                .notNullable()
                .unique()
                .index();
            table.string("author")
                .notNullable()
            table.string("summary")
                .unique()
            table.string("image")
            table.string("category")
                .notNullable()
            table.integer("rank")
                .notNullable()
                .min(1)
                .max(5)
        })
        .createTable("savedArticles", table => {
            table.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            table.integer('article_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('articles')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("articles")
        .dropTableIfExists("savedArticles")
};
