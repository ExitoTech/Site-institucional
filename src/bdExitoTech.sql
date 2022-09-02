 CREATE DATABASE bdExitoTech;
 USE bdExitoTech;
 
 CREATE TABLE Empresa (
  id_empresa INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Nome VARCHAR(45) NULL,
  Cnpj VARCHAR(45) NULL,
  EmailEmpresa VARCHAR(95) NULL,
  SenhaEmpresa VARCHAR(45) NULL,
  PorteEmpresa VARCHAR(45) NULL,
  Logradouro VARCHAR(45) NULL,
  UF VARCHAR(45) NULL,
  CEP VARCHAR(99) NULL
  );

CREATE TABLE Funcionario (
  id_funcionario INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(45) NULL,
  Cargo VARCHAR(45) NULL,
  CPF VARCHAR(45) NULL,
  Email VARCHAR(45) NULL,
  Telefone VARCHAR(45) NULL,
  RG VARCHAR(45) NULL,
  UF VARCHAR(45) NULL,
  EstadoCivil VARCHAR(45) NULL,
  FK_encarregado INT NOT NULL,
  FK_Empresa INT NOT NULL
) AUTO_INCREMENT = 2000;


CREATE TABLE maquinas (
  id_maquinas INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nomeMaquina VARCHAR(45) NULL,
  clockProcessador VARCHAR(45) NULL,
  memoriaRam VARCHAR(45) NULL,
  hdOUssd CHAR(3) , check(hdOUssd = "HDD" or hdOUssd = "SSD" ),
  fk_funcionario INT NOT NULL
  )AUTO_INCREMENT = 10000 ;


CREATE TABLE historico_de_dados (
  id_historico_de_dados INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  Uso_CPU INT NULL,
  Uso_RAM INT NULL,
  Uso_Disco INT NULL,
  fk_maquina INT NOT NULL
) AUTO_INCREMENT = 70000 ;

