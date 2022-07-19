const dal = require('../routes/db.js');

const getFilms = function () {
    
    return new Promise(function (resolve, reject) {
        const sql = "SELECT * FROM vw_films";
        
        dal.query(sql, [], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    });
};

const getFilmById = function (id) {
    
    return new Promise(function (resolve, reject) {
        const sql = "SELECT * FROM vw_films WHERE film_id = $1";
        dal.query(sql, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.rows);
            }
        });
    });
}

module.exports = {
    getFilms,
    getFilmById,
}