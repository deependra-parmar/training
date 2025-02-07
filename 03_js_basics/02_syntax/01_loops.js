// Loops are used to perform a task iteratively.

// for loop
let array = [0, 1, 2, 3, "Hello", true]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
    
// while
let index = 0
while(index < 5)
    console.log(index++);

// do while
let i = 0
do
    console.log(i++);
while(i<10)

// break is used to stop loop execution and continue for skipping the iteration of the loop

// continue is used to skip an iteration

// for...in loop: used to iterate an object's
let obj = {
    name: "Deependra Parmar",
    age: 20,
}

for(key in obj)
    console.log(`${key}: ${obj[key]}`);

// for...of loop: used to iterate an array
let arr = [1, 2, 3, 4, 5, 6]

for(i of arr)
    console.log(i);