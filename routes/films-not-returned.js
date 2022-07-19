const express = require('express');
const router = express.Router();
const { getFilmsNotReturned } = require('../services/films-not-returned.dal');

router.use(express.static('public'));

// Using moments on films-not-returned.ejs page
let moment = require('moment');
router.get('/', async (req, res) => {
    let films = await getFilmsNotReturned();
    res.render('films-not-returned', { films, moment: moment});
});

module.exports = router