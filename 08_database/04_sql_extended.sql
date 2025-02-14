USE college;

-- AGGREGATE FUNCTIONS ARE FUNCTIONS THAT PERFORM A CALCULATION ON A SET
-- OF VALUES AND RETURN A SINGLE VALUE

SELECT sum(MARKS) AS TOTAL_MARKS FROM student;
SELECT count(*) AS TOTAL_STUDENTS FROM student;
SELECT max(MARKS) AS MAXIMUM_MARKS FROM student;
SELECT min(MARKS) AS MINIMUM_MARKS FROM student;
SELECT avg(MARKS) AS AVERAGE_MARKS FROM student;

-- Clauses in SQL are used to filter out data from the relation according to the needs of the user
-- Common clauses are: select, from, where, group by, having, order by, insert, limit


-- Constraints in SQL are used to perform a check while making CRUD Operations

CREATE TABLE IF NOT EXISTS employee (
	id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    CONSTRAINT age_check CHECK (age >= 18)
);

CREATE TABLE IF NOT EXISTS human (
	age INT CHECK (age >= 18)
);

INSERT INTO human values (12); -- ---> GIVES ERROR FOR CHECK VIOLATION








