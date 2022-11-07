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
  fk_Empresa INT NOT NULL,
  isADM Boolean NULL,
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
  
  select * from maquina where fk_setor = null;


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
  nomeAutor varchar(100),
  horaAtendimento datetime,
  fk_maquina int,
  foreign key(fk_maquina) references maquina(idMaquina),
  fk_funcionario int,
  foreign key(fk_funcionario) references funcionario(idFuncionario),
  fk_setor int,
  foreign key(fk_setor) references setor(idSetor)
  );
  
  
  
INSERT INTO empresa (nomeEmpresa,cnpj,porteempresa,logradouro,uf,cep) VALUES ('Amazon','123.123.122-12','médio','Rua Basilio no escuro','SP','04822920');
INSERT INTO funcionario(  nomeFuncionario , CPF,email ,senha ,ativo ,telefoneFuncionario ,cep ,fk_Empresa ,isADM ) values("Vagner","2020","a@a.com","a","1","11999999","0020202","1",true);
INSERT INTO maquina(nomeMaquina,fk_setor,sistemaOperacional,arquiteturaSO,processador,memoriaRam,memoriaMassa) VALUES (null,null,null,null,null,null,null);

select * from empresa;
select * from funcionario;
select * from capturas;
select * from maquina;
select * from setor;

