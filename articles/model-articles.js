module.exports = {
    find,
    findById,
    update
}

const db = require("../database/config");

function find() {
    return db("articles");
}

function findById(id) {
    return db("articles").where({ id });
}

function update(id, changes) {
    return db("articles").where({id}).update(changes)
}
