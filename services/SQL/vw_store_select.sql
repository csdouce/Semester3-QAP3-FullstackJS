 SELECT store.store_id,
    address.address,
    city.city,
    address.district,
    country.country
   FROM store
     JOIN address USING (address_id)
     JOIN city USING (city_id)
     JOIN country USING (country_id)
  ORDER BY country.country;