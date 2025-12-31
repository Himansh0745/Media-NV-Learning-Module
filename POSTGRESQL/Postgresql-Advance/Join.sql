--  JOINS

CREATE TABLE IF NOT EXISTS medical.appointments(
    appointments_id SERIAL PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE DEFAULT CURRENT_DATE,

    FOREIGN KEY(patient_id)
    REFERENCES medical.patients(patient_id),

    FOREIGN KEY(doctor_id)
    REFERENCES medical.doctors(doctor_id)
);


INSERT INTO medical.appointments(patient_id, doctor_id, appointment_date)
VALUES
(103, 203, '2025-01-13'),
(104, 201, '2025-01-14'),
(105, 202, '2025-01-15'),
(101, 203, '2025-01-16'),
(102, 201, '2025-01-17');


-- INNER JOIN

-- Example-1 This is a Patient + Appointments INNER JOIN Quary

SELECT
p.patient_name,
a.appointment_date
FROM medical.patients p
INNER JOIN medical.appointments a
ON p.patient_id = a.patient_id;


-- Example-2 This is a Appoitments + Doctor INNER JOINS Quary

SELECT
  a.appointments_id,
  d.doctor_name,
  d.specialization
FROM medical.appointments a
INNER JOIN medical.doctors d
ON a.doctor_id = d.doctor_id;



-- LEFT JOIN (VERY IMPORTANT DIFFERENCE)

-- Example 3: All Patients (With or Without Appointments)

SELECT
  p.patient_name,
  a.appointment_date
FROM medical.patients p
LEFT JOIN medical.appointments a
ON p.patient_id = a.patient_id;


-- JOIN ALL TABLES (FULL REAL-WORLD QUERY)

-- FINAL QUERY: ALL DATA IN ONE RESULT


SELECT
  p.patient_name,
  d.doctor_name,
  d.specialization,
  dep.department_name,
  a.appointments_id,
  a.appointment_date,
  b.amount AS bill_amount,
  b.bill_date
FROM medical.appointments a
INNER JOIN medical.patients p
ON a.patient_id = p.patient_id
INNER JOIN medical.doctors d
ON a.doctor_id = d.doctor_id
INNER JOIN admin.departments dep
ON d.department_id = dep.department_id
LEFT JOIN billing.bills b
ON p.patient_id = b.patient_id;


-- LEFT JOINS


-- All Patients (Even if they never visited a doctor)

SELECT
  p.patient_id,
  p.patient_name,
  a.appointments_id,
  a.appointment_date
FROM medical.patients p
LEFT JOIN medical.appointments a
ON p.patient_id = a.patient_id;


-- All Doctors and Their Appoitments If any

SELECT
  d.doctor_name,
  a.appointment_date
FROM medical.doctors d
LEFT JOIN medical.appointments a
ON d.doctor_id = a.doctor_id;



-- RIGHT JOIN


SELECT
  p.patient_name,
  a.appointments_id,
  a.appointment_date
FROM medical.patients p
RIGHT JOIN medical.appointments a
ON p.patient_id = a.patient_id;


-- FULL OUTER JOINS


SELECT
  p.patient_id,
  p.patient_name,
  a.appointments_id,
  a.appointment_date
FROM medical.patients p
FULL OUTER JOIN medical.appointments a
ON p.patient_id = a.patient_id;




SELECT
  'INNER JOIN' AS join_type,
  p.patient_id,
  p.patient_name,
  a.appointments_id,
  a.appointment_date
FROM medical.patients p
INNER JOIN medical.appointments a
ON p.patient_id = a.patient_id

UNION ALL

SELECT
  'LEFT JOIN' AS join_type,
  p.patient_id,
  p.patient_name,
  a.appointments_id,
  a.appointment_date
FROM medical.patients p
LEFT JOIN medical.appointments a
ON p.patient_id = a.patient_id

UNION ALL

SELECT
  'RIGHT JOIN' AS join_type,
  p.patient_id,
  p.patient_name,
  a.appointments_id,
  a.appointment_date
FROM medical.patients p
RIGHT JOIN medical.appointments a
ON p.patient_id = a.patient_id

UNION ALL

SELECT
  'FULL OUTER JOIN' AS join_type,
  p.patient_id,
  p.patient_name,
  a.appointments_id,
  a.appointment_date
FROM medical.patients p
FULL OUTER JOIN medical.appointments a
ON p.patient_id = a.patient_id;

