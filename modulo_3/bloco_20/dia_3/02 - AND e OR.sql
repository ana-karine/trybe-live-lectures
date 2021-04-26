-- Colunas: O título e também quanto tempo cada filme ficou alugado
-- Condição: filmes que ficaram alugados por exatamente 6 dias

SELECT title, rental_duration
FROM film
WHERE rental_duration = 6;

-- Mas além das condições acima, precisemos filtrar somente pelo filmes com classificação R

SELECT title, rental_duration, rating
FROM film
WHERE rental_duration = 6 and rating = 'R';

-- Além da classificação R, vamos adicionar também a classificação PG-13

SELECT title, rental_duration, rating from film
WHERE rental_duration = 6
AND rating = 'PG-13' OR rating = 'R';

SELECT title, rental_duration, rating from film
WHERE rental_duration = 6
AND (rating = 'PG-13' OR rating = 'R');