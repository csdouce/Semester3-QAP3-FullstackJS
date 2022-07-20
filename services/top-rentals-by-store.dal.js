const dal = require('../routes/db.js');

const getStoresTopGrossFilms = () => {

    const sql = "SELECT * FROM vw_store_select";
    return new Promise(function (resolve, reject) {

        dal.query(sql, [], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    });
};

// Get films rented in the last 12 months
const getTopFilms = function(id) {

    const sql = "SELECT * FROM vw_top10_rentals_by_store WHERE store_id = $1 LIMIT 10";
    // WHERE store_id = $1 LIMIT 10

    return new Promise(function (resolve, reject) {

        dal.query(sql, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    });
};

module.exports = {
    getTopFilms,
    getStoresTopGrossFilms,
}