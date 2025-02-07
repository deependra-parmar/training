/*
    Objects in javascript is a non-primitive data type and stores data in the form of key-value pairs and more complex entities like array or another object.

    each key-value pair is called as property.
    a property can be a function, object, array or primitive data-type.

    Created using {} and an object is an instance of Object.
    Object are collection of different properties. An object can have a function
*/

var obj = {
    name: "Deependra Parmar",
    printName: function(){
        return this.name
    }
}

console.log(obj, typeof obj, typeof obj.name, typeof obj.printName)
console.log(obj.printName());

// Dot operator
obj.name = "Deependra"
obj.age = 20
obj.returnAge = function(){
    return this.age
}

console.log(obj.name)
console.log(obj.age);
console.log(obj.returnAge())
console.log();

// Square bracket notation
console.log(obj["name"])
console.log(obj['printName']())

// deleting a property
delete obj.age
console.log(obj.age)

