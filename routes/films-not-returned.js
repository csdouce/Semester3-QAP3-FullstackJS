const express = require('express');
const router = express.Router();
const { getFilmsNotReturned, getStoresFilmsNotReturned } = require('../services/films-not-returned.dal');

router.use(express.static('public'));

// Used for Selecting store to display films not returned for
router.get('/', async (req, res) => {
    let stores = await getStoresFilmsNotReturned();

    if (stores.length === 0) {
        res.render('norecord');
    } else {
        res.render('films-not-returned-store-select', { stores });
    }
});

// Using moments on films-not-returned.ejs page
let moment = require('moment');
const { getStores } = require('../services/top-rentals-by-store.dal');
router.get('/:id', async (req, res) => {

    let films = await getFilmsNotReturned(req.params.id);

    if (films.length === 0) {
        res.render('norecord');
    } else {
        res.render('films-not-returned', { films, moment: moment });
    }
});


module.exports = router