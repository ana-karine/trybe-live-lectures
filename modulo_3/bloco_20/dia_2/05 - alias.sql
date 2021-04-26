-- Adicionando um alias

SELECT COUNT(address) as Endereço FROM address;


-- Usando alias com exemplos mais avançados

SELECT COUNT(*) AS quantidade FROM address WHERE district = 'California';
SELECT district, COUNT(*) AS quantidade FROM address WHERE district = 'California';
SELECT district, COUNT(*) AS quantidade FROM address GROUP BY district;
SELECT rating, COUNT(*) AS quantidade FROM film GROUP BY rating;