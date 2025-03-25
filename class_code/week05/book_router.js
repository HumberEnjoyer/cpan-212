import express from 'express';
import Book from './book.js';


const router = express.Router();

//fetch all
router.get('/', (req, res) => {
    Book.find().then((results) => {
        res.json(results);
    });
});

// fetch by id
router.get('/:id', (req, res) => {
    Book.findById(req.params.id).then((results) => {
        res.json(results);
    });
});

//search
router.get('/search', (req, res) => {
    const filters = {};

    if(req.query.title) {
        filters.title = req.query.title;
    }
    if(req.query.pages) {
        let pages = parseInt(req.query.pages);
        if(req.query.logicaloperators) {
            switch(req.query.logicalOperators) {
                case gte:
                    filters.pages = { $gte: pages };
                    break;
                case 'lt':
                    filters.pages = { $lt: pages };
                    break;
                case 'eq':
                    filters.pages = pages;
                    break;
                default:
                    filters.pages = pages;
            }
        filters.pages = 0;
    }
    Book.find(filters).then((results) => {
        res.json(results);
    });
}});

//update
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id).then(() => {
        res.json({message: 'Book updated'});
    })
})

router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => {
        res.json({message: 'delete'});
    })
})


router.post('/save', (req, res) => {
    const {title, author, publisher, pages, releaseDate, ISBN} = req.body;
    let newBook = new Book({
        title: title,
        author: author,
        publisher: publisher,
        pages: 500,
        releaseDate: releaseDate,
        ISBN: ISBN
    });
    newBook.save().then(() => {
        res.json({message: 'Book saved'});
    });
});

export default router;