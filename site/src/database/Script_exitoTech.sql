CREATE DATABASE exitoTech;
USE exitoTech;

CREATE TABLE empresa(
  idEmpresa INT NOT NULL auto_increment,
  nomeEmpresa VARCHAR(55) NULL,
  cnpj CHAR(18) NULL,
  porteEmpresa VARCHAR(20) NULL,
  logradouro VARCHAR(65) NULL,
  UF CHAR(2) NULL,
  CEP CHAR(9) NULL,
  webHook VARCHAR(200),
  PRIMARY KEY (idEmpresa)
  );


CREATE TABLE funcionario(
  idFuncionario INT NOT NULL auto_increment,
  nomeFuncionario VARCHAR(60) NULL,
  CPF CHAR(14) NULL,
  email VARCHAR(55) NULL,
  senha VARCHAR(25) NULL,
  ativo Boolean NULL,
  telefoneFuncionario CHAR(15) NULL,
  cep VARCHAR(9) NULL,
  fotoPerfil LONGTEXT,
  qrCode boolean,
  fk_Empresa INT NOT NULL,
  isADM Boolean NULL,
  visualizarCpu Boolean NULL,
  visualizarDisco Boolean NULL,
  visualizarRam Boolean NULL,
  PRIMARY KEY (idFuncionario),
  FOREIGN KEY (fk_empresa)
  REFERENCES empresa(idEmpresa)
 )auto_increment = 1000;


CREATE TABLE setor (
  idSetor INT NOT NULL auto_increment,
  nomeSetor VARCHAR(7) NULL,
  fk_Empresa INT NOT NULL,
  PRIMARY KEY (idSetor, fk_empresa),
  FOREIGN KEY (fk_empresa)
  REFERENCES empresa (idEmpresa)
  )auto_increment = 10000;


CREATE TABLE maquina (
  idMaquina INT auto_increment,
  nomeMaquina VARCHAR(30),
  sistemaOperacional VARCHAR(30),
  statusMaquina varchar(15),
  arquiteturaSO VARCHAR(30),
  fk_setor INT null,
  processador VARCHAR(50),
  memoriaRam VARCHAR(30),
  memoriaMassa VARCHAR(30),
  PRIMARY KEY (idMaquina),
  FOREIGN KEY (fk_setor)
  REFERENCES setor (idSetor)
  )auto_increment = 20000;


CREATE TABLE capturas (
  fk_maquina INT NOT NULL,
  idCaptura INT NOT NULL auto_increment,
  usoCPU DOUBLE NULL,
  usoRam Double NULL,
  dataHora DATETIME default current_timestamp,
  PRIMARY KEY (idCaptura),
  FOREIGN KEY (fk_maquina)
  REFERENCES maquina (idMaquina)
  )auto_increment = 40000;
  
  CREATE TABLE atendimentoMaquina(
  idAtendimento int primary key auto_increment,
  tituloIncidente varchar (30),
  descAtendimento varchar(255),
  horaAtendimento datetime,
  fk_maquina int,
  foreign key(fk_maquina) references maquina(idMaquina),
  fk_funcionario int,
  foreign key(fk_funcionario) references funcionario(idFuncionario),
  fk_setor int,
  foreign key(fk_setor) references setor(idSetor)
  );
  
  CREATE TABLE bancoDeHora(
  idRegistroDiaTrabalhado int primary key auto_increment,
  dataRegistro date,
  horasTrabalhadas time,
  tempoPausa time,
  fk_maquina int,
  foreign key (fk_maquina)
  references maquina (idMaquina)
  )auto_increment = 100000;
  
  CREATE TABLE aviso(
  idAviso int primary key auto_increment,
  mediaCpu int not null,
  mediaRam int not null,
  dataHora DATETIME default current_timestamp,
  fk_maquina int,
  foreign key(fk_maquina)
  references maquina(idMaquina)
  )auto_increment = 10000; 
  
INSERT INTO empresa (nomeEmpresa,cnpj,porteempresa,logradouro,uf,cep) VALUES ('Amazon','123.123.122-12','mÃ©dio','Rua Basilio no escuro','SP','04822920');
INSERT INTO maquina(nomeMaquina,processador,memoriaRam,memoriaMassa) Values("VinyProgamador","i7 10th gen","16GB","512GB");
INSERT INTO capturas(fk_maquina,usoCPU,usoRam) Values(20000,22.5,22.4);

SELECT * FROM empresa;
SELECT * FROM maquina;
SELECT * FROM funcionario;
SELECT * FROM capturas;

DELETE FROM funcionario WHERE idFuncionario = 1001;

SELECT idMaquina FROM maquina ORDER BY idMaquina DESC LIMIT 1;
Select idempresa from empresa order by idEmpresa desc Limit 1;

INSERT INTO aviso (fk_captura) VALUE (40000);
SELECT * FROM aviso;

SELECT idAviso, usoCpu, usoRam, dataHora 
FROM aviso AS avi
RIGHT JOIN capturas AS cap
ON avi.fk_captura = cap.idCaptura;

/**
 *
 * @author lucas
 */

