// Closure is the combination of the lexical environment with the function so that you can associate data with the function that you want to work upon.
// A closure is a feature in JS where an inner function has access to outer function's variables called as - a scope chain

/*
    A closure has three scope chains: 

        1. outer function's variables
        2. its own variables
        3. global variables
*/

function outer(){
    let name = "Deependra Parmar"
    let age = 20

    function inner(){
        let country = "India"

        console.log(`I am ${name}, ${age} years old, live in ${country}`);
    }

    return inner;
}


const obj = outer();
console.log(typeof obj);
obj();