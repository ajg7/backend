module.exports = {
    find,
    findById,
    // add,
    // update,
    // remove
}

const db = require("../database/config");

function find() {
    return db("articles");
}

function findById(id) {
    return db("articles").where({id}).first();
}
