const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Routers
const ArticleRouter = require("../articles/router-articles");
const UserRouter = require ("../users/router-auth");
// const SavedArticleRouter = require("../savedArticles/router-savedArticles");

//Middleware
const authenticate = require("../users/middleware-auth");


const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/articles", authenticate, ArticleRouter);
server.use("/users", UserRouter)


server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!"})
})

module.exports = server;