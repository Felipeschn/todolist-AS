SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: todolist
--
CREATE DATABASE IF NOT EXISTS todolist DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
--
-- Estrutura da tabela tbtarefas
--
USE todolist;
CREATE TABLE IF NOT EXISTS tbtarefas (
  PkCodTarefa int NOT NULL AUTO_INCREMENT,
  NomeTarefa varchar(150) NOT NULL,
  DataTarefa date NOT NULL,
  Concluido boolean NOT NULL,
  Importancia INT(1) NOT NULL,
  FkIdUser int NOT NULL,
  PRIMARY KEY (PkCodTarefa),
  KEY fk_IdUser (FkIdUser)
);
--
-- Inserindo dados da tabela tbtarefas
--
INSERT INTO tbtarefas (PkCodTarefa, NomeTarefa, DataTarefa, Concluido, Importancia, FkIdUser) VALUES
(4, 'Teste', '2021-06-03', false, 1, 1);
--
-- Estrutura da tabela tbusuario
--
CREATE TABLE IF NOT EXISTS tbusuarios (
  PkIdUser int NOT NULL AUTO_INCREMENT,
  Nome varchar(150) NOT NULL,
  Datanasc date NOT NULL,
  Email varchar(100) NOT NULL UNIQUE,
  Senha varchar(15) NOT NULL UNIQUE,
  PRIMARY KEY (PkIdUser),
  UNIQUE KEY Nome (Nome)
);
--
-- Inserindo dados da tabela tbusuario
--
INSERT INTO tbusuarios (PkIdUser, Nome, Datanasc, Email, Senha) VALUES
(1, 'Jader', '1998-03-28', 'jader@teste.com', '123456');
--
-- Limitadores para a tabela tbtarefas
--
ALTER TABLE tbtarefas
  ADD CONSTRAINT fk_IdUser FOREIGN KEY (FkIdUser) REFERENCES tbusuarios (PkIdUser);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


SELECT * FROM tbtarefas;
SELECT * FROM tbusuarios;