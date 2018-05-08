DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL,
  product_name VARCHAR(70) NOT NULL,
  department_name VARCHAR(70) NOT NULL,
  price DECIMAL (8,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('School Uniform', 'Clothing', 25.11, 74);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Pants', 'Clothing', 46.27, 34);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('T-Shirt', 'Clothing', 50.02, 18);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Drones', 'Electronics', 49.41, 16);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Video Games', 'Electronics', 69.88, 60);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Cell Phones', 'Electronics', 99.99, 100 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Dolls', 'Toys', 10.79, 29);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Kids Bikes', 'Toys', 76.00, 13);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Scooters', 'Toys', 23.11, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Coffee Tables', 'Furnitures', 89.99, 8);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Chairs', 'Furnitures', 56.32, 11);

SELECT * FROM bamazon_db.products;