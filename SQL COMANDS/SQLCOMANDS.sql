SELECT * FROM Usuarios
SELECT * FROM Posts
SELECT * FROM Comentarios

CREATE TABLE Usuarios(
	Id INT IDENTITY PRIMARY KEY,
	Nome VARCHAR(255) NOT NULL,
	Email VARCHAR(100) NOT NULL,
	Senha VARCHAR(100) NOT NULL,
	Username VARCHAR(20) NOT NULL,
	Foto TEXT,
	Biografia TEXT,
	Cep VARCHAR(9) NOT NULL
)

INSERT INTO Usuarios (Nome, Email, Senha, Username, Foto,
Biografia, Cep)
VALUES ('João Pedro Cassiano de Brito', 'cassiannoow@gmail.com',
'c3bfe49b7281e2e9ec75e910fecd3857', 'Jottape', 'https://i.pinimg.com/236x/6a/fb/e7/6afbe78b59e7f0294f3c73903291a6f0.jpg',
'Salve, eu sou o jottape atualmente cursando PD no cotuca.', '13181-492')
INSERT INTO Usuarios (Nome, Email, Senha, Username, Foto,
Biografia, Cep)
VALUES ('Maria Eduarda De Jesus Padovan', 'Padovs@gmail.com',
'a801727724b5a1d36d3bbc5e81c96623', 'Padovan', 'https://pm1.narvii.com/7021/8f2ca50f74aeab0df4e7d46e5003319be13a642dr1-1215-717v2_uhq.jpg',
'Ooi, eu sou a Padovan atualmente cursando PD no cotuca.', '11608-545')

CREATE TABLE Posts(
	Id INT IDENTITY PRIMARY KEY,
	IdUsuario INT NOT NULL,
	Imagem TEXT,
	Conteudo TEXT,
	FOREIGN KEY (IdUsuario) REFERENCES Usuarios(Id)
)

INSERT INTO Posts (IdUsuario, Imagem, Conteudo)
VALUES (1, 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/9684_FC669FCC551EEE52-1.jpg?w=876&h=484&crop=1',
'A MACONHA - Cannabis sativa é uma planta herbácea da família das Canabiáceas, amplamente cultivada em muitas partes do mundo')

CREATE TABLE Comentarios(
	Id INT IDENTITY PRIMARY KEY,
	IdUsuario INT NOT NULL,
	IdPost INT NOT NULL,
	Conteudo TEXT,
	FOREIGN KEY (IdUsuario) REFERENCES Usuarios(Id),
	FOREIGN KEY (IdPost) REFERENCES Posts(Id)
)

INSERT INTO Comentarios (IdPost, IdUsuario, Conteudo)
VALUES (1, 2, 'Caramba eu não sabia que maconha era usada em alguns medicamentos.')