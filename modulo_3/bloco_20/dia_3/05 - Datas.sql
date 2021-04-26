-- Pegando a data atual

SELECT now();  -- data e hora atual
SELECT curdate(); -- data atual
SELECT curtime(); -- hora atual
SELECT year(now()); -- ano atual
SELECT month(now()); -- mês atual
SELECT day(now()); -- dia atual

-- Filtrando dados de uma determinada data

SELECT * FROM rental
WHERE date(rental_date) = '2005-05-26';

-- Filtrando intervalo de datas

SELECT * FROM rental
WHERE rental_date
BETWEEN CAST('2005-05-26 00:00:00' AS datetime) AND cast('2005-05-27 23:59:59' AS datetime);