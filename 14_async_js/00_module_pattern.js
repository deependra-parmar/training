/*
    Design Patterns is a general reusable solution to the common problems that occur in software design and development. Design patterns make code more readable, manageable, understandable and effective.

    The Module Pattern in JS is one of them, comes in the category/subset called Creational Design Patterns under Design Patterns that deals with the Object Creation and Proper management of Instantiation.

    Module pattern in JS is used to encapsulate multiple properties and define private and public access-levels, shielding the content of the module from outside access.

    Module is created using a named-IIFE which can have properties, methods, objects defined in it and can return the same.

*/

const Module = (() => {
    const privateVariable = "Hey there, I am a secret variable";
    const privateMethod = () => "This is the most private method in the world";

    return {
        publicVariable: "Public Variable here",
        publicFunction: () => "Public Function here",
        getPrivateVariable: () => privateVariable,
    }
})();

console.log(Module.publicVariable);
console.log(Module.publicFunction());
console.log(Module.getPrivateVariable());

/*
In this example, privateVariable and privateFunction are encapsulated within the module's private scope, and only the properties and methods explicitly returned in the object are accessible from outside the module. 
This pattern promotes encapsulation, avoids global scope pollution, and contributes to the creation of more maintainable and reusable code.
*/