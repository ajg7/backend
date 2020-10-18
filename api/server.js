const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//Routers
const ArticleRouter = require("../articles/router-articles");
const UserRouter = require ("../users/router-auth");
const SavedArticleRouter = require("../savedArticles/router-savedArticles");

//Middleware
const authenticate = require("../users/middleware-auth");
const logger = (request, response, next) => {
    console.log(`[${new Date().toISOString()}] ${request.method} to ${request.url} ${request.get("Origin")}`)
    next();
}


const server = express();
server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger)
server.use("/articles", logger, ArticleRouter);
server.use("/users", logger, UserRouter);
server.use("/saved_articles", logger, authenticate, SavedArticleRouter);


server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive!"})
})

module.exports = server;