const str = "Hello world!          " // length is less and gives more as there are whitespaces at the end

let hero = ['thor', 'hulk', 'spiderman']
let obj = {
    name: "deependra"
}

// In case we want to inject a property in the prototype of the object itself so that every object that gets property by default has the injected property.
Object.prototype.objProto = function(){
    console.log("In Object Prototype");
}
Array.prototype.arrProto = function(){
    console.log("In Array Prototype");
}

obj.objProto();
str.objProto();
hero.objProto();

// prototype of Array will not reach the TOP_MOST Object Prototype
hero.arrProto();

String.prototype.trueLength = function(){
    console.log("True length of the string is: ", this.trim().length);
}

str.trueLength();
"hello      ".trueLength();
"         winner         ".trueLength();

// printing the Object, Array and String
console.log(Object.prototype);
console.log(Array.prototype);
console.log(String.prototype);
