// Write a JavaScript program to test if the first character of a string is uppercase or not, if not then set the first character to uppercase

const checkUppercase = function(str = "Hello"){
    if(typeof str != 'string' && str.length == 0){
        console.log("Invalid Input! String expected");
        return;
    }
    
    if(/[A-Z]/.test(str.charAt(0))){
        console.log(str, ": is Already in Uppercase");
        return;
    }
    
    
    return str[0].toUpperCase() + str.substring(1, str.length);
}

let str1 = "lowercase string";
let str2 = "Uppercase string";

console.log(checkUppercase(str1));
console.log(checkUppercase(str2));