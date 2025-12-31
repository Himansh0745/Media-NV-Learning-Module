CREATE TABLE IF NOT EXISTS admin.departments (
  department_id INT PRIMARY KEY,
  department_name TEXT NOT NULL
);


CREATE TABLE IF NOT EXISTS medical.doctors (
  doctor_id INT PRIMARY KEY,
  doctor_name TEXT NOT NULL,
  specialization TEXT NOT NULL,
  department_id INT NOT NULL,

  is_active BOOLEAN DEFAULT TRUE,

  FOREIGN KEY (department_id)
  REFERENCES admin.departments(department_id)
);


CREATE TABLE IF NOT EXISTS medical.patients(
  patient_id INT PRIMARY KEY,
  patient_name TEXT NOT NULL,
  age INT CHECK(age > 0),
  created_at DATE DEFAULT CURRENT_DATE
);


CREATE TABLE IF NOT EXISTS billing.bills (
  bill_id INT PRIMARY KEY,
  patient_id INT NOT NULL,
  amount INT CHECK (amount > 0),
  bill_date DATE DEFAULT CURRENT_DATE,

  FOREIGN KEY (patient_id)
  REFERENCES medical.patients(patient_id)
);




SELECT table_schema, table_name
FROM information_schema.tables
WHERE table_schema IN ('admin', 'medical', 'billing');


DROP TABLE IF EXISTS billings.bills CASCADE;
