
DROP DATABASE IF EXISTS friends_db;
CREATE DATABASE friends_db;

USE friends_db;

CREATE TABLE friends(
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    age INT(99) NOT NULL,
    race VARCHAR(30) NOT NULL,
    birth_city VARCHAR(30) NOT NULL,
    home_city VARCHAR(30) NOT NULL
);
