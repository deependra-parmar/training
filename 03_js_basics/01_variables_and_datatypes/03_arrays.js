/* Storing a collection of multiple items under same name.

    1. JS arrays are resizable and can contain a mix of different datatypes.
    2. Can be accessed using index
    3. Zero-indexed
*/

let arr = [0, true, "String", 203984923043023423908n, null, undefined, Symbol(1)]

console.log(arr);
console.log();

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}