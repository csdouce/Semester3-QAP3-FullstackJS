const express = require('express');
const router = express.Router();
const { getTopFilms, getStores } = require('../services/top-rentals-by-store.dal');

router.use(express.static('public'));

// router.get('/', async (req, res) => {

//     let store1Films = await getTopFilms('SELECT * FROM "vw_top10RentalsStore1"');
//     // res.render('top-rentals-by-store', { store1Films });

//     let store2Films = await getTopFilms('SELECT * FROM "vw_top10RentalsStore2"');

//     res.render('top-rentals-by-store', { store1Films, store2Films });

//     // let store2Films = await getTopFilms("vw_top10RentalsStore2");
//     // res.render('top-rentals-by-store', { store2Films });
// });

router.get('/', async (req, res) => {
    let stores = await getStores()

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