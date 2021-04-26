DELIMITER $$ -- definindo o delimitador '$$'. Espaço entre DELIMITER e ';' é necessário
CREATE PROCEDURE nomeDaProcedure(parametro1, parametro2.., parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END -- delimitando o final do código SQL
$$ -- uso do novo delimitador, '$$'
DELIMITER ; -- definindo delimitador de volta para ';'



DELIMITER $$
CREATE PROCEDURE GerarDataFormatoBrasileiro()
BEGIN
  SELECT CONCAT(DAY(NOW()), '/', MONTH(NOW()), '/', YEAR(NOW()));
END $$ DELIMITER ;

CALL GerarDataFormatoBrasileiro();


DROP PROCEDURE GerarDataFormatoBrasileiro;

-- DELIMITER $$
CREATE PROCEDURE GerarDataFormatoBrasileiro(IN ano INT)
-- BEGIN
  SELECT CONCAT(DAY(NOW()), '/', MONTH(NOW()), '/', ano);
-- END $$ DELIMITER ;
CALL GerarDataFormatoBrasileiro(2021);



DELIMITER $$
CREATE PROCEDURE ChegamosNoCarnaval(IN ano INT, OUT estamosNoCarnaval VARCHAR(100))
BEGIN
  DECLARE mensagem VARCHAR(100);
  IF MONTH(NOW()) = 2 THEN
    SET mensagem = 'Estamos no mês do carnaval!';
  ELSE
    SET mensagem = 'Não estamos no mês do carnaval!';
  END IF;
  SELECT mensagem INTO estamosNoCarnaval;
END $$ DELIMITER ;
CALL ChegamosNoCarnaval(2020, @estamosNoCarnaval);
SELECT @estamosNoCarnaval;

DROP PROCEDURE ChegamosNoCarnaval;

DELIMITER $$
CREATE PROCEDURE ChegamosNoCarnaval(IN ano INT, INOUT mes INT, OUT estamosNoCarnaval VARCHAR(100))
BEGIN
	DECLARE mensagem VARCHAR(100);
    IF mes IS NULL THEN
      SET mes = MONTH(NOW());
    END IF;
    IF mes = 2 THEN
		SET mensagem = 'Estamos no mês do carnaval!';
    ELSE
		SET mensagem = 'Não estamos no mês do carnaval!';
    END IF;
    SELECT mensagem INTO estamosNoCarnaval;
END $$ DELIMITER ;

SELECT 2 INTO @mes;
CALL ChegamosNoCarnaval(2020, @mes, @estamosNoCarnaval);
SELECT @mes, @estamosNoCarnaval;