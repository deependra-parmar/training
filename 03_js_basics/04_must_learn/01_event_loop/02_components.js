/*
JavaScript's Event loop is the main engine for async operation handling. It has three major components in its own: 

1. Call Stack: In this, JS keeps track of function executions in LIFO manner. Once execution of a function is started, it has to be fully executed for next to start its execution. 
This stack only handles the synchronous tasks. 

*/

// Example for call stack 

function firstFunction(){
    console.log("Hey there, 1st function");
    
    secondFunction();
}

function secondFunction(){
    console.log("Hey there, 2nd function");
}

firstFunction();

/*
2. Task Queue: Task Queue in JS is responsible for handling all the async tasks, once they are ready to be executed. 
Tasks persists in the task queue until the call stack is empty which means that async tasks will start their execution once the sync tasks are done. 
Once the call stack is empty, the Event Loop tasks from the task queue to call stack one at a time for execution.
Works on FIFO basis.
*/

setTimeout(() => {
    console.log("Async task in setTimeOut");
}, 0);


/*
3. Web APIs: They provide the necessary env for handling async tasks. When any async operation or function is called, it is handed over to the Web API, which executes it independently of the main thread. 
Once the Web API completes the execution of the async task, the callback is sent to Task Queue, waiting for the event loop to handle it.

Web API's keep track of the time taken by the async operation by running a clock independent of the main thread. 
*/
