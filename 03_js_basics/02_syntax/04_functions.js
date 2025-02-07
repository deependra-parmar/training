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