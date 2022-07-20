const express = require('express');
const router = express.Router();

router.use(express.static('public'));

const filmsDal = require('../services/films.dal');

router.get('/', async (req, res) => {
    let films = await filmsDal.getFilms();
    
    if (films.length === 0) {
        res.render('norecord');
    } else {
        res.render('films.ejs', { films });
    }
})

router.get('/:id', async (req, res) => {
    let film = await filmsDal.getFilmById(req.params.id);

    if (film.length === 0) {
        res.render('norecord');
    } else {
        res.render('film-details.ejs', { film });
    }
})

module.exports = router;