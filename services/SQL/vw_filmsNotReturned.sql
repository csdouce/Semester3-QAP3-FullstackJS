 SELECT rental.rental_date,
    rental.return_date,
    (customer.first_name::text || ' '::text) || customer.last_name::text AS full_name,
    customer.email,
    film.title,
    film.film_id,
    inventory.store_id,
    (address.address::text || ', '::text) || city.city::text AS store_address
   FROM rental
     JOIN customer USING (customer_id)
     JOIN inventory USING (inventory_id)
     JOIN film USING (film_id)
     JOIN store ON inventory.store_id = store.store_id
     JOIN address ON store.address_id = address.address_id
     JOIN city ON address.city_id = city.city_id
  WHERE rental.return_date IS NULL
  ORDER BY address.address;