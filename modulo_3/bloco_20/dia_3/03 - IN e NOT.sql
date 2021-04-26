-- Cláusula com vários requisitos

SELECT * FROM film
WHERE title = 'AFFAIR PREJUDICE'
OR title = 'AFRICAN EGG'
OR title = 'AGENT TRUMAN'
OR title = 'AIRPLANE SIERRA';

SELECT * FROM film
WHERE title IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- Invertendo o resultado da query anterior

SELECT * FROM film
WHERE title NOT IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- Excluindo registros do resultado

SELECT first_name,last_name FROM actor
WHERE last_name NOT IN ('PECK', 'HACKMAN');