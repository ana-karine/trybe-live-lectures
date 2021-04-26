DELIMITER $$
CREATE TRIGGER trigger_postagem_insert
    BEFORE INSERT ON postagem
    FOR EACH ROW
BEGIN
    SET NEW.status_postagem = 'Aguardando Aprovação',
    NEW.data_abertura = NOW();
END;
$$ DELIMITER ;

INSERT INTO postagem (titulo_postagem) VALUES ('Qual editor de texto você prefere?');

SELECT * FROM postagem;