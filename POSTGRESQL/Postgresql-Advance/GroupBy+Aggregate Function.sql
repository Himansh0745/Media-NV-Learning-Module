-- COUNT – Total Appointments per Doctor

SELECT
  d.doctor_name,
  COUNT(a.appointments_id) AS total_appointments
FROM medical.doctors d
LEFT JOIN medical.appointments a
ON d.doctor_id = a.doctor_id
GROUP BY d.doctor_name;


-- COUNT – Total Patients per Department

SELECT
  dep.department_name,
  COUNT(DISTINCT a.patient_id) AS total_patients
FROM admin.departments dep
LEFT JOIN medical.doctors d
ON dep.department_id = d.department_id
LEFT JOIN medical.appointments a
ON d.doctor_id = a.doctor_id
GROUP BY dep.department_name;


-- SUM – Total Billing Amount per Patient


SELECT
  p.patient_name,
  SUM(b.amount) AS total_bill
FROM medical.patients p
LEFT JOIN billing.bills b
ON p.patient_id = b.patient_id
GROUP BY p.patient_name;



-- AVG – Average Bill Amount

SELECT
  AVG(amount) AS average_bill_amount
FROM billing.bills;


-- MIN / MAX – Smallest & Largest Bill

SELECT
  MIN(amount) AS min_bill,
  MAX(amount) AS max_bill
FROM billing.bills;


-- GROUP BY with DATE (Daily Appointments)

SELECT
  appointment_date,
  COUNT(*) AS total_appointments
FROM medical.appointments
GROUP BY appointment_date
ORDER BY appointment_date;
