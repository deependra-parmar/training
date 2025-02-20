// Using Promise create a function named 'sleep' that should invoke a callback function after x seconds. NOTE: sleep function should not block the call stack.

console.log("Start of Program")

const promise = new Promise((resolve) => {
    console.log('Start of Promise');
    
    function sleep(callback){
        console.log("Start of sleep");
        
        setTimeout(() => {
            callback();
        }, 2000);

        console.log("End of sleep \n");   
    }

    resolve(sleep);
    console.log('End of Promise');
});

const logMe = () => {
    console.log("Hey there, I am callback and you called me!")
}

promise.then((func) => {
    func(logMe);
}).catch((error) => {
    console.log("Error performing operation: ", error);
})

console.log("End of Program");