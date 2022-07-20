 SELECT film.film_id,
    film.title,
    film.description,
    film.release_year,
    film.rental_rate,
    film.length,
    film.rating,
    film.rental_duration
   FROM film
  ORDER BY film.title;