 SELECT customer.customer_id,
    (customer.first_name::text || ' '::text) || customer.last_name::text AS full_name,
    rental.rental_date,
    rental.return_date,
    film.title,
    film.film_id
   FROM customer
     JOIN rental USING (customer_id)
     JOIN inventory USING (inventory_id)
     JOIN film USING (film_id)
  WHERE rental.rental_date > (CURRENT_DATE - '1 year'::interval);