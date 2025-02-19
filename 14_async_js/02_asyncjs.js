/*
Asynchronous programming in JavaScript is a programming paradigm that lets tasks be executed concurrently without blocking the main execution thread. It enables the execution of time-consuming operations, such as network requests or file I/O, without stalling the entire application.

In JS, asynchronous nature is achieved using three major ideas: 
    1. Callbacks
    2. Promises
    3. Async, await
*/

// Callbacks: Basic Idea behind async JS. Callback is generally called after a specific task is completed and is passed as an argument to another function

function getUser(userId, callback){
    // faking a db call with setTimeout()

    setTimeout(() => {
        const user = {id: userId, username: "deependraparmar", balance: 4500}
        callback(user);
    }, 1000);
}

// callback function
const displayUser = (user) => console.log(user);

// getting the user
getUser(1034, displayUser);