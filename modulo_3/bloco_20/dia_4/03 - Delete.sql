-- Estrutura padrão para deletar um registro
DELETE FROM sakila.film_text WHERE title = 'ALASKA PHANTOM';

-- Permintindo usar DELETE sem o WHERE
SET SQL_SAFE_UPDATES = 0;

-- Restrições

/* Você está tentando excluir um registro que está sendo usada como chave estrangeira em outra tabela.
ON DELETE NO ACTION ou ON DELETE RESTRICT não permitirá que essa ação seja executada */
ON DELETE RESTRICT | NO ACTION

/* Você está tentando excluir um registro que está sendo usada como chave estrangeira em outra tabela.
ON DELETE SET NULL permitirá que essa ação seja executada e irá setar como NULL na tabela usuário a referência para o id da empresa que existia anteriormente.*/
ON DELETE SET NULL

/* Você está tentando excluir uma empresa que está sendo usada no registro de um usuário.
ON DELETE CASCADE permite que você faça isso e ainda exclui todas as referências dos registros que usam a empresa_id que foi excluída. */
ON DELETE CASCADE