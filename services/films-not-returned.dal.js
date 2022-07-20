const dal = require('../routes/db.js');

// Find select store!
const getStoresFilmsNotReturned = () => {

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
var getFilmsNotReturned = (id) => {

    const sql = 'SELECT * FROM "vw_filmsNotReturned" WHERE store_id = $1';

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
    getFilmsNotReturned,
    getStoresFilmsNotReturned,
}