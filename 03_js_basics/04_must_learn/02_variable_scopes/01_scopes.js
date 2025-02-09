// Variables in JS: JS has three ways of variable declarations

// VAR: for functional or global scoped variables.
// LET: blocked scope, local variable
// CONST: blocked scope, read-only named constant

var x = 1;
let a = 1;
const c = 1;

{
    let a = 2;
    var x = 2;
    const c = 10;
    console.log("a in block: ", a);
    console.log("x in block: ", x);
    console.log("c in block: ", c);
}

console.log(x, a, c)