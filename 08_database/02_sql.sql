/*
	DDL: Data Definition Language is the set of commands that is used 
		to define and manage db objects like database, relation, views, 
        indexes or constraints.
        
        Eg. Create, Alter, Rename, Truncate, Drop
        
	DQL: Data Query Language is the set of commands used for query the
		database and extract the specific result out of a particular
        condition or query.
        
        Eg. Select, From, Where, Group by, Order by, Having
        
	DML: Data Manipulation Language is the set of commands used to modify
		and manipulation data in the relation/table.
		
        Eg. Insert, update, delete
*/

-- DDL commands: 

-- create table: used to create a new table
CREATE TABLE test (
	test_id INT PRIMARY KEY,
    test_name VARCHAR(50) NOT NULL
);

-- alter: used to add a new column/field, change structure of existing field, 
-- rename the column and many more

ALTER TABLE test add test_subject VARCHAR(50) NOT NULL; -- adding a new column
DESC test;

ALTER TABLE test MODIFY test_name VARCHAR(100); -- modified existing column
DESC test;

ALTER TABLE test RENAME COLUMN test_id TO id; -- renaming columns
ALTER TABLE test RENAME COLUMN test_name TO name;
ALTER TABLE test RENAME COLUMN test_subject TO subject;
DESC test;

-- drop: used to delete a db object like view or table/relation.
DROP TABLE test;

-- truncate: used to remove all records from the data keeping the structure intact
TRUNCATE TABLE test;

-- rename: used with alter to rename table or columns/fields.
ALTER TABLE test RENAME TO tests;
DESC tests;
ALTER TABLE tests RENAME TO test; -- operation undo 🤣


-- -----------------------------------------------------------------------------------

-- DQL commands

CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE student (
	ROLLNO INT PRIMARY KEY,
    NAME VARCHAR(50), 
    MARKS INT NOT NULL,
    GRADE VARCHAR(1),
    CITY VARCHAR(20)
);

INSERT INTO student 
	(ROLLNO, NAME, MARKS, GRADE, CITY)
	VALUES
	(101, "ANIL", 78, 'C', "PUNE"),
    (102, "BHUMIKA", 93, 'A', "MUMBAI"),
    (103, "CHETAN", 85, 'B', "MUMBAI"),
    (104, "DHRUV", 96, "A", "DELHI"),
    (105, "ESHANN", 12, "F", "DELHI"),
    (106, "FARHAN", 82, "B", "DELHI")
;

SELECT * FROM student; -- QUERY ALL THE COLUMNS OF THE TABLE

SELECT DISTINCT CITY FROM student; -- QUERY UNIQUE CITY FROM STUDENT TABLE

SELECT NAME, CITY FROM student; -- QUERY ONLY NAME AND CITY COLUMN FROM THE STUDENT TABLE

SELECT * FROM student WHERE MARKS > 80; -- GIVES STUDENT WITH MARKS > 80

SELECT NAME AS "FULL NAME" FROM student WHERE CITY = "MUMBAI"; -- STUDENT WHO LIVE IN MUMBAI

SELECT * FROM student WHERE MARKS > 80 AND CITY = "MUMBAI"; -- AND OPERATOR FOR MULTI CONDITION


-- -------------------------------------------------------------------------------

-- DML commands

-- SWITCHING THE SAFE MODE OFF
SET SQL_SAFE_UPDATES = 0;

UPDATE student SET GRADE = "O" WHERE GRADE = "A";
UPDATE student SET MARKS = 82 WHERE ROLLNO = 105;
UPDATE student SET GRADE = "B" WHERE MARKS BETWEEN 80 AND 90;
UPDATE student SET MARKS = MARKS + 2;

UPDATE student SET MARKS = 12 WHERE ROLLNO = 105;
DELETE FROM student WHERE MARKS < 33;

DELETE FROM STUDENT; -- DELETE WHOLE DATA FROM THE TABLE

SELECT * FROM student;