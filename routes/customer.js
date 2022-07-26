const express = require('express');
const router = express.Router();
const { getFilmsRentedLastYear } = require('../services/customer.dal');

router.use(express.static('public'));

router.get('/:id', async (req, res) => {
    let films = await getFilmsRentedLastYear(req.params.id);

    if (films.length === 0) {
        res.render('norecord');
    } else {
        res.render('customer', { films });
    }
});

module.exports = router