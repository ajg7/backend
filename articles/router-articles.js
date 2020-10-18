const express = require('express');
const Articles = require("./model-articles");
const router = express.Router();

router.get("/", (request, response) => {
    Articles.find()
        .then(articles => {
            response.status(200).json({data: articles})
        })
        .catch(error => {
            response.status(401).json({message: error.message})
        })
})

router.get("/:id", (request, response) => {
    const { id } = request.params;
    Articles.findById(id)
        .then(article => {
            response.status(200).json(article)
        })
        .catch(error => {
            response.status(500).json({message: error.message})
        })
})

router.put("/:id", (request, response) => {
    const { id } = request.params;
    Articles.update(id, request.body)
        .then(changes => {
            if(changes) {
                console.log(changes)
                response.status(200).json({updatedArticles: response.body})
            } else {
                response.status(400).json({ message: `User with id ${id} does not exist`});
            }
        })
        .catch(error => {
            response.status(500).json({message: error.message})
        })
})


module.exports = router;