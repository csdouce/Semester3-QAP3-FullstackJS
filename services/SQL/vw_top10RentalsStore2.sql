 SELECT inventory.film_id,
    film.title,
    sum(film.rental_rate) AS rental_dollars,
    (address.address::text || ', '::text) || city.city::text AS store_address
   FROM inventory
     JOIN film USING (film_id)
     JOIN store USING (store_id)
     JOIN address USING (address_id)
     JOIN city USING (city_id)
  WHERE inventory.store_id = 2
  GROUP BY inventory.film_id, film.title, address.address, city.city
  ORDER BY (sum(film.rental_rate)) DESC
 LIMIT 10;