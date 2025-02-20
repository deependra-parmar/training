/* What is JavaScript? ----> cross-platform, object oriented language for interactive web-pages and server-side versions of JS like Node.js

1. Client-Side JS is used in controlling browser and its DOM
2. Server-Side JS extends its functionality by running JS on the server.

JS is case-sensitive in nature and uses UNICODE CHARACTER SET for encoding.
Instructions are seperated with ";". Not necessary in case of different instruction in different lines but compulsory when multiple instructions are in the same line

*/

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