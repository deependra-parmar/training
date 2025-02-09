/*
MicroTask vs MacroTask

1. MacroTask: Tasks like setTimeout(), fetch() are macrotasks, sometimes called as just tasks that are pushed to task queue for execution after all sync tasks are done with their execution.

2. MicroTask: Tasks like Promises and MutationObserver callbacks. These tasks are queued in Microtask queue nd are processed immediately after the completion of sync code and before execution of Macro Tasks.

Priority of MicroTasks > MacroTasks.
*/

console.log("Hey there, this is START");

setTimeout(() => {
    console.log("MacroTask");
}, 2000);

Promise.resolve().then(() => {
    console.log("MicroTask");
})

console.log("END");