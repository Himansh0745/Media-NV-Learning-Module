-- C for CREATE(INSERT)

INSERT INTO admin.departments(department_id, department_name)
VALUES
(1, 'Cardiology'),
(2, 'Neurology'),
(3, 'Orthopedics'),
(4, 'Gynocologist'),
(5, 'Dentist');



INSERT INTO medical.patients(patient_id, patient_name, age)
VALUES
(101, 'Rohit Kumar', 30),
(102, 'chandan kumar', 25),
(103, 'Mukesh kumar', 26),
(104, 'Amit kumar', 17),
(105, 'Dhumdhadi', 23);



INSERT INTO medical.doctors (doctor_id, doctor_name, specialization, department_id)
VALUES
(201, 'Dr. Himanshu', 'Cardiologist', 1),
(202, 'Dr. Pradhan', 'Neurologist', 2),
(203, 'Dr. Sunny', 'Orthopedics', 3),
(204, 'Dr. Kumar', 'Gynocologist', 4),
(205, 'Dr. Himmu', 'Dentist', 5);



INSERT INTO billing.bills
(bill_id, patient_id, amount, bill_date)
VALUES
(301, 101, 50000, '2025-01-10'),
(302, 102, 13000, '2025-01-12'),
(303, 103, 15000, '2025-01-15'),
(304, 104, 21000, '2025-01-18'),
(305, 105, 31000, '2025-01-20');


--R for READ


SELECT * FROM admin.departments;

SELECT * FROM medical.doctors;

SELECT * FROM medical.patients;

SELECT * FROM billing.bills;


SELECT * FROM medical.patients
WHERE age > 25;



-- SELECT * FROM admin.departments, medical.doctors, medical.patients, billing.bills;



-- U for UPDATE(MODIFY DATA)


UPDATE medical.patients
SET age = 37
WHere patient_id = 102; 
-- WHERE is mandatory, otherwise all rows update.



UPDATE medical.doctors
SET is_active = FALSE
WHERE doctor_id = 202;


-- DELETE(REMOVE DATA)


DELETE FROM billing.bills
WHERE bill_id = 302;
