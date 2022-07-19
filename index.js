// Setting up Express
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

//Setting up different Routers
const customerRouter = require('./routes/customer');
const filmsNotReturnedRouter = require('./routes/films-not-returned');
const topRentalsByStoreRouter = require('./routes/top-rentals-by-store');
const filmsRouter = require('./routes/films');

app.listen(PORT, () => {
    console.log(`Simple app running on Port ${PORT}`);
});

// Different Routes

// Home Page
app.get('/', async (req, res) => {
    res.render('index');
})

// Movies rented by Customer
app.use('/customer', customerRouter);

//Library of Films
app.use('/films', filmsRouter);
app.use('/customer/films', filmsRouter);

// Find Films thare are rented / Not Returned
app.use('/films-not-returned', filmsNotReturnedRouter);

// Top ten grossing rentalsl by each store
app.use('/top-rentals-by-store', topRentalsByStoreRouter);

// 404 page when no matches found
app.use((req, res) => {
    res.status(404).render('404');
})
