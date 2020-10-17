module.exports = {
    find,
    add, 
    remove
}

const db = require("../database/config");

function find() {
    return db("savedArticles")
}

function findById(id) {
    return db("savedArticles").where({ id }).first();
}

function add(userId, articleId) {
    console.log(userId, articleId)
    return db("savedArticles")
            .insert({user_id: userId, article_id: articleId})
            .then(ids => {
                console.log(ids)
                const id = ids[0];
                return findById(id)
            })
}

function remove(id) {
    return db("savedArticles").where({ id }).del();
}