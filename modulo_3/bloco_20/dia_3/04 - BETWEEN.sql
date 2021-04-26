-- Filtrando por intervalos

-- Números inteiros

SELECT title, length FROM film
WHERE length BETWEEN 50 and 130
ORDER BY length;

-- Strings

SELECT * FROM actor
WHERE first_name BETWEEN 'BELA' AND 'DUSTIN'
ORDER BY first_name;

-- Datas

SELECT * FROM rental
WHERE return_date BETWEEN '2005-05-27' AND '2005-06-03'