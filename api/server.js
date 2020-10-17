const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const ArticleRouter = require("../articles/router-articles");
const UserRouter = require("../users.router-users");
const SavedArticleRouter = require("../savedArticles/router-savedArticles");

const server = express();


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/articles", ArticleRouter)


server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!"})
})

module.exports = server;