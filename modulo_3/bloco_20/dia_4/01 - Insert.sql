-- Usando o insert
INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Sabrina', 'Gomez');

-- Tentando fazer o mesmo insert, mas usando uma coluna que tem auto-incremento
INSERT INTO sakila.actor (actor_id, first_name, last_name)
VALUES (id_gerado_por_select_acima, 'Sabrina', 'Gomez');

-- Inserindo vários valores simultaneamente
INSERT INTO
    sakila.actor (first_name, last_name)
VALUES
    ('Robbins', 'Ferris'),
    ('Tim', 'Souza');

-- Usando o IGNORE para evitar os erros
INSERT IGNORE INTO
    sakila.actor (first_name, last_name)
VALUES
    ('Robbins', 'Ferris'), -- não será inserido, já existe no banco
    ('Tim', 'Souza'), -- não será inserido, já existe no banco
    ('Charles', 'Carson'); -- será inserido

-- Copiando dados de uma tabela para outra
INSERT INTO
    sakila.actor (first_name, last_name)
SELECT
    first_name, last_name FROM sakila.customer LIMIT 5;

-- Verificando se deu certo
SELECT * FROM sakila.actor ORDER BY actor_id DESC;