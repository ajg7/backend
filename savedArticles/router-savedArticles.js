const router = require("express").Router();
const SavedArticles = require("./model-savedArticles")

router.get("/", (request, response) => {
    SavedArticles.find()
        .then(savedArticles => {
            response.status(200).json({ data: savedArticles })
        })
        .catch(error => {
            response.status(400).json({ message: error.message })
        })
})

router.post("/", (request, response) => {
    SavedArticles.add()
        .then(articleToSave => {
            response.status(201).json({ data: articleToSave })
        })
        .catch(error => {
            response.status(500).json({ message: error.message })
        })
})

router.delete("/id", (request, response) => {
    const { id } = request.body;
    SavedArticles.remove(id)
        .then(savedArticleToBeDel => {
            if (savedArticleToBeDel) {
                response.json({ removed: savedArticleToBeDel });
            } else {
                response.status(404).json({ message: 'Could not find scheme with given id' });
            }
        })
        .catch(error => {
            response.status(500).json({ message: 'Failed to delete scheme' });
        });
})



module.exports = router;