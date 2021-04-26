-- Exibindo todas as colunas

-- Selecionar todos os endereços
SELECT * FROM address;

-- Selecionar todos os filmes
SELECT * FROM film;

-- Selecionar todos atores/atrizes
SELECT * FROM actor;


-- Exibindo apenas algumas colunas

-- Selecionar todos os endereços
SELECT address, district FROM address;

-- Selecionar todos os filmes
SELECT title, description, release_year FROM film;

-- Selecionar todos atores/atrizes
SELECT actor_id, first_name, last_name FROM actor;