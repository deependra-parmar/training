/*
Here is a code snippet:

for(var i = 0; i < 10; i++) {

   setTimeout(function() {

     console.log(i); 

   }, 10);

}
Give the reasons for the output the above snippet gives. Also, modify the snippet to print values from 0 to 9.
*/

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 10);
}

/*
The above code runs for 10 times and prints 10. 
Components: for loop(synchronous operation), setTimeOut(asynchronous operation)

When the execution of for loop starts, it start the task of handing over setTimeOut's callbacks to WebAPI and after 10ms delay, WebAPI push the callbacks to TaskQueue. 
Concurrently, in the call stack, synchronous task of for loop is going on so, till then the callbacks of setTimeOut will wait in the Task Queue.

As soon as the for loop is completed, the final value of i(global variable) becomes 10 so, global value of 10 is reflected in all the callbacks of Task Queue.

After all sync tasks are over with their execution by the call stack, the event loop will start to push the callbacks of setTimeout from task queue to call stack and thus all callbacks prints 10 in it.

Simple solution: just replace VAR ----------------> with ---------------> let
*/

