const express = require('express');
const router = express.Router();
const { getTopFilms, getStoresTopGrossFilms } = require('../services/top-rentals-by-store.dal');

router.use(express.static('public'));

router.get('/', async (req, res) => {
    let stores = await getStoresTopGrossFilms()

    if (stores.length === 0) {
        res.render('norecord');
    } else {
        res.render('top-rentals-store-select', { stores });
    }
});

router.get('/:id', async (req, res) => {
  
    const store = await getTopFilms(req.params.id);

    if (store.length === 0) {
        res.render('norecord');
    } else {
        res.render('top-rentals-by-store.ejs', {store})
    }
})


module.exports = router