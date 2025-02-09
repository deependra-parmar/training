// We know that JavaScript is a single-threaded language and Event Loops is the one which allows JS to handle Asynchronous Operations while remaining single threaded. 

// JavaScript has the capability to handle only one task at a time but Event Loop makes it capable of handling async tasks efficiently.

// Event loop allows the language to perform tasks like handling user interactions, processing network requests and code execution without freezing or blocking other operations. 

// This proves its importance while dealing with async tasks like setTimeOut, fetch and more. 

// Illustration 01: 

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

console.log("End");

/*
Output: 

Start
End
Inside setTimeOut
*/
