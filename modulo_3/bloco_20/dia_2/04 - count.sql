SELECT COUNT(*) FROM address;
SELECT COUNT(address) FROM address;
SELECT COUNT(address2) FROM address;


-- A quantidade de cidades únicas cadastradas na tabela address

SELECT COUNT(city_id) FROM address;
SELECT COUNT(DISTINCT city_id) FROM address;


-- Encontrar a quantidade de cidades e quantidade de distritos cadastrados (usando duas colunas)

SELECT COUNT(city_id), COUNT(district) FROM address;
SELECT COUNT(city_id), COUNT(address2) FROM address;