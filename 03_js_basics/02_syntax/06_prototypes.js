// Functions are not just objects. They are more specifically function-objects which means that although you can assingn properties to then, they do also have their own built-in properties and methods to Function Objects.
// Both arrays and functions type objects, special methods are defined via a specific prototype.

// Every object in JavaScript has a built-in Object called Prototype which has some built-in methods and properties. 
// Although Prototype is also an object in itself so, it will also have a prototype. This is called as Prototype Chaining.

let greet = {
    name: "Deependra",
    message: `Hello!, ${this.name}`,
    run: () => alert("Self-run")
}

let a = {
    run: () => alert("Run called")
}

console.log(greet);
console.log(a);

greet.__proto__ = a;
greet.run();

// Object.create() can be used to create a prototype for an object

const p = {
    hey: () => console.log("I am hey")
}

const obj = Object.create(p);
console.log(obj);