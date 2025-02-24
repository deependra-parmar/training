/*

const obj = {
    name: "hey world",
    email: "hey@gmail.com",
    print: () => {
        console.log(`${this.name} + ${this.email}`);
    }
}

obj.print();

*/

/*
let str = 'hello'
console.log(str);
str = 'hey'
console.log(str);

*/


// Temporal Deadzone: Temporal deadzone is the certain moment or period in the execution of the program in which the variables are declared but cannot be access and thus result in Reference Error. It occurs when the variables are declared using let, const and class.
// This doesn't occur with var as variables with var are hoisted.

function takeNumber(num){
    console.log(num);
}

// takeNumber(num);
/*
num2 = 30;
takeNumber(num2); // Var is defined but prints undefined;

let num1 = 10;
var num2 = 20;

*/

// let b;
// b = 20;
// // console.log(a, b);

// var a = 10; // still be undefined due to hoisting. Its definition will be moved or tend to move while interpretation (for upper console.log())

// function print(){
//     a = 30;
//     let b = 10;

//     console.log(a, b);
// }

// console.log(a, b);
// print();

// -----------------------------

const a = 10;
// a = 10; // cannot re-assign even with the same value.

// console.log(a); 

// --------------------

const obj = {
    name: "Deependra Parmar",
    age: 20,
    introduce: function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}

obj.name = "Deependra"; // can change the value of property of const object
obj.lastname = "Parmar";
console.log("Last name of the user is: ", obj.lastname);
obj.introduce();

// Properties, variables and functions for a const object can be changed. Const doesn't mean that it will not change. It just means that variable identifier cannot be reassigned.

// obj = "Hello"; -------> THIS LINE GIVES ERROR
