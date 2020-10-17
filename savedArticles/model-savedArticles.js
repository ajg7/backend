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

function add(newArticle) {
    return db("savedArticles")
            .insert(newArticle)
            .then(ids => {
                const id = ids[0];
                return findById(id)
            })
}

function remove(id) {
    return db("savedArticles").where({ id }).del();
}