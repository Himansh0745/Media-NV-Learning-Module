-- Account Table

CREATE TABLE If NOT EXISTTS accounts (
    account_id SERIAL PRIMARY KEY,
    customer_name TEXT,
    balance NUMERIC(12,2)
);

--Step:-2  Audit_Table

CREATE TABLE accounts_audit_log (
    audit_id SERIAL PRIMARY KEY,
    account_id INT,
    operation TEXT,
    old_data JSONB,
    new_data JSONB,
    changed_by TEXT,
    changed_at TIMESTAMP DEFAULT NOW()
);


-- Step - 3
-- AUdit function

CREATE OR REPLACE FUNCTION audit_accounts_changes()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        INSERT INTO accounts_audit_log
        (account_id, operation, new_data, changed_by)
        VALUES
        (NEW.account_id, 'INSERT', to_jsonb(NEW), current_user);

    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO accounts_audit_log
        (account_id, operation, old_data, new_data, changed_by)
        VALUES
        (NEW.account_id, 'UPDATE', to_jsonb(OLD), to_jsonb(NEW), current_user);

    ELSIF TG_OP = 'DELETE' THEN
        INSERT INTO accounts_audit_log
        (account_id, operation, old_data, changed_by)
        VALUES
        (OLD.account_id, 'DELETE', to_jsonb(OLD), current_user);
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;



-- STep-4 Trigger

CREATE TRIGGER trg_accounts_audit
AFTER INSERT OR UPDATE OR DELETE
ON accounts
FOR EACH ROW
EXECUTE FUNCTION audit_accounts_changes();


INSERT INTO accounts VALUES (1, 'Himanshu', 50000);

UPDATE accounts SET balance = 60000 WHERE account_id = 1;

SELECT * FROM accounts;
