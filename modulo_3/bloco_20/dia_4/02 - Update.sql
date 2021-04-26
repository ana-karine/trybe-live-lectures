-- Atualizando os dados
UPDATE actor
SET first_name = 'MARK'
WHERE actor_id = 2;

-- Outro exemplo
UPDATE actor
SET first_name = 'MURPHY'
WHERE actor_id = 3;

-- Permintindo usar UPDATE sem o WHERE
SET SQL_SAFE_UPDATES = 0;

-- Atualizando mais de uma coluna (com mais de uma cláusula)
UPDATE film
SET title = 'Missão Impossível' AND description = 'Tom Cruise manda ver!'
WHERE language_id = 1 AND rental_duration = 6;

-- Atualizando uma massa de dados
UPDATE film
SET rental_rate = rental_rate * 10
WHERE film_id IN (1, 2, 3, 4, 5, 6);
