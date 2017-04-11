CREATE DATABASE Bamazon;

USE Bamazon;

create TABLE Products(
id INT(9) NOT NULL AUTO_INCREMENT,
product_name varchar(128) NOT NULL,
department_name varchar(128) NOT NULL,
price decimal NOT NULL,
stock_quantity integer NOT NULL,
primary key(id)
);

SELECT * FROM Products

