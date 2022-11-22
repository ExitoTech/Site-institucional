CREATE TABLE empresa(
  idEmpresa INT NOT NULL identity(1,1),
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
  idFuncionario INT NOT NULL identity(1000,1),
  nomeFuncionario VARCHAR(60) NULL,
  CPF CHAR(14) NULL,
  email VARCHAR(55) NULL,
  senha VARCHAR(25) NULL,
  ativo TINYINT NULL,
  telefoneFuncionario CHAR(15) NULL,
  cep VARCHAR(9) NULL,
  fk_Empresa INT NOT NULL,
  isADM TINYINT NULL,
  PRIMARY KEY (idFuncionario),
  FOREIGN KEY (fk_empresa)
  REFERENCES empresa(idEmpresa)
 );


CREATE TABLE setor (
  idSetor INT NOT NULL identity(10000,1),
  nomeSetor VARCHAR(7) NULL,
  fk_Empresa INT NOT NULL,
  PRIMARY KEY (idSetor),
  FOREIGN KEY (fk_empresa)
  REFERENCES empresa (idEmpresa)
  );


CREATE TABLE maquina (
  idMaquina INT identity(20000,1),
  PRIMARY KEY (idMaquina),
  nomeMaquina VARCHAR(30),
  sistemaOperacional VARCHAR(30),
  statusMaquina varchar(15),
  arquiteturaSO VARCHAR(30),
  processador VARCHAR(50),
  memoriaRam VARCHAR(30),
  memoriaMassa VARCHAR(30),
  fk_setor INT null,
  FOREIGN KEY (fk_setor)
  REFERENCES setor (idSetor)
  );


CREATE TABLE capturas (
 idCaptura INT NOT NULL identity(120000,1),
  usoCPU INT NULL,
  usoRam INT NULL,
  dataHora DATETIME default current_timestamp ,
  PRIMARY KEY (idCaptura),
  fk_maquina INT NOT NULL,
  FOREIGN KEY (fk_maquina)
  REFERENCES maquina (idMaquina)
  );
  
  create table atendimentoMaquina(
  idAtendimento int primary key identity(40000,1),
  tituloIncidente varchar (30),
  horaAtendimento datetime default current_timestamp,
  fk_maquina int,
  foreign key(fk_maquina) references maquina(idMaquina),
  fk_funcionario int,
  foreign key(fk_funcionario) references funcionario(idFuncionario),
  fk_setor int,
  foreign key(fk_setor) references setor(idSetor)
  );
  
  create table bancoDeHora(
  idRegistroDiaTrabalhado int primary key identity(100000,1),
  dataRegistro date,
  horasTrabalhadas time,
  tempoPausa time,
  fk_maquina int,
  foreign key (fk_maquina)
  references maquina (idMaquina)
  );

  CREATE TABLE aviso(
  idAviso int primary key identity(10000, 1),
  mediaCpu int not null,
  mediaRam int not null,
  dataHora DATETIME default current_timestamp,
  fk_maquina int,
  foreign key(fk_maquina)
  references maquina(idMaquina)
  );
  