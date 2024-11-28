-- Crear la base de datos
CREATE DATABASE dinosaurios;

-- Usar la base de datos recién creada
USE dinosaurios;

-- Crear la tabla 'dinosaurios'
CREATE TABLE dinosaurios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(50),
    periodo VARCHAR(50),
    dieta VARCHAR(50),
    longitud DECIMAL(5,2),
    peso DECIMAL(8,2),
    descubrimiento VARCHAR(100)
);