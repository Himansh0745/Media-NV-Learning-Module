1️⃣ What is a Database?

📌 Definition
A database is the top-level container that holds all data structures such as schemas, tables, views, functions, indexes, etc.

👉 Think of it as one application’s entire data store.

Example:-
**CREATE DATABASE company_db;**

Real-World Analogy
🗄️ Office Building

One building for one company
Inside it → multiple floors (schemas)

💡Key Points

You connect to one database at a time
Databases are isolated from each other
One backend app usually uses one database



2️⃣ What is a Schema?
📌 Definition

A schema is a logical namespace inside a database used to organize tables and other objects.

# CREATE SCHEMA auth;
# CREATE SCHEMA billing;


### Real-World Analogy
🏢 Floors inside a building

Auth floor → auth related tables
Billing floor → billing related tables

💡 Key Points

Schemas exist inside a database
Default schema = public
Used heavily in large applications



3️⃣ What is a Table?

📌 Definition
A table is where actual data is stored, in the form of rows and columns.

CREATE TABLE users (
  id SERIAL,
  name TEXT,
  email TEXT
);


🏢 Real-World Analogy
📄 Excel Sheet

Columns → structure
Rows → actual data

💡 Key Points

Tables belong to a schema
Data lives only in tables
Tables contain rows (records)



4️⃣ Relationship Between Them (VERY IMPORTANT)

Database
 └── Schema
      └── Table
           └── Rows


🧠 PostgreSQL Example Path

***company_db.auth.users***

company_db → Database
auth → Schema
users → Table

## Primary Key

A primary key uniquely identifies each record in a table.

## Foreign Key

A foreign key creates a relationship between two tables and enforces data integrity.

## Why Foreign Key?

Foreign keys maintain data integrity between related tables.