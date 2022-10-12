 CREATE DATABASE bdExitoTech;
 USE bdExitoTech;
 
 CREATE TABLE Empresa (
  id_empresa INT NOT NULL PRIMARY KEY IDENTITY(1,1),
  Nome VARCHAR(45) NOT NULL,
  Cnpj VARCHAR(45) NOT NULL,
  EmailEmpresa VARCHAR(95) NOT NULL,
  SenhaEmpresa VARCHAR(45) NOT NULL,
  PorteEmpresa VARCHAR(45) NOT NULL,
  Logradouro VARCHAR(45) NOT NULL,
  UF VARCHAR(45) NOT NULL,
  CEP VARCHAR(99) NOT NULL,
  PRIMARY KEY (id_empresa)
  );

  CREATE TABLE Funcionario (
  id_funcionario INT PRIMARY KEY NOT NULL IDENTITY(2000,1),
  Nome VARCHAR(45) NOT NULL,
  Cargo VARCHAR(45) NOT NULL,
  CPF VARCHAR(45) NOT NULL,
  Email VARCHAR(45) NOT NULL,
  Telefone VARCHAR(45) NOT NULL,
  RG VARCHAR(45) NOT NULL,
  UF VARCHAR(45) NOT NULL,
  EstadoCivil VARCHAR(45) NOT NULL,
  FK_encarregado INT NOT NULL,
  FK_Empresa INT NOT NULL
);

CREATE TABLE maquinas (
  id_maquinas INT PRIMARY KEY  NOT NULL IDENTITY(10000,1),
  nomeMaquina VARCHAR(45)NOT NULL,
  clockProcessador VARCHAR(45)NOT NULL,
  memoriaRam VARCHAR(45) NOT NULL,
  hdOUssd CHAR(3) , check(hdOUssd = 'HDD' or hdOUssd = 'SSD' ),
  fk_funcionario INT NOT NULL
  );

  CREATE TABLE historico_de_dados (
  id_historico_de_dados INT PRIMARY KEY NOT NULL IDENTITY(70000,1),
  Uso_CPU INT NOT NULL,
  Uso_RAM INT NOT NULL,
  Uso_Disco INT NOT NULL,
  fk_maquina INT NOT NULL
);