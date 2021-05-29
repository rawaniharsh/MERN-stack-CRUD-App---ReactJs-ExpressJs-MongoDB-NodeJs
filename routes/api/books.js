const express = require('express');
const router = express.Router();

const Book = require('../../models/Books');

router.get('/test', (req, res) => res.send('book route testing!'));

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(e => res.status(404).json({ noBooksFound: "no Books found" }));
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(books => res.json(books))
        .catch(e=>res.status(404).json({noBooksFound: "no books found"}));
})


router.post('/', (req, res) => {
    Book.create(req.body)
        .then(books => res.json({msg:"Book added succesfully"}))
        .catch(e=>res.status(404).json({error: "Unable to add this book"}));
})

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(books => res.json({msg:"Book Updated succesfully"}))
        .catch(e=>res.status(404).json({error: "Unable to update this book"}));
})

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(books => res.json({msg:"Book Deleted succesfully"}))
        .catch(e=>res.status(404).json({error: "Unable to delete this book"}));
})


module.exports = router;
