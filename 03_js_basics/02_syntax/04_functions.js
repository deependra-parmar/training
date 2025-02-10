// Used to create reusable blocks of code

function square(n){
    return n*n;
}

console.log("Square of 8 is: ", square(8));

// Functions are eligible to change the properties and values of the original copy and the changes are visible globally outside the function as well.
// Functions can be nested

function addSquares(a,b){
    return square(a)+square(b);
}

// Function expression: function keyword can be used to create a function in an expression
let greet = function(){
    console.log("Hey there, Good Morning!");
}

greet();

// VarArgs in JS: 
let multiply = function(multiplier, ...args){
    return args.map(a => a*multiplier)
}

console.log(multiply(2, 1, 2, 3, 4, 5, 6));

// Arrow functions: more compatible way of defining functions, non-binding with this and cannot be used as a constructor.
const sayHello = () => {
    console.log("Hello guys!");
}

sayHello();

// Types of functions: 
/*
1. Regular functions: defined using function keyword followed by name, parameters, and block of code. 

    function sum(a,b){
        return a+b;
    }

2. Anonymous function: doesn't have a name associated. Return a value after in a variable. This is for single-use

    let square = function(n){
        return n*n;
    }

3. Immediately Invoked Function Expression(IIFE): runs as soon as browser finds it

    (function(a, b){
        return a+b;
    })(2,4);

4. Arrow functions: Concise way of writing function expressions. 

    const greet = (name) => {
        console.log(`Hello ${name}, Good Morning !`);
    }

5. Async functions: Functions that are made async for handling promises and asynchronous operations. 

    async function(){
        // async code here: fetch, setTimeOut, etc.
    }
*/