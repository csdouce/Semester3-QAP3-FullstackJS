const express = require('express');
const router = express.Router();
const { getTopFilms } = require('../services/top-rentals-by-store.dal');

router.use(express.static('public'));

router.get('/', async (req, res) => {

    let store1Films = await getTopFilms('SELECT * FROM "vw_top10RentalsStore1"');
    // res.render('top-rentals-by-store', { store1Films });

    let store2Films = await getTopFilms('SELECT * FROM "vw_top10RentalsStore2"');

    res.render('top-rentals-by-store', { store1Films, store2Films });

    // let store2Films = await getTopFilms("vw_top10RentalsStore2");
    // res.render('top-rentals-by-store', { store2Films });
});
module.exports = router