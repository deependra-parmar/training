// All primitives are pass by value in nature
let a = 20
let b = a

b = 10 // changing the value of b
console.log("a: ", a, " | ", "b: ", b);


// ---------------------------------

// While dealing with objects (including arrays and functions), JS uses pass by references.

let obj1 = {
    value: 10
}

obj2 = obj1;
obj2.value = 20;
console.log("Obj1 value: ", obj1.value, " | ", "Obj2 value: ", obj2.value);

function func1(num){
    return num + 10;
}

const func2 = func1;

console.log("Func2 with 10 says: ", func2(10));