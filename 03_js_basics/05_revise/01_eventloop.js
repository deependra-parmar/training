/*
Why do we need different types of priority-based queues in JavaScript?
*/

// Sync code
console.log("Start of the Script") 

// MacroTask
setTimeout(() => {
    console.log("Inside the setTimeout");
}, 3000);

// MicroTask
Promise.resolve().then(() => {
    console.log("Inside the Promise")
});

// Sync Code
console.log("End of the script");