 CREATE TABLE empresa(
  idEmpresa INT NOT NULL identity(1,1),
  nomeEmpresa VARCHAR(75) NULL,
  cnpj CHAR(18) NULL,
  porteEmpresa VARCHAR(50) NULL,
  logradouro VARCHAR(65) NULL,
  UF CHAR(2) NULL,
  CEP CHAR(8) NULL,
  PRIMARY KEY (idEmpresa)
  );


CREATE TABLE funcionario(
  idFuncionario INT NOT NULL identity(1,1000),
  nomeFuncionario VARCHAR(60) NULL,
  CPF CHAR(11) NULL,
  email VARCHAR(155) NULL,
  senha VARCHAR(25) NULL,
  ativo TINYINT NULL,
  telefoneFuncionario CHAR(11) NULL,
  cep VARCHAR(40) NULL,
  fk_Empresa INT NOT NULL,
  isADM TINYINT NULL,
  PRIMARY KEY (idFuncionario),
  FOREIGN KEY (fk_empresa)
  REFERENCES empresa(idEmpresa)
 );


CREATE TABLE setor (
  idSetor INT NOT NULL identity(1,10000),
  nomeSetor VARCHAR(25) NULL,
  descSetor VARCHAR(65) NULL,
  fk_Empresa INT NOT NULL,
  PRIMARY KEY (idSetor),
  FOREIGN KEY (fk_empresa)
  REFERENCES empresa (idEmpresa)
  );


CREATE TABLE maquina (
  idMaquina INT identity(1,20000),
  nomeMaquina VARCHAR(15),
  fk_setor INT null,
  processador VARCHAR(30),
  memoriaRam VARCHAR(30),
  memoriaMassa VARCHAR(30),
  PRIMARY KEY (idMaquina),
  FOREIGN KEY (fk_setor)
  REFERENCES setor (idSetor)
  );


CREATE TABLE capturas (
 idCaptura INT NOT NULL identity(1,120000),
  usoCPU DECIMAL(3,2) NULL,
  usoRam DECIMAL(3,2) NULL,
  dataHora DATETIME default current_timestamp ,
  PRIMARY KEY (idCaptura),
  fk_maquina INT NOT NULL,
  FOREIGN KEY (fk_maquina)
  REFERENCES maquina (idMaquina)
  );
  
  create table atendimentoMaquina(
  idAtendimento int primary key identity(1,40000),
  tituloIncidente varchar (30),
  descAtendimento varchar(255),
  horaAtendimento datetime default current_timestamp,
  fk_maquina int,
  foreign key(fk_maquina) references maquina(idMaquina),
  fk_funcionario int,
  foreign key(fk_funcionario) references funcionario(idFuncionario),
  fk_setor int,
  foreign key(fk_setor) references setor(idSetor)
  );