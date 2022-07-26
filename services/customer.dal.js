const dal = require('../routes/db.js');

// Get films rented in the last 12 months
var getFilmsRentedLastYear = (id) => {
    return new Promise(function (resolve, reject) {
        const sql = 'SELECT * FROM "vw_last12Months" WHERE customer_id = $1';
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
    getFilmsRentedLastYear
}