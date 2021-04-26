-- Usando o ORDER BY

SELECT * FROM actor ORDER BY first_name;
SELECT * FROM customer ORDER BY customer_id;


-- Usando o ORDER BY com ASC e DESC

SELECT * FROM customer ORDER BY customer_id ASC;
SELECT * FROM customer ORDER BY customer_id DESC;

-- Usando o ORDER BY com ASC e DESC com 2 ou mais colunas

SELECT title, rental_duration FROM film ORDER BY rental_duration ASC, title DESC;