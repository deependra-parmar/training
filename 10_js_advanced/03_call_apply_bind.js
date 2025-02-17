let user1 = {
    firstName: "Deependra",
    lastName: "Parmar"
}
let user2 = {
    firstName: "Virat",
    lastName: "Kohli"
}

let printName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName + " from " + hometown, ", " + state);
}

// Call(): Function Borrowing where we can call function of another object for different object.
// call(thisArg, functionVar1, functionVar2, .....)
// first parameter of call is the reference of this.

printName.call(user1, "Dewas", "MP");
printName.call(user2, "Mumbai", "Maharashtra");
console.log();

// apply(): same as call just pass the function parameter in the form of array
printName.apply(user1, ["Dewas", "MP"]);
printName.apply(user2, ["Mumbai", "Maharashtra"]);
console.log();

// bind(): used to bind a particular function to a particular object and call it later if needed
const func1 = printName.bind(user1, "Dewas", "MP");
console.log(func1);
func1();

console.log(user1); // obj will not have a function but it will be bound at runtime.