const express = require('express');
const Articles = require("./model-articles");
const router = express.Router();

router.get("/", (request, response) => {
    Articles.find()
        .then(articles => {
            response.status(200).json({data: articles})
        })
        .catch(error => {
            response.status(500).json({message: error.message})
        })
})

router.get("/:id", (request, response) => {
    const { id } = request.body;
    Articles.findById(id)
        .then(article => {
            response.status(200).json(article)
        })
        .catch(error => {
            response.status(500).json({message: error.message})
        })
})