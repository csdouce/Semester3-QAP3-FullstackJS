const dal = require('../routes/db.js');

// Get films rented in the last 12 months
var getTopFilms = (sql) => {
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

module.exports = {
    getTopFilms
}