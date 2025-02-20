/*
    Promises are introduced in ES6 in 2015

    Promises: The Promise Object represent the eventual completion (or failure ) of an async operation and its resulting value.

    Promise has three different states:
        1. pending: intial state i.e. neither fulfilled nor rejected.
        2. fulfilled: async operation completed successfully
        3. rejected: async operation failed the completion.
    
    In order to understand how to consume a promise, let's start with creating a promise.
*/

// Creating a promise
const promise = new Promise((resolve, reject) => {
    // Do async operations here: DB calls, N/w call, fetch, setTimeOut, etc
    setTimeout(() => {
        console.log("Async Task is completed");
        resolve({
            username: "Deependra Parmar",
            email: "dparmar@gmail.com",
            message: "Hello from Deependra Parmar"
        }); // if you resolve, then only .then() will run
    }, 1000);
});

// Consuming a promise and Promise chaining
// Promise chaining allows for the sequential execution of asynchronous operations that depend on each other.
// In our case, firstly, we are fetching the user, returning the username and then, the next .then() callback is performing suitable operation on the username ahead.

promise.then((user) => {
    console.log("Promise returned data: ", user);
    return user.username;
}) 
.then((username) => {
    console.log("USERNAME IS: ", username);
})
.catch((error) => {
    console.log("Error fetching data: ", error);
})
.finally(() => {
    console.log("FINALLY SAYS: The Promise is either resolved or rejected");
});