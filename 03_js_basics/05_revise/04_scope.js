// example 01: 

var a = 10;
let b = 5;
const c = 10; // constant should be initialized during definition

{
    a = 20;
    console.log(a);
    
    let b = 10;
    console.log(b);
}

console.log(a);
console.log(b);
console.log(c);