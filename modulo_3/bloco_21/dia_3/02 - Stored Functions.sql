DELIMITER $$
CREATE FUNCTION nome_da_function(parametro1, parametro2..., parametron)
RETURNS tipo_de_dado tipo_de_retorno
BEGIN
  query_sql
  RETURN resultado_a_ser_retornado;
END
$$ DELIMITER ;



DELIMITER $$
CREATE FUNCTION CalcularTotalVendasCadastrados()
RETURNS INT READS SQL DATA
BEGIN
  DECLARE total_de_vendas INT;
  SELECT COUNT(*)
  FROM sakila.payment INTO total_de_vendas;
  RETURN total_de_vendas;
END $$ DELIMITER ;

SELECT CalcularTotalVendasCadastrados();



DELIMITER $$
CREATE FUNCTION ObterQuantidadeVendasPorCliente(id_cliente int)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE total_de_vendas INT;
  SELECT COUNT(*)
  FROM sakila.payment
  WHERE sakila.payment.customer_id = id_cliente INTO total_de_vendas;
  RETURN total_de_vendas;
END $$ DELIMITER ;
-- Como usar:
SELECT ObterQuantidadeVendasPorCliente(3);