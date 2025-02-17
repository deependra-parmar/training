// Immediately Invoked Function Expression: used for single-use functions eg for connecting for database, or a service.
// IIFE doesn't create the new scope in the global context/scope and pollute it.
// In order to specify that invocation of an IIFE has ended, using a ; at the end of the invocation is always a good practice.

// named IIFE
(function connect(){
    console.log("Database 1 connected....");
})(); // gives error when ; is not there

// unnamed IIFE with params
((name) => {
    console.log(`Database 2 connected by ${name}....`);
})("Deependra");