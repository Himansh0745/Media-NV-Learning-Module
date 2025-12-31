CREATE TABLE accounts (
    account_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    email VARCHAR(100),
    balance NUMERIC(12,2),
    account_type VARCHAR(20),
    is_active BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 1. B-TREE Index (Default & Most Important)

-- CREATE INDEX
CREATE INDEX idx_accounts_email
ON accounts (email);

-- QUARY USING INDEX
SELECT * FROM accounts
WHERE email = 'himanshu@gmail.com';


--2. UNIQUE Index

-- CREATE INDEX
CREATE UNIQUE INDEX idx_unique_email
ON accounts (email);

-- Invalid insert example
INSERT INTO accounts (customer_name, email)
VALUES ('Sunny', 'himanshu@gmail.com');

-- ❌ ERROR if email already exists

-- 3. HASH INDEX

CREATE INDEX idx_accounts_hash_email
ON accounts USING HASH (email);

SELECT * FROM accounts
WHERE email = 'customer@gmail.com';


-- 4. GIN Index (Generalized Inverted Index)

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name TEXT,
    preferences JSONB
);


CREATE INDEX idx_customers_preferences
ON customers USING GIN (preferences);

SELECT * FROM customers
WHERE preferences @> '{"sms_alerts": true}';

-- 5. GiST Index


CREATE TABLE atm_locations (
    atm_id SERIAL,
    location POINT
);

CREATE INDEX idx_atm_location
ON atm_locations USING GIST (location);


--6 BRIN Index (Block Range Index)

CREATE INDEX idx_accounts_created_brin
ON accounts USING BRIN (created_at);


SELECT * FROM accounts
WHERE created_at >= '2025-01-01';


--7. Partial Index

CREATE INDEX idx_active_accounts
ON accounts (account_type)
WHERE is_active = true;


SELECT * FROM accounts
WHERE is_active = true
AND account_type = 'SAVINGS';


-- 8. Composite (Multi-column) Index

CREATE INDEX idx_type_balance
ON accounts (account_type, balance);


SELECT * FROM accounts
WHERE account_type = 'SAVINGS'
AND balance > 50000;


-- How to check index usage

EXPLAIN ANALYZE
SELECT * FROM accounts
WHERE email = 'customer@gmail.com';
