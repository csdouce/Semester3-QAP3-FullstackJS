const dal = require('../routes/db.js');

// Get films rented in the last 12 months
var getFilmsNotReturned = () => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM "vw_filmsNotReturned" ';
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
    getFilmsNotReturned
}