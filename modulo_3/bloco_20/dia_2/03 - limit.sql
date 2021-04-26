-- Usando LIMIT

SELECT * FROM country;
SELECT * FROM country LIMIT 5;


-- Usando LIMIT e OFFSET

SELECT * FROM country LIMIT 10 offset 8;
SELECT * FROM actor ORDER BY first_name LIMIT 10 offset 8;