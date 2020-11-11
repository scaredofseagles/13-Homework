## SCHEMA

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_string VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false NOT NULL,
    PRIMARY KEY(id)
);