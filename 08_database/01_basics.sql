-- Basic RDBMS Terminologies

/* 

	1. Database: A database is the collection of related information or data that
		is stored and arranged in an efficient manner for allowing easy access
        and manipulation.
        
	2. Table: Also called as a Relation in RDBMS, is a collection of related data
		stored in the form of rows and columns within a database. Each table has
        certain rows (also called as records/tuples) and columns(also called as
        fields).
        
	3. User: A users is a person who interacts with the data/table in the database
		on a regular basis in order to understand, operate and modify the data
        according to the business needs.
		Eg. DBA, End User, Application Programmers, DB Designers, etc
        
	4. Schema: Schema is the overall structure of how your relation or table
		will look like, including the name of the fields, the type of data they
		will store and the constraints/checks they will perform.


*/


-- Creating and dropping a database

CREATE DATABASE IF NOT EXISTS test;
DROP DATABASE IF EXISTS test;

-- Selecting and using the database

USE test;

-- Creating a table/relation in the test database

CREATE TABLE student (
	id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    AGE INT NOT NULL
);

-- Getting the Schema of the table / relation

DESC student;



/*
	Datatypes in SQL: Datatypes is used to signify or specify the type of data
		we are going to store in the field.
        
        Numerical: int, tinyint, smallint, mediumint, bigint, float, double, decimal
        Date: date, datetime, timestamp, time, year
        String: char, varchar, blob, tinyblob, mediumblob, largeblob, enum
        
	
    Keywords in SQL: Keywords are the reserved words that the MYSQL RDBMS Server
		understand and the words that mean a lot for it for performing very
        specific tasks
        
        Eg. Create, database, table, select, from, alter, update, rename, truncate
        
*/









