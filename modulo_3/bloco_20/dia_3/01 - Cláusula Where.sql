-- Resultado esperado: encontrar o ator Johnny Cage

-- Resultados sem filtros
SELECT * FROM actor;

-- Com apenas 1 condição WHERE ainda não será o suficiente
SELECT * FROM actor WHERE first_name = 'JOHNNY';

-- Temos que adicionar uma segunda condição neste caso
SELECT * FROM actor WHERE first_name = 'JOHNNY' AND last_name = 'CAGE';