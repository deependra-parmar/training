/*
    Promise is the fundamental of asynchronous javascript. Its basically an object returned to the called when we call an async function. 
    Used to manage async operations without blocking the sync operations and main thread.

    Promises has three main status:
        1. pending: task is ongoing and currently neither resolved nor rejected.
        2. fulfilled: async operation is done and .then() callback is called to perform/process the data received.
        3. rejected: async operation failed. .catch() callback is called for handling the error
*/

function returnPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random();
    
            if(number > 0.5)
                resolve({success: true, data: number});
            else
                reject({success: false, message: "Error Occured while fetching data"});
        }, 1000);
    }).then((response) => {
        console.log(response)
    }).catch(error => {
        console.log(error);
    });
}

let p1 = returnPromise();
let p2 = returnPromise();
let p3 = returnPromise();