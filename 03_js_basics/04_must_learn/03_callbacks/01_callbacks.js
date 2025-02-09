/*
Callback functions are the functions that are passed to another functions as an argument and are then invoked by the outer functions in order to perform some task or action.
Callbacks are generally executed when the function has finished its work.

Callback functions are used in various contexts, including event handling, asynchronous operations, and functional programming.

Callbacks are used for async operations in order to prevent blocking execution.
*/

function add(a,b){
    return a+b;
}

function adder(a, b, add){
    return add(a,b);
}

console.log("Addition of 1 and 2 is: ", adder(1, 2, add));