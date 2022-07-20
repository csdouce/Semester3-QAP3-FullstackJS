 SELECT inventory.store_id,
    inventory.film_id,
    film.title,
    sum(film.rental_rate) AS rental_dollars,
    (address.address::text || ', '::text) || city.city::text AS store_address
   FROM inventory
     JOIN film USING (film_id)
     JOIN store USING (store_id)
     JOIN address USING (address_id)
     JOIN city USING (city_id)
  GROUP BY inventory.film_id, film.title, address.address, city.city, inventory.store_id
  ORDER BY (sum(film.rental_rate)) DESC;