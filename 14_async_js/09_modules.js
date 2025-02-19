/*
    Module in JS is just another JavaScript file which is handling some logic, that can be exported and imported into and from another JS files. 

    What can we export: 
        - Variables
        - Objects
        - Functions
        - Classes
        - Promises

    How you can export?
        - Default export
        - Single Export
        - Named Export

*/

// CommonJS imports and exports

const sum = (a, b) => {
    return a+b;
}

const multiply = (a, b) => {
    return a*b;
}

export default sum; // default export ----> one per module
export { multiply }; // named export ----> can be multiple

