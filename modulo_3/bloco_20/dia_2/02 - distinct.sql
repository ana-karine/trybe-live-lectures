-- Exemplos de distinct com apenas 1 coluna

SELECT store_id FROM sakila.customer;
SELECT distinct store_id FROM sakila.customer;

SELECT first_name FROM sakila.actor;
SELECT distinct first_name FROM sakila.actor;

SELECT last_name FROM sakila.actor;
SELECT distinct first_name FROM sakila.actor;


-- Exemplos de distinct com apenas 2 colunas

SELECT first_name, last_name FROM sakila.actor;
SELECT distinct first_name, last_name FROM sakila.actor;