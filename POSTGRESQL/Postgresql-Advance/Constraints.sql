-- Patients Tables

-- Explanation:
-- PRIMARY KEY → patient_id
-- NOT NULL → ensures name, email are mandatory
-- UNIQUE → email and phone must be unique
-- CHECK → only allows valid gender values


CREATE TABLE IF NOT EXISTS medical.patients(
    patient_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone BIGINT UNIQUE NOT NULL,
    date_of_birth DATE,
    gender VARCHAR(10) CHECK (gender IN ('Male', 'Female', 'Other'))
);



-- Doctors Table


CREATE TABLE IF NOT EXISTS medical.doctors(
    doctor_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialty VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone BIGINT UNIQUE NOT NULL,
    hire_date DATE DEFAULT CURRENT_DATE
);

-- Explanation:
-- DEFAULT CURRENT_DATE → sets default hire date if not provided
-- Other constraints are similar to patients



-- Appointments Tables



CREATE TABLE IF NOT EXISTS medical.appointments(
    appointment_id SERIAL PRIMARY KEY,
    patient_id INT NOT NULL,
    doctor_id INT NOT NULL,
    appointment_date DATE DEFAULT CURRENT_DATE,
    CONSTRAINT fk_patient
        FOREIGN KEY(patient_id) 
        REFERENCES medical.patients(patient_id)
        ON DELETE CASCADE,
    CONSTRAINT fk_doctor
        FOREIGN KEY(doctor_id) 
        REFERENCES medical.doctors(doctor_id)
        ON DELETE CASCADE,
    CONSTRAINT check_future_date
        CHECK (appointment_date >= CURRENT_DATE)
);





SELECT * FROM medical.patients;
SELECT * FROM medical.doctors;
SELECT * FROM medical.appointments;

S


SELECT column_name
FROM information_schema.columns
WHERE table_schema = 'medical'
  AND table_name = 'doctors';



SELECT
    a.appointments_id,
    a.appointment_date,

    p.patient_id,
    p.patient_name,
    p.age,

    d.doctor_id,
    d.doctor_name,
    d.specialization,
    d.is_active

FROM medical.appointments a
JOIN medical.patients p
    ON a.patient_id = p.patient_id
JOIN medical.doctors d
    ON a.doctor_id = d.doctor_id
ORDER BY a.appointment_date;


