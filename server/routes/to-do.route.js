const express = require('express');
const router = express.Router();
const ToDo = require('../models/to-do');
const handleErrors = require('../utilities/error-handling')

router.get('/toDo', async (req, res) => {
    res.json(await ToDo.find());
});

router.post('/toDo', async (req, res) => {
    const toDo = new ToDo({
        title: req.body.title,
        description: req.body.description
    });

    try {
        res.json(await toDo.save())
    } catch({ errors }) {
        const errorMessages = handleErrors(errors);
        res.statusCode = 400;
        res.json({
            error: true,
            errorMessages
        });
    }
});

router.put('/toDo', async (req, res) => {
    try {
        res.json(await ToDo.updateOne(
            { _id: req.body.id },
            { $set: req.body }
            ))
    } catch ({ errors }) {
        const errorMessages = handleErrors(errors);
        res.statusCode = 400;
        res.json({
            error: true,
            errorMessages
        });
    }
});

router.delete('/toDo', async (req, res) => {
    try {
        res.json(await ToDo.remove({_id: req.body.id}))
    } catch ({ errors }) {
        const errorMessages = handleErrors(errors);
        res.statusCode = 400;
        res.json({
            error: true,
            errorMessages
        });
    }
});

module.exports = router;
