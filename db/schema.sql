## SCHEMA

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_string VARCHAR(100),
    devoured BOOLEAN
);