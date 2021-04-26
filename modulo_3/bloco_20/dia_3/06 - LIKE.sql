-- Filtrando por parte do valor

SELECT * FROM customer
WHERE first_name LIKE '%FER%';

-- Outras variações

-- nomes que contem 'rey'
SELECT * FROM actor WHERE first_name LIKE '%rey%';
-- nomes finalizados com 'dra'
SELECT first_name FROM actor WHERE first_name LIKE '%dra';
-- nomes iniciando com 'jun'
SELECT first_name FROM actor WHERE first_name LIKE 'jun%';
-- Nomes que iniciam com 'J' e terminar com 'E'
SELECT * FROM actor WHERE first_name LIKE 'J%E';
-- Nomes que iniciam com RA a partir da segunda letra
SELECT * FROM actor WHERE first_name LIKE '_RA%';
-- Nomes que iniciam com ME a partir da terceira letra
SELECT first_name FROM actor WHERE first_name LIKE '__ME%';
-- Nomes com no mínimo 3 caracteres
SELECT first_name FROM actor WHERE first_name LIKE '___';
-- Nomes com 3 caracteres que iniciam com B
SELECT first_name FROM actor WHERE first_name LIKE 'B__';