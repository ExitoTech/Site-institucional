CREATE DATABASE exitoTech;
USE exitoTech;

CREATE TABLE empresa(
  idEmpresa INT NOT NULL auto_increment,
  nomeEmpresa VARCHAR(75) NULL,
  cnpj CHAR(18) NULL,
  porteEmpresa VARCHAR(50) NULL,
  logradouro VARCHAR(65) NULL,
  UF CHAR(2) NULL,
  CEP CHAR(8) NULL,
  PRIMARY KEY (idEmpresa)
  );


CREATE TABLE funcionario(
  idFuncionario INT NOT NULL auto_increment,
  nomeFuncionario VARCHAR(60) NULL,
  CPF CHAR(11) NULL,
  email VARCHAR(155) NULL,
  senha VARCHAR(25) NULL,
  ativo TINYINT NULL,
  telefoneFuncionario CHAR(11) NULL,
  cep VARCHAR(40) NULL,
  fk_Empresa INT NOT NULL,
  isADM Boolean NULL,
  PRIMARY KEY (idFuncionario),
  FOREIGN KEY (fk_empresa)
  REFERENCES empresa(idEmpresa)
 )auto_increment = 1000;


CREATE TABLE setor (
  idSetor INT NOT NULL auto_increment,
  nomeSetor VARCHAR(25) NULL,
  descSetor VARCHAR(65) NULL,
  fk_Empresa INT NOT NULL,
  PRIMARY KEY (idSetor, fk_empresa),
  FOREIGN KEY (fk_empresa)
  REFERENCES empresa (idEmpresa)
  )auto_increment = 10000;


CREATE TABLE maquina (
  idMaquina INT auto_increment,
  nomeMaquina VARCHAR(15),
  sistemaOperacional VARCHAR(30),
  arquiteturaSO VARCHAR(30),
  fk_setor INT null,
  processador VARCHAR(30),
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
  dataHora DATETIME default current_timestamp ,
  PRIMARY KEY (idCaptura),
  FOREIGN KEY (fk_maquina)
  REFERENCES maquina (idMaquina)
  )auto_increment = 40000;
  
  create table atendimentoMaquina(
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
  
  
INSERT INTO empresa (nomeEmpresa,cnpj,porteempresa,logradouro,complemento,uf,estado,cep) VALUES ('Amazon','123.123.122-12','médio','Rua Basilio no escuro','518','SP','São Paulo','04822920');
INSERT INTO maquina(nomeMaquina,processador,memoriaRam,memoriaMassa) Values("VinyProgamador","i7 10th gen","16GB","512GB");
INSERT INTO capturas(fk_maquina,usoCPU,usoRam) Values(20000,22.5,22.4);

select * from empresa;
select * from funcionario;
select * from capturas;



drop database exitotech;