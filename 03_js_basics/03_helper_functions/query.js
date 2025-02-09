// Both arrays and functions type objects, special methods are defined via a specific prototype.

// Every object in JavaScript has a built-in Object called Prototype which has some built-in methods and properties. 
// Although Prototype is also an object in itself so, it will also have a prototype. This is called as Prototype Chaining.

// Every array, function or object by default inherits some properties from a class called PROTOTYPE. This is by default parent class of every object.
// Prototype is a mechanism which allows objects to inherit properties and methods from another objects giving rise to OOPS using JS.
// Using prototype, you can reuse code and combine objects.

let student = {
    name: "Deependra",
    age: 20,
    introduce: function() {
        console.log(`Hey, I am ${this.name}, ${this.age} years old individual`)
    }
}

student.introduce();
console.log(student);

let p = Object.create(student);
console.log(p);