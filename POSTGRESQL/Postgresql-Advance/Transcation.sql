-- Create database
CREATE DATABASE TestDB;



-- Create Accounts table
CREATE TABLE accounts(
    account_id SERIAL PRIMARY KEY,
    account_name VARCHAR(50) NOT NULL,
    balance NUMERIC(10,2) NOT NULL CHECK (balance >= 0)
);

INSERT INTO accounts(account_name, balance) VALUES
('Alice', 1000.00),
('Bob', 500.00);